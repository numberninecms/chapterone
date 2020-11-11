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

use Doctrine\Persistence\ObjectManager;
use NumberNine\DataFixtures\BaseFixture;
use NumberNine\Entity\ThemeOptions;
use Symfony\Component\Yaml\Yaml;

class ThemeOptionsFixtures extends BaseFixture
{
    public function loadData(ObjectManager $manager): void
    {
        $options = Yaml::parseFile(__DIR__ . '/../Resources/config/options.yaml');
        $themeOptions = (new ThemeOptions())->setTheme('ChapterOne')->setOptions($options['options']);

        $manager->persist($themeOptions);
        $manager->flush();
    }
}
