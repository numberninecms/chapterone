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

use NumberNine\CommerceBundle\Model\CommerceSettings;
use NumberNine\Entity\ContentEntity;
use NumberNine\Entity\MediaFile;
use NumberNine\Model\Component\AbstractComponent;
use NumberNine\Model\Component\Features\ProductPropertyTrait;
use NumberNine\Repository\ContentEntityRepository;
use NumberNine\Service\CoreOptionService;

class SingleProduct extends AbstractComponent
{
    use ProductPropertyTrait;

    private CoreOptionService $coreOptionService;
    private ContentEntityRepository $contentEntityRepository;

    /**
     * @param ContentEntityRepository $contentEntityRepository
     */
    public function __construct(ContentEntityRepository $contentEntityRepository, CoreOptionService $coreOptionService)
    {
        $this->contentEntityRepository = $contentEntityRepository;
        $this->coreOptionService = $coreOptionService;
    }

    /**
     * @return string
     */
    public function getCurrency(): string
    {
        return $this->coreOptionService->get(CommerceSettings::BASE_CURRENCY, 'USD');
    }

    /**
     * @return MediaFile[]|ContentEntity[]
     */
    public function getImages(): array
    {
        if (!$this->product) {
            return [];
        }

        $mediaFiles = $this->contentEntityRepository->findChildrenContentEntitiesOfType($this->product, 'media_file');

        return array_filter($mediaFiles, fn(MediaFile $file) => strpos((string)$file->getMimeType(), 'image/') === 0);
    }
}
