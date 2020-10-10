<?php
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Header\Logo;

use NumberNine\Model\General\Settings;
use NumberNine\Model\Theme\AbstractCustomizableComponent;
use NumberNine\Model\Theme\MovableComponent;

class Logo extends AbstractCustomizableComponent implements MovableComponent
{
    public static function injectThemeOptions(): array
    {
        return ['site_logo_max_width', 'site_logo_dark', 'site_logo_max_width', 'site_logo_padding'];
    }

    public static function injectSettings(): array
    {
        return [Settings::SITE_TITLE];
    }
}
