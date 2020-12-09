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
use NumberNine\Model\Component\ComponentInterface;
use NumberNine\Model\Component\Features\PostPropertyTrait;
use NumberNine\Repository\PostRepository;

class PostNavigation implements ComponentInterface
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

    private function getPreviousPost(): ?Post
    {
        if (!$this->fetched) {
            $this->fetchNavigationPosts();
        }

        return $this->previousPost;
    }

    private function getNextPost(): ?Post
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

    public function getExposedValues(): array
    {
        return [
            'previousPost' => $this->getPreviousPost(),
            'nextPost' => $this->getNextPost(),
        ];
    }
}
