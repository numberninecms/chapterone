/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import Flickity from 'flickity';
import 'flickity-as-nav-for';
import 'flickity/css/flickity.css';
import MediaGallery from './media/MediaGallery';

const mainSlider = new Flickity('.product-big-image', {
    wrapAround: true,
    pageDots: false,
    adaptiveHeight: true,
});

new Flickity('.product-gallery', {
    cellAlign: 'left',
    cellSelector: '.gallery-cell',
    wrapAround: true,
    pageDots: false,
    asNavFor: '.product-big-image',
});

mainSlider.on('staticClick', (event, pointer, cellElement, cellIndex) => {
    if (typeof cellIndex === 'number') {
        new MediaGallery('.product-big-image img', {
            open: true,
            index: cellIndex,
        });
    }
});
