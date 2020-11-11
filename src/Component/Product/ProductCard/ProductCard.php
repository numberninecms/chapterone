<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Product\ProductCard;

use NumberNine\CommerceBundle\Model\CommerceSettings;
use NumberNine\Model\Component\AbstractComponent;
use NumberNine\Model\Component\Features\ProductPropertyTrait;
use NumberNine\Service\CoreOptionService;

class ProductCard extends AbstractComponent
{
    use ProductPropertyTrait;

    private CoreOptionService $coreOptionService;

    /**
     * @param CoreOptionService $coreOptionService
     */
    public function __construct(CoreOptionService $coreOptionService)
    {
        $this->coreOptionService = $coreOptionService;
    }

    public function getCurrency(): string
    {
        return $this->coreOptionService->get(CommerceSettings::BASE_CURRENCY, 'USD');
    }
}
