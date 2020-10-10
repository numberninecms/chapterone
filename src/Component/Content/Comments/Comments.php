<?php
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Content\Comments;

use Doctrine\ORM\EntityManagerInterface;
use NumberNine\Annotation\Shortcode\Exclude;
use NumberNine\Entity\Comment;
use NumberNine\Entity\ContentEntity;
use NumberNine\Entity\User;
use NumberNine\Event\CurrentContentEntityEvent;
use NumberNine\Form\Content\CommentFormType;
use NumberNine\Model\Component\AbstractComponent;
use NumberNine\Model\Component\Features\ContentEntityPropertyTrait;
use NumberNine\Repository\CommentRepository;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class Comments extends AbstractComponent implements EventSubscriberInterface
{
    use ContentEntityPropertyTrait;

    private CommentRepository $commentRepository;
    private FormFactoryInterface $formFactory;
    private TokenStorageInterface $tokenStorage;
    private EntityManagerInterface $entityManager;
    private ?ContentEntity $currentEntity = null;

    public static function getSubscribedEvents(): array
    {
        return [
            ResponseEvent::class => 'processForm',
            CurrentContentEntityEvent::class => 'setCurrentEntity',
        ];
    }

    public function __construct(CommentRepository $commentRepository, FormFactoryInterface $formFactory, TokenStorageInterface $tokenStorage, EntityManagerInterface  $entityManager)
    {
        $this->commentRepository = $commentRepository;
        $this->formFactory = $formFactory;
        $this->tokenStorage = $tokenStorage;
        $this->entityManager = $entityManager;
    }

    public function getComments(): array
    {
        if (!$this->contentEntity) {
            return [];
        }

        return $this->commentRepository->findByContentEntityId((int)$this->contentEntity->getId());
    }

    public function getForm(): ?FormView
    {
        return $this->getFormObject()->createView();
    }

    private function getFormObject(): FormInterface
    {
        $comment = new Comment();
        $user = $this->tokenStorage->getToken() !== null ? $this->tokenStorage->getToken()->getUser() : null;

        if ($user instanceof User) {
            $comment->setAuthor($user);
        }

        $comment->setContentEntity($this->currentEntity);

        return $this->formFactory->createBuilder(CommentFormType::class, $comment)
            ->add('post', SubmitType::class)
            ->getForm();
    }

    /**
     * @Exclude
     * @param ResponseEvent $event
     */
    public function processForm(ResponseEvent $event): void
    {
        $request = $event->getRequest();

        $form = $this->getFormObject();
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($form->getData());
            $this->entityManager->flush();

            $event->setResponse(new RedirectResponse($request->getPathInfo()));
        }
    }

    public function setCurrentEntity(CurrentContentEntityEvent $event): void
    {
        $this->currentEntity = $event->getContentEntity();
    }
}
