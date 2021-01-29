<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Product\Section\ProductDescription;

use NumberNine\Commerce\Model\Component\Features\ProductPropertyTrait;
use NumberNine\Model\Component\ComponentInterface;

class ProductDescription implements ComponentInterface
{
    use ProductPropertyTrait;

    public function getTemplateParameters(): array
    {
        return [
            'product' => $this->product,
        ];
    }
}
