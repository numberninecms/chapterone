(self["webpackChunk"] = self["webpackChunk"] || []).push([["shop"],{

/***/ "./assets/ts/commerce/PriceFormatter.ts":
/*!**********************************************!*\
  !*** ./assets/ts/commerce/PriceFormatter.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PriceFormatter)
/* harmony export */ });
/* harmony import */ var locutus_php_strings_number_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! locutus/php/strings/number_format */ "./node_modules/locutus/php/strings/number_format.js");
/* harmony import */ var locutus_php_strings_number_format__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(locutus_php_strings_number_format__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var locutus_php_strings_sprintf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! locutus/php/strings/sprintf */ "./node_modules/locutus/php/strings/sprintf.js");
/* harmony import */ var locutus_php_strings_sprintf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(locutus_php_strings_sprintf__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


class PriceFormatter {
  constructor(options) {
    this.options = options;
  }

  format(amount, currencySymbol = '$') {
    return locutus_php_strings_sprintf__WEBPACK_IMPORTED_MODULE_1___default()(this.options.price_format, locutus_php_strings_number_format__WEBPACK_IMPORTED_MODULE_0___default()(amount, 0, this.options.price_decimal_separator, this.options.price_thousand_separator), currencySymbol);
  }

}

/***/ }),

/***/ "./assets/ts/commerce/RoundNumberFormatter.ts":
/*!****************************************************!*\
  !*** ./assets/ts/commerce/RoundNumberFormatter.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RoundNumberFormatter)
/* harmony export */ });
/* harmony import */ var locutus_php_strings_number_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! locutus/php/strings/number_format */ "./node_modules/locutus/php/strings/number_format.js");
/* harmony import */ var locutus_php_strings_number_format__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(locutus_php_strings_number_format__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var locutus_php_strings_sprintf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! locutus/php/strings/sprintf */ "./node_modules/locutus/php/strings/sprintf.js");
/* harmony import */ var locutus_php_strings_sprintf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(locutus_php_strings_sprintf__WEBPACK_IMPORTED_MODULE_1__);
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


class RoundNumberFormatter {
  constructor(options) {
    this.options = options;
  }

  format(value, unit = '') {
    return locutus_php_strings_sprintf__WEBPACK_IMPORTED_MODULE_1___default()('%s%s', locutus_php_strings_number_format__WEBPACK_IMPORTED_MODULE_0___default()(value, 0, this.options.price_decimal_separator, this.options.price_thousand_separator), unit);
  }

}

/***/ }),

/***/ "./assets/ts/commerce/SortFilterForm.ts":
/*!**********************************************!*\
  !*** ./assets/ts/commerce/SortFilterForm.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortFilterForm)
/* harmony export */ });
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
class SortFilterForm {
  constructor(selector = '[name="product_sort_filter_form"]') {
    this.form = document.querySelector(selector);

    if (this.form) {
      this.select = this.form.querySelector('select');

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

/***/ }),

/***/ "./assets/ts/controls/DoubleHandleSlider.ts":
/*!**************************************************!*\
  !*** ./assets/ts/controls/DoubleHandleSlider.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DoubleHandleSlider)
/* harmony export */ });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nouislider_distribute_nouislider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider/distribute/nouislider.css */ "./node_modules/nouislider/distribute/nouislider.css");
/* harmony import */ var _SimpleRange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimpleRange */ "./assets/ts/controls/SimpleRange.ts");
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */



class DoubleHandleSlider {
  constructor(selector, numberFormatter) {
    this.numberFormatter = numberFormatter;

    if (typeof selector === 'string') {
      this.sliderControl = document.querySelector(selector);
    } else {
      this.sliderControl = selector;
    }

    if (!this.sliderControl) {
      return;
    }

    this.sliderRange = new _SimpleRange__WEBPACK_IMPORTED_MODULE_2__.default(parseFloat(this.sliderControl.getAttribute('data-min')), parseFloat(this.sliderControl.getAttribute('data-max')));
    this.sliderParent = this.sliderControl.parentElement;
    var minValue = parseFloat(this.sliderParent.querySelector('.nouislider-control-min').value);
    var maxValue = parseFloat(this.sliderParent.querySelector('.nouislider-control-max').value);
    this.valueRange = new _SimpleRange__WEBPACK_IMPORTED_MODULE_2__.default(!isNaN(minValue) ? minValue : this.sliderRange.min, !isNaN(maxValue) ? maxValue : this.sliderRange.max);
    nouislider__WEBPACK_IMPORTED_MODULE_0___default().create(this.sliderControl, {
      start: this.valueRange.toArray(),
      range: {
        min: this.sliderRange.min,
        max: this.sliderRange.max
      },
      behaviour: 'drag',
      connect: true,
      step: 1
    });
    this.sliderControl.noUiSlider.on('update', values => {
      var _a, _b, _c, _d;

      this.sliderParent.querySelector('.nouislider-label .from').innerHTML = this.numberFormatter.format(values[0], (_b = (_a = this.sliderControl) === null || _a === void 0 ? void 0 : _a.attributes.getNamedItem('data-unit')) === null || _b === void 0 ? void 0 : _b.value);
      this.sliderParent.querySelector('.nouislider-label .to').innerHTML = this.numberFormatter.format(values[1], (_d = (_c = this.sliderControl) === null || _c === void 0 ? void 0 : _c.attributes.getNamedItem('data-unit')) === null || _d === void 0 ? void 0 : _d.value);
      this.sliderParent.querySelector('.nouislider-control-min').value = values[0];
      this.sliderParent.querySelector('.nouislider-control-max').value = values[1];
    });

    this.sliderControl.closest('form').onsubmit = () => {
      var _a, _b, _c, _d;

      var min = this.sliderParent.querySelector('.nouislider-control-min');
      var max = this.sliderParent.querySelector('.nouislider-control-max');

      if (parseInt(min.value, 10) === Math.floor((_a = this.sliderControl) === null || _a === void 0 ? void 0 : _a.noUiSlider.options.range.min)) {
        (_b = min.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(min);
      }

      if (parseInt(max.value, 10) === Math.ceil((_c = this.sliderControl) === null || _c === void 0 ? void 0 : _c.noUiSlider.options.range.max)) {
        (_d = max.parentNode) === null || _d === void 0 ? void 0 : _d.removeChild(max);
      }

      return true;
    };
  }

}

/***/ }),

/***/ "./assets/ts/controls/SimpleRange.ts":
/*!*******************************************!*\
  !*** ./assets/ts/controls/SimpleRange.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleRange)
/* harmony export */ });
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
class SimpleRange {
  constructor(min, max) {
    this._min = min;
    this._max = max;
  }

  get min() {
    return this._min;
  }

  get max() {
    return this._max;
  }

  toArray() {
    return [this._min, this._max];
  }

}

/***/ }),

/***/ "./assets/ts/routing/routes.ts":
/*!*************************************!*\
  !*** ./assets/ts/routing/routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiRoutes": () => (/* binding */ apiRoutes)
/* harmony export */ });
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var apiRoutes = {
  api_commerce_price_format: '/api/commerce/price-format'
};

/***/ }),

/***/ "./assets/ts/shop.ts":
/*!***************************!*\
  !*** ./assets/ts/shop.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commerce_PriceFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commerce/PriceFormatter */ "./assets/ts/commerce/PriceFormatter.ts");
/* harmony import */ var _commerce_RoundNumberFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commerce/RoundNumberFormatter */ "./assets/ts/commerce/RoundNumberFormatter.ts");
/* harmony import */ var _commerce_SortFilterForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commerce/SortFilterForm */ "./assets/ts/commerce/SortFilterForm.ts");
/* harmony import */ var _controls_DoubleHandleSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/DoubleHandleSlider */ "./assets/ts/controls/DoubleHandleSlider.ts");
/* harmony import */ var _routing_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing/routes */ "./assets/ts/routing/routes.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);


/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */






axios__WEBPACK_IMPORTED_MODULE_6___default().get(_routing_routes__WEBPACK_IMPORTED_MODULE_5__.apiRoutes.api_commerce_price_format).then(response => {
  var _a;

  var data = response.data;
  var sliders = document.querySelectorAll('.nouislider-control');
  var priceFormatter = new _commerce_PriceFormatter__WEBPACK_IMPORTED_MODULE_1__.default(data);
  var roundNumberFormatter = new _commerce_RoundNumberFormatter__WEBPACK_IMPORTED_MODULE_2__.default(data);

  for (var slider of sliders) {
    new _controls_DoubleHandleSlider__WEBPACK_IMPORTED_MODULE_4__.default(slider, ((_a = slider.attributes.getNamedItem('data-type')) === null || _a === void 0 ? void 0 : _a.value) === 'price' ? priceFormatter : roundNumberFormatter);
  }
}, () => {//
});
new _commerce_SortFilterForm__WEBPACK_IMPORTED_MODULE_3__.default();

/***/ })

},
0,[["./assets/ts/shop.ts","runtime","vendors-node_modules_axios_index_js-node_modules_core-js_modules_web_dom-collections_iterator-28374f"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMvY29tbWVyY2UvUHJpY2VGb3JtYXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzL2NvbW1lcmNlL1JvdW5kTnVtYmVyRm9ybWF0dGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy9jb21tZXJjZS9Tb3J0RmlsdGVyRm9ybS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMvY29udHJvbHMvRG91YmxlSGFuZGxlU2xpZGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy9jb250cm9scy9TaW1wbGVSYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMvcm91dGluZy9yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RzL3Nob3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQU9HO0FBRUg7QUFDQTtBQUljLE1BQU8sY0FBUCxDQUFxQjtBQUcvQixjQUFtQixPQUFuQixFQUFtRDtBQUMvQyxTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0g7O0FBRU0sUUFBTSxDQUFDLE1BQUQsRUFBaUIsaUJBQXFDLEdBQXRELEVBQXlEO0FBQ2xFLFdBQU8sa0VBQU8sQ0FDVixLQUFLLE9BQUwsQ0FBYSxZQURILEVBRVYsd0VBQWEsQ0FBQyxNQUFELEVBQVMsQ0FBVCxFQUFZLEtBQUssT0FBTCxDQUFhLHVCQUF6QixFQUFrRCxLQUFLLE9BQUwsQ0FBYSx3QkFBL0QsQ0FGSCxFQUdWLGNBSFUsQ0FBZDtBQUtIOztBQWI4QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZG5DOzs7Ozs7O0FBT0c7QUFFSDtBQUNBO0FBSWMsTUFBTyxvQkFBUCxDQUEyQjtBQUdyQyxjQUFtQixPQUFuQixFQUFtRDtBQUMvQyxTQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0g7O0FBRU0sUUFBTSxDQUFDLEtBQUQsRUFBZ0IsT0FBMkIsRUFBM0MsRUFBNkM7QUFDdEQsV0FBTyxrRUFB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QUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQOzs7Ozs7O0FBT0c7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpREFBVSxnRkFBVixFQUErQyxJQUEvQyxDQUNLLFFBQUQsSUFBYTs7O0FBQ1QsTUFBTSxJQUFJLEdBQTRCLFFBQVEsQ0FBQyxJQUEvQztBQUNBLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUFtQyxxQkFBbkMsQ0FBaEI7QUFDQSxNQUFNLGNBQWMsR0FBRyxJQUFJLDZEQUFKLENBQW1CLElBQW5CLENBQXZCO0FBQ0EsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLG1FQUFKLENBQXlCLElBQXpCLENBQTdCOztBQUVBLE9BQUssSUFBTSxNQUFYLElBQXFCLE9BQXJCLEVBQThCO0FBQzFCLFFBQUksaUVBQUosQ0FDSSxNQURKLEVBRUksYUFBTSxDQUFDLFVBQVAsQ0FBa0IsWUFBbEIsQ0FBK0IsV0FBL0IsT0FBMkMsSUFBM0MsSUFBMkMsYUFBM0MsR0FBMkMsTUFBM0MsR0FBMkMsR0FBRSxLQUE3QyxNQUF1RCxPQUF2RCxHQUFpRSxjQUFqRSxHQUFrRixvQkFGdEY7QUFJSDtBQUNKLENBYkwsRUFjSSxNQUFLLENBQ0Q7QUFDSCxDQWhCTDtBQW1CQSxJQUFJLDZEQUFKLEciLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgTnVtYmVyTmluZSBwYWNrYWdlLlxuICpcbiAqIChjKSBXaWxsaWFtIEFyaW4gPHdpbGxpYW1hcmluLmRldkBnbWFpbC5jb20+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCBudW1iZXJfZm9ybWF0IGZyb20gJ2xvY3V0dXMvcGhwL3N0cmluZ3MvbnVtYmVyX2Zvcm1hdCc7XG5pbXBvcnQgc3ByaW50ZiBmcm9tICdsb2N1dHVzL3BocC9zdHJpbmdzL3NwcmludGYnO1xuaW1wb3J0IHsgSU51bWJlckZvcm1hdHRlciB9IGZyb20gJy4vSU51bWJlckZvcm1hdHRlcic7XG5pbXBvcnQgSVByaWNlRm9ybWF0dGluZ09wdGlvbnMgZnJvbSAnLi9JUHJpY2VGb3JtYXR0aW5nT3B0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaWNlRm9ybWF0dGVyIGltcGxlbWVudHMgSU51bWJlckZvcm1hdHRlciB7XG4gICAgcHJpdmF0ZSBvcHRpb25zOiBJUHJpY2VGb3JtYXR0aW5nT3B0aW9ucztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBJUHJpY2VGb3JtYXR0aW5nT3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBmb3JtYXQoYW1vdW50OiBudW1iZXIsIGN1cnJlbmN5U3ltYm9sOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAnJCcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc3ByaW50ZihcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wcmljZV9mb3JtYXQsXG4gICAgICAgICAgICBudW1iZXJfZm9ybWF0KGFtb3VudCwgMCwgdGhpcy5vcHRpb25zLnByaWNlX2RlY2ltYWxfc2VwYXJhdG9yLCB0aGlzLm9wdGlvbnMucHJpY2VfdGhvdXNhbmRfc2VwYXJhdG9yKSxcbiAgICAgICAgICAgIGN1cnJlbmN5U3ltYm9sLFxuICAgICAgICApIGFzIHN0cmluZztcbiAgICB9XG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIE51bWJlck5pbmUgcGFja2FnZS5cbiAqXG4gKiAoYykgV2lsbGlhbSBBcmluIDx3aWxsaWFtYXJpbi5kZXZAZ21haWwuY29tPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5pbXBvcnQgbnVtYmVyX2Zvcm1hdCBmcm9tICdsb2N1dHVzL3BocC9zdHJpbmdzL251bWJlcl9mb3JtYXQnO1xuaW1wb3J0IHNwcmludGYgZnJvbSAnbG9jdXR1cy9waHAvc3RyaW5ncy9zcHJpbnRmJztcbmltcG9ydCB7IElOdW1iZXJGb3JtYXR0ZXIgfSBmcm9tICcuL0lOdW1iZXJGb3JtYXR0ZXInO1xuaW1wb3J0IElQcmljZUZvcm1hdHRpbmdPcHRpb25zIGZyb20gJy4vSVByaWNlRm9ybWF0dGluZ09wdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3VuZE51bWJlckZvcm1hdHRlciBpbXBsZW1lbnRzIElOdW1iZXJGb3JtYXR0ZXIge1xuICAgIHByaXZhdGUgb3B0aW9uczogSVByaWNlRm9ybWF0dGluZ09wdGlvbnM7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogSVByaWNlRm9ybWF0dGluZ09wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZm9ybWF0KHZhbHVlOiBudW1iZXIsIHVuaXQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcnKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHNwcmludGYoXG4gICAgICAgICAgICAnJXMlcycsXG4gICAgICAgICAgICBudW1iZXJfZm9ybWF0KHZhbHVlLCAwLCB0aGlzLm9wdGlvbnMucHJpY2VfZGVjaW1hbF9zZXBhcmF0b3IsIHRoaXMub3B0aW9ucy5wcmljZV90aG91c2FuZF9zZXBhcmF0b3IpLFxuICAgICAgICAgICAgdW5pdCxcbiAgICAgICAgKSBhcyBzdHJpbmc7XG4gICAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBOdW1iZXJOaW5lIHBhY2thZ2UuXG4gKlxuICogKGMpIFdpbGxpYW0gQXJpbiA8d2lsbGlhbWFyaW4uZGV2QGdtYWlsLmNvbT5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydEZpbHRlckZvcm0ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZm9ybTogSFRNTEZvcm1FbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudDtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzZWxlY3RvciA9ICdbbmFtZT1cInByb2R1Y3Rfc29ydF9maWx0ZXJfZm9ybVwiXScpIHtcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTEZvcm1FbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdC52YWx1ZSA9PT0gJ2RhdGUtZGVzYycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0LnJlbW92ZUF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBOdW1iZXJOaW5lIHBhY2thZ2UuXG4gKlxuICogKGMpIFdpbGxpYW0gQXJpbiA8d2lsbGlhbWFyaW4uZGV2QGdtYWlsLmNvbT5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0IG5vVWlTbGlkZXIsIHsgSW5zdGFuY2UgfSBmcm9tICdub3Vpc2xpZGVyJztcbmltcG9ydCAnbm91aXNsaWRlci9kaXN0cmlidXRlL25vdWlzbGlkZXIuY3NzJztcbmltcG9ydCB7IElOdW1iZXJGb3JtYXR0ZXIgfSBmcm9tICcuLi9jb21tZXJjZS9JTnVtYmVyRm9ybWF0dGVyJztcbmltcG9ydCBTaW1wbGVSYW5nZSBmcm9tICcuL1NpbXBsZVJhbmdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG91YmxlSGFuZGxlU2xpZGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNsaWRlckNvbnRyb2w6IEluc3RhbmNlIHwgbnVsbDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNsaWRlclBhcmVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBudW1iZXJGb3JtYXR0ZXI6IElOdW1iZXJGb3JtYXR0ZXI7XG4gICAgcHJpdmF0ZSBzbGlkZXJSYW5nZTogU2ltcGxlUmFuZ2U7XG4gICAgcHJpdmF0ZSB2YWx1ZVJhbmdlOiBTaW1wbGVSYW5nZTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzZWxlY3Rvcjogc3RyaW5nIHwgRWxlbWVudCwgbnVtYmVyRm9ybWF0dGVyOiBJTnVtYmVyRm9ybWF0dGVyKSB7XG4gICAgICAgIHRoaXMubnVtYmVyRm9ybWF0dGVyID0gbnVtYmVyRm9ybWF0dGVyO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlckNvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyQ29udHJvbCA9IHNlbGVjdG9yIGFzIEluc3RhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnNsaWRlckNvbnRyb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2xpZGVyUmFuZ2UgPSBuZXcgU2ltcGxlUmFuZ2UoXG4gICAgICAgICAgICBwYXJzZUZsb2F0KHRoaXMuc2xpZGVyQ29udHJvbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWluJykhKSxcbiAgICAgICAgICAgIHBhcnNlRmxvYXQodGhpcy5zbGlkZXJDb250cm9sLmdldEF0dHJpYnV0ZSgnZGF0YS1tYXgnKSEpLFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2xpZGVyUGFyZW50ID0gdGhpcy5zbGlkZXJDb250cm9sLnBhcmVudEVsZW1lbnQhO1xuXG4gICAgICAgIGNvbnN0IG1pblZhbHVlID0gcGFyc2VGbG9hdChcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyUGFyZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJy5ub3Vpc2xpZGVyLWNvbnRyb2wtbWluJykhLnZhbHVlLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICB0aGlzLnNsaWRlclBhcmVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCcubm91aXNsaWRlci1jb250cm9sLW1heCcpIS52YWx1ZSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnZhbHVlUmFuZ2UgPSBuZXcgU2ltcGxlUmFuZ2UoXG4gICAgICAgICAgICAhaXNOYU4obWluVmFsdWUpID8gbWluVmFsdWUgOiB0aGlzLnNsaWRlclJhbmdlLm1pbixcbiAgICAgICAgICAgICFpc05hTihtYXhWYWx1ZSkgPyBtYXhWYWx1ZSA6IHRoaXMuc2xpZGVyUmFuZ2UubWF4LFxuICAgICAgICApO1xuXG4gICAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKHRoaXMuc2xpZGVyQ29udHJvbCBhcyBIVE1MRWxlbWVudCwge1xuICAgICAgICAgICAgc3RhcnQ6IHRoaXMudmFsdWVSYW5nZS50b0FycmF5KCksXG4gICAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgICAgIG1pbjogdGhpcy5zbGlkZXJSYW5nZS5taW4sXG4gICAgICAgICAgICAgICAgbWF4OiB0aGlzLnNsaWRlclJhbmdlLm1heCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWhhdmlvdXI6ICdkcmFnJyxcbiAgICAgICAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlckNvbnRyb2wubm9VaVNsaWRlci5vbigndXBkYXRlJywgKHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zbGlkZXJQYXJlbnQucXVlcnlTZWxlY3RvcignLm5vdWlzbGlkZXItbGFiZWwgLmZyb20nKSEuaW5uZXJIVE1MID0gdGhpcy5udW1iZXJGb3JtYXR0ZXIuZm9ybWF0KFxuICAgICAgICAgICAgICAgIHZhbHVlc1swXSxcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckNvbnRyb2w/LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdkYXRhLXVuaXQnKT8udmFsdWUsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zbGlkZXJQYXJlbnQucXVlcnlTZWxlY3RvcignLm5vdWlzbGlkZXItbGFiZWwgLnRvJykhLmlubmVySFRNTCA9IHRoaXMubnVtYmVyRm9ybWF0dGVyLmZvcm1hdChcbiAgICAgICAgICAgICAgICB2YWx1ZXNbMV0sXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJDb250cm9sPy5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnZGF0YS11bml0Jyk/LnZhbHVlLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5zbGlkZXJQYXJlbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignLm5vdWlzbGlkZXItY29udHJvbC1taW4nKSEudmFsdWUgPSB2YWx1ZXNbMF0gYXMgc3RyaW5nO1xuICAgICAgICAgICAgdGhpcy5zbGlkZXJQYXJlbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignLm5vdWlzbGlkZXItY29udHJvbC1tYXgnKSEudmFsdWUgPSB2YWx1ZXNbMV0gYXMgc3RyaW5nO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNsaWRlckNvbnRyb2wuY2xvc2VzdCgnZm9ybScpIS5vbnN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1pbiA9IHRoaXMuc2xpZGVyUGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3Vpc2xpZGVyLWNvbnRyb2wtbWluJykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBtYXggPSB0aGlzLnNsaWRlclBhcmVudC5xdWVyeVNlbGVjdG9yKCcubm91aXNsaWRlci1jb250cm9sLW1heCcpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQobWluLnZhbHVlLCAxMCkgPT09IE1hdGguZmxvb3IodGhpcy5zbGlkZXJDb250cm9sPy5ub1VpU2xpZGVyLm9wdGlvbnMucmFuZ2UubWluIGFzIG51bWJlcikpIHtcbiAgICAgICAgICAgICAgICBtaW4ucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQobWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KG1heC52YWx1ZSwgMTApID09PSBNYXRoLmNlaWwodGhpcy5zbGlkZXJDb250cm9sPy5ub1VpU2xpZGVyLm9wdGlvbnMucmFuZ2UubWF4IGFzIG51bWJlcikpIHtcbiAgICAgICAgICAgICAgICBtYXgucGFyZW50Tm9kZT8ucmVtb3ZlQ2hpbGQobWF4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBOdW1iZXJOaW5lIHBhY2thZ2UuXG4gKlxuICogKGMpIFdpbGxpYW0gQXJpbiA8d2lsbGlhbWFyaW4uZGV2QGdtYWlsLmNvbT5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlUmFuZ2Uge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX21pbjogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX21heDogbnVtYmVyO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9taW4gPSBtaW47XG4gICAgICAgIHRoaXMuX21heCA9IG1heDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IG1pbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWluO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXg7XG4gICAgfVxuXG4gICAgcHVibGljIHRvQXJyYXkoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gW3RoaXMuX21pbiwgdGhpcy5fbWF4XTtcbiAgICB9XG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIE51bWJlck5pbmUgcGFja2FnZS5cbiAqXG4gKiAoYykgV2lsbGlhbSBBcmluIDx3aWxsaWFtYXJpbi5kZXZAZ21haWwuY29tPlxuICpcbiAqIEZvciB0aGUgZnVsbCBjb3B5cmlnaHQgYW5kIGxpY2Vuc2UgaW5mb3JtYXRpb24sIHBsZWFzZSB2aWV3IHRoZSBMSUNFTlNFXG4gKiBmaWxlIHRoYXQgd2FzIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBzb3VyY2UgY29kZS5cbiAqL1xuXG5leHBvcnQgY29uc3QgYXBpUm91dGVzID0ge1xuICAgIGFwaV9jb21tZXJjZV9wcmljZV9mb3JtYXQ6ICcvYXBpL2NvbW1lcmNlL3ByaWNlLWZvcm1hdCcsXG59O1xuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBOdW1iZXJOaW5lIHBhY2thZ2UuXG4gKlxuICogKGMpIFdpbGxpYW0gQXJpbiA8d2lsbGlhbWFyaW4uZGV2QGdtYWlsLmNvbT5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0IElQcmljZUZvcm1hdHRpbmdPcHRpb25zIGZyb20gJy4vY29tbWVyY2UvSVByaWNlRm9ybWF0dGluZ09wdGlvbnMnO1xuaW1wb3J0IFByaWNlRm9ybWF0dGVyIGZyb20gJy4vY29tbWVyY2UvUHJpY2VGb3JtYXR0ZXInO1xuaW1wb3J0IFJvdW5kTnVtYmVyRm9ybWF0dGVyIGZyb20gJy4vY29tbWVyY2UvUm91bmROdW1iZXJGb3JtYXR0ZXInO1xuaW1wb3J0IFNvcnRGaWx0ZXJGb3JtIGZyb20gJy4vY29tbWVyY2UvU29ydEZpbHRlckZvcm0nO1xuaW1wb3J0IERvdWJsZUhhbmRsZVNsaWRlciBmcm9tICcuL2NvbnRyb2xzL0RvdWJsZUhhbmRsZVNsaWRlcic7XG5pbXBvcnQgeyBhcGlSb3V0ZXMgfSBmcm9tICcuL3JvdXRpbmcvcm91dGVzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmF4aW9zLmdldChhcGlSb3V0ZXMuYXBpX2NvbW1lcmNlX3ByaWNlX2Zvcm1hdCkudGhlbihcbiAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YTogSVByaWNlRm9ybWF0dGluZ09wdGlvbnMgPSByZXNwb25zZS5kYXRhIGFzIElQcmljZUZvcm1hdHRpbmdPcHRpb25zO1xuICAgICAgICBjb25zdCBzbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxFbGVtZW50PignLm5vdWlzbGlkZXItY29udHJvbCcpO1xuICAgICAgICBjb25zdCBwcmljZUZvcm1hdHRlciA9IG5ldyBQcmljZUZvcm1hdHRlcihkYXRhKTtcbiAgICAgICAgY29uc3Qgcm91bmROdW1iZXJGb3JtYXR0ZXIgPSBuZXcgUm91bmROdW1iZXJGb3JtYXR0ZXIoZGF0YSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBzbGlkZXIgb2Ygc2xpZGVycykge1xuICAgICAgICAgICAgbmV3IERvdWJsZUhhbmRsZVNsaWRlcihcbiAgICAgICAgICAgICAgICBzbGlkZXIsXG4gICAgICAgICAgICAgICAgc2xpZGVyLmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCdkYXRhLXR5cGUnKT8udmFsdWUgPT09ICdwcmljZScgPyBwcmljZUZvcm1hdHRlciA6IHJvdW5kTnVtYmVyRm9ybWF0dGVyLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgKCkgPT4ge1xuICAgICAgICAvL1xuICAgIH0sXG4pO1xuXG5uZXcgU29ydEZpbHRlckZvcm0oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=