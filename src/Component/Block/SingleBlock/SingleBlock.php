<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Block\SingleBlock;

use NumberNine\Model\Component\ComponentInterface;
use NumberNine\Model\Component\Features\BlockPropertyTrait;

class SingleBlock implements ComponentInterface
{
    use BlockPropertyTrait;

    public function getTemplateParameters(): array
    {
        return [
            'block' => $this->block,
        ];
    }
}
