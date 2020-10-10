/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import IPriceFormattingOptions from './commerce/IPriceFormattingOptions';
import PriceFormatter from './commerce/PriceFormatter';
import RoundNumberFormatter from './commerce/RoundNumberFormatter';
import SortFilterForm from './commerce/SortFilterForm';
import DoubleHandleSlider from './controls/DoubleHandleSlider';
import { apiRoutes } from './routing/routes';
import axios from 'axios';

axios.get(apiRoutes.api_commerce_price_format).then(
    (response) => {
        const data: IPriceFormattingOptions = response.data as IPriceFormattingOptions;
        const sliders = document.querySelectorAll<Element>('.nouislider-control');
        const priceFormatter = new PriceFormatter(data);
        const roundNumberFormatter = new RoundNumberFormatter(data);

        for (const slider of sliders) {
            new DoubleHandleSlider(
                slider,
                slider.attributes.getNamedItem('data-type')?.value === 'price' ? priceFormatter : roundNumberFormatter,
            );
        }
    },
    () => {
        //
    },
);

new SortFilterForm();
