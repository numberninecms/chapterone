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

use NumberNine\Event\Theme\GenericEvent;

class HeaderClassesEvent extends GenericEvent
{
    public function __construct()
    {
        parent::__construct('test-header-class another-test-header-class');
    }
}
