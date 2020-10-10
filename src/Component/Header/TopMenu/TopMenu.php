<?php
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Header\TopMenu;

use NumberNine\Entity\Menu;
use NumberNine\Model\Component\AbstractComponent;

class TopMenu extends AbstractComponent
{
    /**
     * @return Menu
     */
    public function getMenu(): ?Menu
    {
        return $this->toolbox->getMenuAtLocation('top_menu');
    }
}
