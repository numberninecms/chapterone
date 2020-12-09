<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Post\SinglePost;

use NumberNine\Model\Component\ComponentInterface;
use NumberNine\Model\Component\Features\PostPropertyTrait;

class SinglePost implements ComponentInterface
{
    use PostPropertyTrait;

    public function getExposedValues(): array
    {
        return [
            'post' => $this->post,
        ];
    }
}
