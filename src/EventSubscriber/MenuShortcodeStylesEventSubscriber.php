<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace NumberNine\ChapterOne\EventSubscriber;

use NumberNine\Event\MenuShortcodeStyleEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

final class MenuShortcodeStylesEventSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            MenuShortcodeStyleEvent::class => 'addMenuStyles',
        ];
    }

    public function addMenuStyles(MenuShortcodeStyleEvent $event): void
    {
        $event->setStyles([
            'main' => 'Mega menu',
            'top-level-with-separators' => 'Top level only with separators',
            'top-level-without-separators' => 'Top level only without separators',
        ]);
    }
}
