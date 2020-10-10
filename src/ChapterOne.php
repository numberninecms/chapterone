<?php
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne;

use NumberNine\Annotation\Theme;
use NumberNine\Model\Theme\AbstractTheme;

/**
 * @Theme(
 *     name="ChapterOne",
 *     areas={
 *         "header": "Header",
 *         "blog_sidebar": "Blog sidebar",
 *         "shop_sidebar": "Shop sidebar",
 *         "footer": "Footer",
 *     }
 * )
 */
class ChapterOne extends AbstractTheme
{
}
