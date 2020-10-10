<?php
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Model\Product;

use NumberNine\Model\Component\ComponentInterface;

class ProductSection
{
    private string $name;
    private string $component;
    private int $priority;

    public function __construct(string $sectionName, string $componentName, int $priority = 0)
    {
        $this->name = $sectionName;
        $this->component = $componentName;
        $this->priority = $priority;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getComponent(): string
    {
        return $this->component;
    }

    /**
     * @return int
     */
    public function getPriority(): int
    {
        return $this->priority;
    }
}
