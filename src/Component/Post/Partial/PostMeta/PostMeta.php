<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Post\Partial\PostMeta;

use NumberNine\Model\Component\AbstractComponent;
use NumberNine\Model\Component\ComponentInterface;
use NumberNine\Model\Component\Features\PostPropertyTrait;

class PostMeta implements ComponentInterface
{
    use PostPropertyTrait;

    public function getTemplateParameters(): array
    {
        return [
            'post' => $this->post,
        ];
    }
}
