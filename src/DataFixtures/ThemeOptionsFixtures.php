<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;
use NumberNine\Entity\ThemeOptions;
use Symfony\Component\Yaml\Yaml;

class ThemeOptionsFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager): void
    {
        $options = Yaml::parseFile(__DIR__ . '/../Resources/config/options.yaml');
        $themeOptions = (new ThemeOptions())->setTheme('ChapterOne')->setOptions($options['options']);

        $manager->persist($themeOptions);
        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['numbernine_theme'];
    }
}
