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
use NumberNine\Commerce\Model\Component\Features\ProductPropertyTrait;
use NumberNine\Model\Component\ComponentInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class ProductSections implements ComponentInterface
{
    use ProductPropertyTrait;

    private EventDispatcherInterface $eventDispatcher;

    public function __construct(EventDispatcherInterface $eventDispatcher)
    {
        $this->eventDispatcher = $eventDispatcher;
    }

    private function getSections(): array
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

    public function getTemplateParameters(): array
    {
        return [
            'product' => $this->product,
            'sections' => $this->getSections(),
        ];
    }
}
