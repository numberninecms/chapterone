/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class SortFilterForm {
    private readonly form: HTMLFormElement;
    private readonly select: HTMLSelectElement;

    public constructor(selector = '[name="product_sort_filter_form"]') {
        this.form = document.querySelector(selector) as HTMLFormElement;

        if (this.form) {
            this.select = this.form.querySelector('select') as HTMLSelectElement;

            if (this.select) {
                this.select.addEventListener('change', () => {
                    if (this.select.value === 'date-desc') {
                        this.select.removeAttribute('name');
                    }

                    this.form.submit();
                });
            }
        }
    }
}
