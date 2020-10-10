/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

interface IMediaGalleryOptions {
    open?: boolean;
    index?: number;
}

export default class MediaGallery {
    private readonly pswpElement: HTMLElement;
    private readonly items: Array<{ src: string; w: number; h: number }> = [];
    private options: PhotoSwipeUI_Default.Options = {
        index: 0,
        bgOpacity: 0.6,
        closeOnScroll: false,
        showHideOpacity: true,
    };

    public constructor(selector: string, options: IMediaGalleryOptions) {
        this.items = Array.from(document.querySelectorAll<HTMLImageElement>(selector)).map(
            (element: HTMLImageElement) => {
                return {
                    src: element.src,
                    w: element.naturalWidth,
                    h: element.naturalHeight,
                };
            },
        );

        this.pswpElement = document.querySelectorAll<HTMLElement>('.pswp')[0];

        if (options.open) {
            this.open(options.index ?? 0);
        }
    }

    public open(index: number): void {
        this.options.index = index;
        const gallery = new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, this.items, this.options);
        gallery.init();
    }
}
