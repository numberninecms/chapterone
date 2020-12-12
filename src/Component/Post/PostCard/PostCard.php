<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Post\PostCard;

use Exception;
use NumberNine\Model\Component\ComponentInterface;
use NumberNine\Model\Component\Features\PostPropertyTrait;
use NumberNine\Content\ShortcodeProcessor;
use NumberNine\Shortcode\TextShortcode\TextShortcode;

use function Symfony\Component\String\u;

class PostCard implements ComponentInterface
{
    use PostPropertyTrait;

    private ShortcodeProcessor $shortcodeProcessor;

    public function __construct(ShortcodeProcessor $shortcodeProcessor)
    {
        $this->shortcodeProcessor = $shortcodeProcessor;
    }

    /**
     * @return string
     * @throws Exception
     */
    private function getExcerpt(): string
    {
        if (!$this->post) {
            return '';
        }

        if ($excerpt = $this->post->getExcerpt()) {
            return $excerpt;
        }

        $shortcode = $this->shortcodeProcessor->getFirstShortcodeOfType(
            TextShortcode::class,
            (string)$this->post->getContent()
        );

        return $shortcode ? u(strip_tags($shortcode['parameters']['content']))->truncate(300, '...') : '';
    }

    public function getTemplateParameters(): array
    {
        return [
            'post' => $this->post,
            'excerpt' => $this->getExcerpt(),
        ];
    }
}
