/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class SimpleRange {
    private readonly _min: number;
    private readonly _max: number;

    public constructor(min: number, max: number) {
        this._min = min;
        this._max = max;
    }

    public get min(): number {
        return this._min;
    }

    public get max(): number {
        return this._max;
    }

    public toArray(): number[] {
        return [this._min, this._max];
    }
}
