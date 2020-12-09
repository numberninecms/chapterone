<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Page\SinglePage;

use NumberNine\Model\Component\ComponentInterface;
use NumberNine\Model\Component\Features\PagePropertyTrait;

class SinglePage implements ComponentInterface
{
    use PagePropertyTrait;

    public function getExposedValues(): array
    {
        return [
            'page' => $this->page,
        ];
    }
}
