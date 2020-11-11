(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product"],{

/***/ "./assets/ts/media/MediaGallery.ts":
/*!*****************************************!*\
  !*** ./assets/ts/media/MediaGallery.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaGallery; });
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.js");
/* harmony import */ var photoswipe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(photoswipe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "./node_modules/photoswipe/dist/photoswipe-ui-default.js");
/* harmony import */ var photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! photoswipe/dist/photoswipe.css */ "./node_modules/photoswipe/dist/photoswipe.css");
/* harmony import */ var photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_photoswipe_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var photoswipe_dist_default_skin_default_skin_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! photoswipe/dist/default-skin/default-skin.css */ "./node_modules/photoswipe/dist/default-skin/default-skin.css");
/* harmony import */ var photoswipe_dist_default_skin_default_skin_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(photoswipe_dist_default_skin_default_skin_css__WEBPACK_IMPORTED_MODULE_3__);
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */




class MediaGallery {
  constructor(selector, options) {
    var _a;

    this.items = [];
    this.options = {
      index: 0,
      bgOpacity: 0.6,
      closeOnScroll: false,
      showHideOpacity: true
    };
    this.items = Array.from(document.querySelectorAll(selector)).map(element => {
      return {
        src: element.src,
        w: element.naturalWidth,
        h: element.naturalHeight
      };
    });
    this.pswpElement = document.querySelectorAll('.pswp')[0];

    if (options.open) {
      this.open((_a = options.index) !== null && _a !== void 0 ? _a : 0);
    }
  }

  open(index) {
    this.options.index = index;
    var gallery = new photoswipe__WEBPACK_IMPORTED_MODULE_0___default.a(this.pswpElement, photoswipe_dist_photoswipe_ui_default__WEBPACK_IMPORTED_MODULE_1___default.a, this.items, this.options);
    gallery.init();
  }

}

/***/ }),

/***/ "./assets/ts/product.ts":
/*!******************************!*\
  !*** ./assets/ts/product.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flickity_as_nav_for__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flickity-as-nav-for */ "./node_modules/flickity-as-nav-for/as-nav-for.js");
/* harmony import */ var flickity_as_nav_for__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flickity_as_nav_for__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flickity_css_flickity_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flickity/css/flickity.css */ "./node_modules/flickity/css/flickity.css");
/* harmony import */ var flickity_css_flickity_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flickity_css_flickity_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_MediaGallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/MediaGallery */ "./assets/ts/media/MediaGallery.ts");
/*
 * This file is part of the NumberNine package.
 *
 * (c) William Arin <williamarin.dev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */




var mainSlider = new flickity__WEBPACK_IMPORTED_MODULE_0___default.a('.product-big-image', {
  wrapAround: true,
  pageDots: false,
  adaptiveHeight: true
});
new flickity__WEBPACK_IMPORTED_MODULE_0___default.a('.product-gallery', {
  cellAlign: 'left',
  cellSelector: '.gallery-cell',
  wrapAround: true,
  pageDots: false,
  asNavFor: '.product-big-image'
});
mainSlider.on('staticClick', (event, pointer, cellElement, cellIndex) => {
  if (typeof cellIndex === 'number') {
    new _media_MediaGallery__WEBPACK_IMPORTED_MODULE_3__["default"]('.product-big-image img', {
      open: true,
      index: cellIndex
    });
  }
});

/***/ })

},[["./assets/ts/product.ts","runtime","vendors~main~product","vendors~product"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvdHMvbWVkaWEvTWVkaWFHYWxsZXJ5LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy90cy9wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0c7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQU9jLE1BQU8sWUFBUCxDQUFtQjtBQVU3QixjQUFtQixRQUFuQixFQUFxQyxPQUFyQyxFQUFrRTs7O0FBUmpELGlCQUFzRCxFQUF0RDtBQUNULG1CQUF3QztBQUM1QyxXQUFLLEVBQUUsQ0FEcUM7QUFFNUMsZUFBUyxFQUFFLEdBRmlDO0FBRzVDLG1CQUFhLEVBQUUsS0FINkI7QUFJNUMscUJBQWUsRUFBRTtBQUoyQixLQUF4QztBQVFKLFNBQUssS0FBTCxHQUFhLEtBQUssQ0FBQyxJQUFOLENBQVcsUUFBUSxDQUFDLGdCQUFULENBQTRDLFFBQTVDLENBQVgsRUFBa0UsR0FBbEUsQ0FDUixPQUFELElBQThCO0FBQzFCLGFBQU87QUFDSCxXQUFHLEVBQUUsT0FBTyxDQUFDLEdBRFY7QUFFSCxTQUFDLEVBQUUsT0FBTyxDQUFDLFlBRlI7QUFHSCxTQUFDLEVBQUUsT0FBTyxDQUFDO0FBSFIsT0FBUDtBQUtILEtBUFEsQ0FBYjtBQVVBLFNBQUssV0FBTCxHQUFtQixRQUFRLENBQUMsZ0JBQVQsQ0FBdUMsT0FBdkMsRUFBZ0QsQ0FBaEQsQ0FBbkI7O0FBRUEsUUFBSSxPQUFPLENBQUMsSUFBWixFQUFrQjtBQUNkLFdBQUssSUFBTCxDQUFTLE1BQUMsT0FBTyxDQUFDLEtBQVQsTUFBYyxJQUFkLElBQWMsYUFBZCxHQUFjLEVBQWQsR0FBa0IsQ0FBM0I7QUFDSDtBQUNKOztBQUVNLE1BQUksQ0FBQyxLQUFELEVBQWM7QUFDckIsU0FBSyxPQUFMLENBQWEsS0FBYixHQUFxQixLQUFyQjtBQUNBLFFBQU0sT0FBTyxHQUFHLElBQUksaURBQUosQ0FBZSxLQUFLLFdBQXBCLEVBQWlDLDRFQUFqQyxFQUF1RCxLQUFLLEtBQTVELEVBQW1FLEtBQUssT0FBeEUsQ0FBaEI7QUFDQSxXQUFPLENBQUMsSUFBUjtBQUNIOztBQWhDNEIsQzs7Ozs7Ozs7Ozs7O0FDbkJqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPRztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTSxVQUFVLEdBQUcsSUFBSSwrQ0FBSixDQUFhLG9CQUFiLEVBQW1DO0FBQ2xELFlBQVUsRUFBRSxJQURzQztBQUVsRCxVQUFRLEVBQUUsS0FGd0M7QUFHbEQsZ0JBQWMsRUFBRTtBQUhrQyxDQUFuQyxDQUFuQjtBQU1BLElBQUksK0NBQUosQ0FBYSxrQkFBYixFQUFpQztBQUM3QixXQUFTLEVBQUUsTUFEa0I7QUFFN0IsY0FBWSxFQUFFLGVBRmU7QUFHN0IsWUFBVSxFQUFFLElBSGlCO0FBSTdCLFVBQVEsRUFBRSxLQUptQjtBQUs3QixVQUFRLEVBQUU7QUFMbUIsQ0FBakM7QUFRQSxVQUFVLENBQUMsRUFBWCxDQUFjLGFBQWQsRUFBNkIsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixXQUFqQixFQUE4QixTQUE5QixLQUEyQztBQUNwRSxNQUFJLE9BQU8sU0FBUCxLQUFxQixRQUF6QixFQUFtQztBQUMvQixRQUFJLDJEQUFKLENBQWlCLHdCQUFqQixFQUEyQztBQUN2QyxVQUFJLEVBQUUsSUFEaUM7QUFFdkMsV0FBSyxFQUFFO0FBRmdDLEtBQTNDO0FBSUg7QUFDSixDQVBELEUiLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgTnVtYmVyTmluZSBwYWNrYWdlLlxuICpcbiAqIChjKSBXaWxsaWFtIEFyaW4gPHdpbGxpYW1hcmluLmRldkBnbWFpbC5jb20+XG4gKlxuICogRm9yIHRoZSBmdWxsIGNvcHlyaWdodCBhbmQgbGljZW5zZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHZpZXcgdGhlIExJQ0VOU0VcbiAqIGZpbGUgdGhhdCB3YXMgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHNvdXJjZSBjb2RlLlxuICovXG5cbmltcG9ydCBQaG90b1N3aXBlIGZyb20gJ3Bob3Rvc3dpcGUnO1xuaW1wb3J0IFBob3RvU3dpcGVVSV9EZWZhdWx0IGZyb20gJ3Bob3Rvc3dpcGUvZGlzdC9waG90b3N3aXBlLXVpLWRlZmF1bHQnO1xuaW1wb3J0ICdwaG90b3N3aXBlL2Rpc3QvcGhvdG9zd2lwZS5jc3MnO1xuaW1wb3J0ICdwaG90b3N3aXBlL2Rpc3QvZGVmYXVsdC1za2luL2RlZmF1bHQtc2tpbi5jc3MnO1xuXG5pbnRlcmZhY2UgSU1lZGlhR2FsbGVyeU9wdGlvbnMge1xuICAgIG9wZW4/OiBib29sZWFuO1xuICAgIGluZGV4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUdhbGxlcnkge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcHN3cEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaXRlbXM6IEFycmF5PHsgc3JjOiBzdHJpbmc7IHc6IG51bWJlcjsgaDogbnVtYmVyIH0+ID0gW107XG4gICAgcHJpdmF0ZSBvcHRpb25zOiBQaG90b1N3aXBlVUlfRGVmYXVsdC5PcHRpb25zID0ge1xuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgYmdPcGFjaXR5OiAwLjYsXG4gICAgICAgIGNsb3NlT25TY3JvbGw6IGZhbHNlLFxuICAgICAgICBzaG93SGlkZU9wYWNpdHk6IHRydWUsXG4gICAgfTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzZWxlY3Rvcjogc3RyaW5nLCBvcHRpb25zOiBJTWVkaWFHYWxsZXJ5T3B0aW9ucykge1xuICAgICAgICB0aGlzLml0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbWFnZUVsZW1lbnQ+KHNlbGVjdG9yKSkubWFwKFxuICAgICAgICAgICAgKGVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IGVsZW1lbnQuc3JjLFxuICAgICAgICAgICAgICAgICAgICB3OiBlbGVtZW50Lm5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaDogZWxlbWVudC5uYXR1cmFsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMucHN3cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLnBzd3AnKVswXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4ob3B0aW9ucy5pbmRleCA/PyAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGNvbnN0IGdhbGxlcnkgPSBuZXcgUGhvdG9Td2lwZSh0aGlzLnBzd3BFbGVtZW50LCBQaG90b1N3aXBlVUlfRGVmYXVsdCwgdGhpcy5pdGVtcywgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgZ2FsbGVyeS5pbml0KCk7XG4gICAgfVxufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBOdW1iZXJOaW5lIHBhY2thZ2UuXG4gKlxuICogKGMpIFdpbGxpYW0gQXJpbiA8d2lsbGlhbWFyaW4uZGV2QGdtYWlsLmNvbT5cbiAqXG4gKiBGb3IgdGhlIGZ1bGwgY29weXJpZ2h0IGFuZCBsaWNlbnNlIGluZm9ybWF0aW9uLCBwbGVhc2UgdmlldyB0aGUgTElDRU5TRVxuICogZmlsZSB0aGF0IHdhcyBkaXN0cmlidXRlZCB3aXRoIHRoaXMgc291cmNlIGNvZGUuXG4gKi9cblxuaW1wb3J0IEZsaWNraXR5IGZyb20gJ2ZsaWNraXR5JztcbmltcG9ydCAnZmxpY2tpdHktYXMtbmF2LWZvcic7XG5pbXBvcnQgJ2ZsaWNraXR5L2Nzcy9mbGlja2l0eS5jc3MnO1xuaW1wb3J0IE1lZGlhR2FsbGVyeSBmcm9tICcuL21lZGlhL01lZGlhR2FsbGVyeSc7XG5cbmNvbnN0IG1haW5TbGlkZXIgPSBuZXcgRmxpY2tpdHkoJy5wcm9kdWN0LWJpZy1pbWFnZScsIHtcbiAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgIHBhZ2VEb3RzOiBmYWxzZSxcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbn0pO1xuXG5uZXcgRmxpY2tpdHkoJy5wcm9kdWN0LWdhbGxlcnknLCB7XG4gICAgY2VsbEFsaWduOiAnbGVmdCcsXG4gICAgY2VsbFNlbGVjdG9yOiAnLmdhbGxlcnktY2VsbCcsXG4gICAgd3JhcEFyb3VuZDogdHJ1ZSxcbiAgICBwYWdlRG90czogZmFsc2UsXG4gICAgYXNOYXZGb3I6ICcucHJvZHVjdC1iaWctaW1hZ2UnLFxufSk7XG5cbm1haW5TbGlkZXIub24oJ3N0YXRpY0NsaWNrJywgKGV2ZW50LCBwb2ludGVyLCBjZWxsRWxlbWVudCwgY2VsbEluZGV4KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBjZWxsSW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgIG5ldyBNZWRpYUdhbGxlcnkoJy5wcm9kdWN0LWJpZy1pbWFnZSBpbWcnLCB7XG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgaW5kZXg6IGNlbGxJbmRleCxcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9