<?php

/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace NumberNine\ChapterOne\Component\Product\SingleProduct;

use NumberNine\Commerce\Model\CommerceSettings;
use NumberNine\Commerce\Model\Component\Features\ProductPropertyTrait;
use NumberNine\Configuration\ConfigurationReadWriter;
use NumberNine\Entity\ContentEntity;
use NumberNine\Entity\MediaFile;
use NumberNine\Model\Component\ComponentInterface;
use NumberNine\Repository\ContentEntityRepository;

class SingleProduct implements ComponentInterface
{
    use ProductPropertyTrait;

    private ConfigurationReadWriter $configurationReadWriter;
    private ContentEntityRepository $contentEntityRepository;

    public function __construct(
        ContentEntityRepository $contentEntityRepository,
        ConfigurationReadWriter $configurationReadWriter
    ) {
        $this->contentEntityRepository = $contentEntityRepository;
        $this->configurationReadWriter = $configurationReadWriter;
    }

    private function getCurrency(): string
    {
        return $this->configurationReadWriter->read(CommerceSettings::BASE_CURRENCY, 'USD');
    }

    /**
     * @return MediaFile[]|ContentEntity[]
     */
    private function getImages(): array
    {
        if (!$this->product) {
            return [];
        }

        $mediaFiles = $this->contentEntityRepository->findChildrenContentEntitiesOfType($this->product, 'media_file');

        return array_filter($mediaFiles, fn(MediaFile $file) => strpos((string)$file->getMimeType(), 'image/') === 0);
    }

    public function getTemplateParameters(): array
    {
        return [
            'product' => $this->product,
            'images' => $this->getImages(),
            'currency' => $this->getCurrency(),
        ];
    }
}
