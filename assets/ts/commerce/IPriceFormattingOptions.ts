/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default interface IPriceFormattingOptions {
    price_decimals: number;
    price_decimal_separator: string;
    price_thousand_separator: string;
    price_currency_position: string;
    price_format: string;
    locale: string;
}
