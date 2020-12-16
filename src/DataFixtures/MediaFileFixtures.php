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
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use NumberNine\DataFixtures\UserFixtures;
use NumberNine\Entity\MediaFile;
use NumberNine\Entity\User;
use NumberNine\Media\MediaFileFactory;

final class MediaFileFixtures extends Fixture implements DependentFixtureInterface, FixtureGroupInterface
{
    private MediaFileFactory $mediaFileFactory;

    public function __construct(MediaFileFactory $mediaFileFactory)
    {
        $this->mediaFileFactory = $mediaFileFactory;
    }

    public function load(ObjectManager $manager): void
    {
        /** @var User $admin */
        $admin = $this->getReference(User::class . '_administrator');
        $logo = $this->mediaFileFactory->createMediaFileFromFilename(
            __DIR__ . '/../../assets/images/NumberNine512_slogan.png',
            $admin,
            false,
            true,
            false
        );
        $logo->setTitle('NumberNine Logo');
        $this->addReference(MediaFile::class . '_logo', $logo);

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [UserFixtures::class];
    }

    public static function getGroups(): array
    {
        return ['numbernine_theme'];
    }
}
