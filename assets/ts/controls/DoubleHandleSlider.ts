/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import noUiSlider, { target } from 'nouislider';
import 'nouislider/dist/nouislider.min.css';
import { INumberFormatter } from '../commerce/INumberFormatter';
import SimpleRange from './SimpleRange';

export default class DoubleHandleSlider {
    private readonly sliderControl: target | null;
    private readonly sliderParent: HTMLElement;
    private numberFormatter: INumberFormatter;
    private sliderRange: SimpleRange;
    private valueRange: SimpleRange;

    public constructor(selector: string | Element, numberFormatter: INumberFormatter) {
        this.numberFormatter = numberFormatter;

        if (typeof selector === 'string') {
            this.sliderControl = document.querySelector(selector);
        } else {
            this.sliderControl = selector as target;
        }

        if (!this.sliderControl) {
            return;
        }

        this.sliderRange = new SimpleRange(
            parseFloat(this.sliderControl.getAttribute('data-min')!),
            parseFloat(this.sliderControl.getAttribute('data-max')!),
        );

        this.sliderParent = this.sliderControl.parentElement!;

        const minValue = parseFloat(
            this.sliderParent.querySelector<HTMLInputElement>('.nouislider-control-min')!.value,
        );
        const maxValue = parseFloat(
            this.sliderParent.querySelector<HTMLInputElement>('.nouislider-control-max')!.value,
        );

        this.valueRange = new SimpleRange(
            !isNaN(minValue) ? minValue : this.sliderRange.min,
            !isNaN(maxValue) ? maxValue : this.sliderRange.max,
        );

        noUiSlider.create(this.sliderControl as HTMLElement, {
            start: this.valueRange.toArray(),
            range: {
                min: this.sliderRange.min,
                max: this.sliderRange.max,
            },
            behaviour: 'drag',
            connect: true,
            step: 1,
        });

        this.sliderControl.noUiSlider?.on('update', (values) => {
            this.sliderParent.querySelector('.nouislider-label .from')!.innerHTML = this.numberFormatter.format(
                values[0] as number,
                this.sliderControl?.attributes.getNamedItem('data-unit')?.value,
            );
            this.sliderParent.querySelector('.nouislider-label .to')!.innerHTML = this.numberFormatter.format(
                values[1] as number,
                this.sliderControl?.attributes.getNamedItem('data-unit')?.value,
            );

            this.sliderParent.querySelector<HTMLInputElement>('.nouislider-control-min')!.value = values[0] as string;
            this.sliderParent.querySelector<HTMLInputElement>('.nouislider-control-max')!.value = values[1] as string;
        });

        this.sliderControl.closest('form')!.onsubmit = () => {
            const min = this.sliderParent.querySelector('.nouislider-control-min') as HTMLInputElement;
            const max = this.sliderParent.querySelector('.nouislider-control-max') as HTMLInputElement;

            if (parseInt(min.value, 10) === Math.floor(this.sliderControl?.noUiSlider?.options.range.min as number)) {
                min.parentNode?.removeChild(min);
            }

            if (parseInt(max.value, 10) === Math.ceil(this.sliderControl?.noUiSlider?.options.range.max as number)) {
                max.parentNode?.removeChild(max);
            }

            return true;
        };
    }
}
