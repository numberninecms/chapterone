/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import number_format from 'locutus/php/strings/number_format';
import sprintf from 'locutus/php/strings/sprintf';
import { INumberFormatter } from './INumberFormatter';
import IPriceFormattingOptions from './IPriceFormattingOptions';

export default class RoundNumberFormatter implements INumberFormatter {
    private options: IPriceFormattingOptions;

    public constructor(options: IPriceFormattingOptions) {
        this.options = options;
    }

    public format(value: number, unit: string | undefined = ''): string {
        return sprintf(
            '%s%s',
            number_format(value, 0, this.options.price_decimal_separator, this.options.price_thousand_separator),
            unit,
        ) as string;
    }
}
