<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Post\Partial\PostNavigation;

use NumberNine\Entity\Post;
use NumberNine\Model\Component\AbstractComponent;
use NumberNine\Model\Component\Features\PostPropertyTrait;
use NumberNine\Repository\PostRepository;

class PostNavigation extends AbstractComponent
{
    use PostPropertyTrait;

    private PostRepository $postRepository;
    private ?Post $previousPost = null;
    private ?Post $nextPost = null;
    private bool $fetched = false;

    public function __construct(PostRepository $postRepository)
    {
        $this->postRepository = $postRepository;
    }

    public function getPreviousPost(): ?Post
    {
        if (!$this->fetched) {
            $this->fetchNavigationPosts();
        }

        return $this->previousPost;
    }

    public function getNextPost(): ?Post
    {
        if (!$this->fetched) {
            $this->fetchNavigationPosts();
        }

        return $this->nextPost;
    }

    private function fetchNavigationPosts(): void
    {
        if (!$this->post) {
            $this->fetched = true;
            return;
        }

        $siblings = $this->postRepository->findSiblings($this->post);
        $this->previousPost = $siblings['previous'];
        $this->nextPost = $siblings['next'];
        $this->fetched = true;
    }
}
