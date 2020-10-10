<?php
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\EventSubscriber;

use NumberNine\Event\Customizer\CustomizerBuilderBeforeInitEvent;
use NumberNine\Event\Theme\Configuration\ConfigurationBuilderEvent;
use NumberNine\Model\Theme\Configuration\Loader\YamlConfigurationLoader;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ConfigurationBuilderEventSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents(): array
    {
        return [
            CustomizerBuilderBeforeInitEvent::class => 'buildCustomizer',
            ConfigurationBuilderEvent::class => 'buildConfiguration',
        ];
    }

    public function buildConfiguration(ConfigurationBuilderEvent $event): void
    {
        $builder = $event->getBuilder();

        $loader = new YamlConfigurationLoader($builder, new FileLocator(__DIR__ . '/../Resources/config/'));
        $loader->load('options.yaml');
    }

    public function buildCustomizer(CustomizerBuilderBeforeInitEvent $event): void
    {
        $builder = $event->getBuilder();

        $builder
            ->appendSection('header', 'top_bar', ['title' => 'Top Bar']);
    }
}
