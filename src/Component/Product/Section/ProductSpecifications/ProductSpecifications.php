<?php
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Product\Section\ProductSpecifications;

use NumberNine\CommerceBundle\Repository\ProductAttributeRepository;
use NumberNine\CommerceBundle\Repository\ProductAttributeValueRepository;
use NumberNine\Model\Component\AbstractComponent;
use NumberNine\Model\Component\Features\ProductPropertyTrait;

class ProductSpecifications extends AbstractComponent
{
    use ProductPropertyTrait;

    private ProductAttributeRepository $productAttributeRepository;
    private ProductAttributeValueRepository $productAttributeValueRepository;

    /**
     * @param ProductAttributeRepository $productAttributeRepository
     * @param ProductAttributeValueRepository $productAttributeValueRepository
     */
    public function __construct(ProductAttributeRepository $productAttributeRepository, ProductAttributeValueRepository $productAttributeValueRepository)
    {
        $this->productAttributeRepository = $productAttributeRepository;
        $this->productAttributeValueRepository = $productAttributeValueRepository;
    }

    public function getAttributes(): array
    {
        if (!$this->product) {
            return [];
        }

        $attributes = $this->productAttributeRepository->getProductAttributes($this->product);
        $values = $this->productAttributeValueRepository->getProductAttributeValues($this->product, $attributes);

        $result = [];

        foreach ($values as $value) {
            if (!$value->getAttribute() || !($attribute = $value->getAttribute())) {
                continue;
            }

            $result[$attribute->getName()] = $value->getValue();
        }

        return $result;
    }
}
