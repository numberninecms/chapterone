<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Product\ProductSections;

use NumberNine\ChapterOne\Event\ProductSectionsEvent;
use NumberNine\ChapterOne\Model\Product\ProductSection;
use NumberNine\Model\Component\AbstractComponent;
use NumberNine\Model\Component\Features\ProductPropertyTrait;

class ProductSections extends AbstractComponent
{
    use ProductPropertyTrait;

    /**
     * @return array
     */
    public function getSections(): array
    {
        $sections = [
            new ProductSection('Description', 'ProductDescription', 512),
            new ProductSection('Specifications', 'ProductSpecifications', 256)
        ];

        /** @var ProductSectionsEvent $productSectionsEvent */
        $productSectionsEvent = $this->eventDispatcher->dispatch(new ProductSectionsEvent($sections));
        $sections = $productSectionsEvent->getSections();
        usort($sections, fn(ProductSection $a, ProductSection $b) => $b->getPriority() <=> $a->getPriority());

        return $sections;
    }
}
