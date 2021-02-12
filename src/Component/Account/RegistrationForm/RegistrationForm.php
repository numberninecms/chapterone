<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Account\RegistrationForm;

use NumberNine\Entity\User;
use NumberNine\Event\RegistrationFormBuilderEvent;
use NumberNine\Event\RegistrationFormSuccessEvent;
use NumberNine\Form\User\RegistrationFormType;
use NumberNine\Model\Component\ComponentInterface;
use NumberNine\Security\UserAuthenticator;
use NumberNine\Security\UserFactory;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class RegistrationForm implements ComponentInterface, EventSubscriberInterface
{
    private FormFactoryInterface $formFactory;
    private ?Request $request;
    private UserFactory $userFactory;
    private UserAuthenticator $userAuthenticator;
    private EventDispatcherInterface $eventDispatcher;
    private ?Response $response = null;

    public static function getSubscribedEvents(): array
    {
        return [
            ControllerEvent::class => 'processForm',
            ResponseEvent::class => 'alterResponse',
        ];
    }

    public function __construct(
        FormFactoryInterface $formFactory,
        RequestStack $requestStack,
        UserFactory $userFactory,
        UserAuthenticator $userAuthenticator,
        EventDispatcherInterface $eventDispatcher
    ) {
        $this->formFactory = $formFactory;
        $this->userFactory = $userFactory;
        $this->userAuthenticator = $userAuthenticator;
        $this->eventDispatcher = $eventDispatcher;
        $this->request = $requestStack->getCurrentRequest();
    }

    private function getForm(): ?FormView
    {
        if (!$this->request || !($form = $this->getFormObject())) {
            return null;
        }

        $form->handleRequest($this->request);

        return $form->createView();
    }

    private function getFormObject(): ?FormInterface
    {
        if (!$this->request) {
            return null;
        }

        $builder = $this->formFactory->createBuilder(RegistrationFormType::class, new User());

        /** @var RegistrationFormBuilderEvent $event */
        $event = $this->eventDispatcher->dispatch(new RegistrationFormBuilderEvent($builder));

        return $event->getBuilder()->getForm();
    }

    public function processForm(ControllerEvent $event): void
    {
        if (!($form = $this->getFormObject())) {
            return;
        }

        $form->handleRequest($event->getRequest());

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $this->userFactory->createUser(
                $form->get('username')->getData(),
                $form->get('email')->getData(),
                $form->get('plainPassword')->getData()
            );

            $response = $this->userAuthenticator->authenticateUser($user);

            /** @var RegistrationFormSuccessEvent $event */
            $event = $this->eventDispatcher->dispatch(new RegistrationFormSuccessEvent($user, $response));

            $this->response = $event->getResponse();
        }
    }

    public function alterResponse(ResponseEvent $event): void
    {
        if ($this->response) {
            $event->setResponse($this->response);
        }
    }

    public function getTemplateParameters(): array
    {
        return [
            'form' => $this->getForm(),
        ];
    }
}
