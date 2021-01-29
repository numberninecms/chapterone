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

use NumberNine\Commerce\Model\CommerceSettings;
use NumberNine\Commerce\Model\Component\Features\ProductPropertyTrait;
use NumberNine\Configuration\ConfigurationReadWriter;
use NumberNine\Model\Component\ComponentInterface;

class ProductCard implements ComponentInterface
{
    use ProductPropertyTrait;

    private ConfigurationReadWriter $configurationReadWriter;

    public function __construct(ConfigurationReadWriter $configurationReadWriter)
    {
        $this->configurationReadWriter = $configurationReadWriter;
    }

    public function getTemplateParameters(): array
    {
        return [
            'product' => $this->product,
            'currency' => $this->configurationReadWriter->read(CommerceSettings::BASE_CURRENCY, 'USD'),
        ];
    }
}
