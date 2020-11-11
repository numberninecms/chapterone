<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Event;

use NumberNine\ChapterOne\Model\Product\ProductSection;
use LogicException;

class ProductSectionsEvent
{
    /** @var ProductSection[] */
    private array $sections;

    /**
     * @param ProductSection[] $sections
     */
    public function __construct(array $sections)
    {
        $this->sections = $sections;
    }

    /**
     * @return ProductSection[]
     */
    public function getSections(): array
    {
        return $this->sections;
    }

    /**
     * @param ProductSection $section
     * @return self
     */
    public function addSection(ProductSection $section): self
    {
        $this->sections[] = $section;

        return $this;
    }

    /**
     * @param ProductSection[] $sections
     */
    public function setSections(array $sections): void
    {
        $this->sections = $sections;
    }
}
