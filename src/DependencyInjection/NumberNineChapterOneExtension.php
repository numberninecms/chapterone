<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\DependencyInjection;

use NumberNine\Commerce\NumberNineCommerceBundle;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\PrependExtensionInterface;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Symfony\Component\HttpKernel\DependencyInjection\ConfigurableExtension;
use Symfony\Component\Yaml\Yaml;

class NumberNineChapterOneExtension extends ConfigurableExtension implements PrependExtensionInterface
{
    public function getAlias(): string
    {
        return 'numbernine_chapterone';
    }

    public function prepend(ContainerBuilder $container): void
    {
        $extensions = $container->getExtensions();
        $configFile = __DIR__ . '/../Resources/config/app.yaml';

        if (!file_exists($configFile)) {
            return;
        }

        $resource = Yaml::parseFile($configFile);

        foreach ($resource as $name => $config) {
            if (empty($extensions[$name])) {
                continue;
            }

            $container->prependExtensionConfig($name, $config);
        }

        $paths = [];
        $appPath = '%kernel.project_dir%/templates/bundles/TwigBundle';
        $themePath = '%kernel.project_dir%/vendor/numberninecms/chapterone/src/Resources/views/bundles/TwigBundle';
        /** @var string $projectDir */
        $projectDir = $container->getParameter('kernel.project_dir');

        if (is_dir(str_replace('%kernel.project_dir%', $projectDir, $appPath))) {
            $paths[$appPath] = 'Twig';
        }

        $paths[$themePath] = 'Twig';
        $container->loadFromExtension('twig', ['paths' => $paths]);
    }

    public function loadInternal(array $mergedConfig, ContainerBuilder $container): void
    {
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__ . '/../Resources/config'));
        $loader->load('services.yaml');

        if (class_exists(NumberNineCommerceBundle::class)) {
            $loader->load('services_commerce.yaml');
        }
    }
}
