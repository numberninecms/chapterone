<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Content\SocialLinks;

use NumberNine\Model\Component\ComponentInterface;
use NumberNine\Model\Component\Features\ContentEntityPropertyTrait;
use NumberNine\Social\SocialSharer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class SocialLinks implements ComponentInterface
{
    use ContentEntityPropertyTrait;

    private ?Request $request;
    private SocialSharer $socialSharer;

    public function __construct(RequestStack $requestStack, SocialSharer $socialSharer)
    {
        $this->request = $requestStack->getMainRequest();
        $this->socialSharer = $socialSharer;
    }

    private function getFacebookLink(): string
    {
        return $this->request ? $this->socialSharer->getFacebookShareLink($this->request->getUri()) : '';
    }

    private function getTwitterLink(): string
    {
        return $this->request ? $this->socialSharer->getTwitterShareLink($this->request->getUri()) : '';
    }

    private function getPinterestLink(): string
    {
        return $this->request ? $this->socialSharer->getPinterestShareLink($this->request->getUri()) : '';
    }

    private function getLinkedInLink(): string
    {
        return $this->request ? $this->socialSharer->getLinkedInShareLink($this->request->getUri()) : '';
    }

    private function getEmailLink(): string
    {
        $default = 'Sharing a link with you';
        $title = $this->contentEntity ? ($this->contentEntity->getTitle() ?? $default) : $default;

        return $this->request ? $this->socialSharer->getEmailShareLink($title, $this->request->getUri()) : '';
    }

    public function getTemplateParameters(): array
    {
        return [
            'facebookLink' => $this->getFacebookLink(),
            'twitterLink' => $this->getTwitterLink(),
            'pinterestLink' => $this->getPinterestLink(),
            'linkedInLink' => $this->getLinkedInLink(),
            'emailLink' => $this->getEmailLink(),
        ];
    }
}
