(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/perfect-scrollbar/css/perfect-scrollbar.css":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/perfect-scrollbar/css/perfect-scrollbar.css ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n.ps__rail-x:hover,\n.ps__rail-y:hover,\n.ps__rail-x:focus,\n.ps__rail-y:focus {\n  background-color: #eee;\n  opacity: 0.9;\n}\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0Y7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBRUE7O0VBRUU7QUFDRjtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsMkRBQTJEO0VBQzNELG1FQUFtRTtFQUNuRSxZQUFZO0VBQ1osbURBQW1EO0VBQ25ELFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDJEQUEyRDtFQUMzRCxtRUFBbUU7RUFDbkUsV0FBVztFQUNYLG1EQUFtRDtFQUNuRCxRQUFRO0VBQ1IsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7QUFFQTs7Ozs7O0VBTUUsWUFBWTtBQUNkO0FBRUE7Ozs7RUFJRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBRUE7O0VBRUU7QUFDRjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsK0RBQStEO0VBQy9ELHVFQUF1RTtFQUN2RSxXQUFXO0VBQ1gsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCxzRUFBc0U7RUFDdEUsVUFBVTtFQUNWLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1YsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvY3NzL3BlcmZlY3Qtc2Nyb2xsYmFyLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb250YWluZXIgc3R5bGVcbiAqL1xuLnBzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy1hbmNob3I6IG5vbmU7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBhdXRvO1xuICAtbXMtdG91Y2gtYWN0aW9uOiBhdXRvO1xufVxuXG4vKlxuICogU2Nyb2xsYmFyIHJhaWwgc3R5bGVzXG4gKi9cbi5wc19fcmFpbC14IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gIGhlaWdodDogMTVweDtcbiAgLyogdGhlcmUgbXVzdCBiZSAnYm90dG9tJyBvciAndG9wJyBmb3IgcHNfX3JhaWwteCAqL1xuICBib3R0b206IDBweDtcbiAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzX19yYWlsLXkge1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcbiAgd2lkdGg6IDE1cHg7XG4gIC8qIHRoZXJlIG11c3QgYmUgJ3JpZ2h0JyBvciAnbGVmdCcgZm9yIHBzX19yYWlsLXkgKi9cbiAgcmlnaHQ6IDA7XG4gIC8qIHBsZWFzZSBkb24ndCBjaGFuZ2UgJ3Bvc2l0aW9uJyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wcy0tYWN0aXZlLXggPiAucHNfX3JhaWwteCxcbi5wcy0tYWN0aXZlLXkgPiAucHNfX3JhaWwteSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnBzOmhvdmVyID4gLnBzX19yYWlsLXgsXG4ucHM6aG92ZXIgPiAucHNfX3JhaWwteSxcbi5wcy0tZm9jdXMgPiAucHNfX3JhaWwteCxcbi5wcy0tZm9jdXMgPiAucHNfX3JhaWwteSxcbi5wcy0tc2Nyb2xsaW5nLXggPiAucHNfX3JhaWwteCxcbi5wcy0tc2Nyb2xsaW5nLXkgPiAucHNfX3JhaWwteSB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLnBzX19yYWlsLXg6aG92ZXIsXG4ucHNfX3JhaWwteTpob3Zlcixcbi5wc19fcmFpbC14OmZvY3VzLFxuLnBzX19yYWlsLXk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi8qXG4gKiBTY3JvbGxiYXIgdGh1bWIgc3R5bGVzXG4gKi9cbi5wc19fdGh1bWIteCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBoZWlnaHQgLjJzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgaGVpZ2h0IC4ycyBlYXNlLWluLW91dDtcbiAgaGVpZ2h0OiA2cHg7XG4gIC8qIHRoZXJlIG11c3QgYmUgJ2JvdHRvbScgZm9yIHBzX190aHVtYi14ICovXG4gIGJvdHRvbTogMnB4O1xuICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHNfX3RodW1iLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgd2lkdGggLjJzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgd2lkdGggLjJzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogNnB4O1xuICAvKiB0aGVyZSBtdXN0IGJlICdyaWdodCcgZm9yIHBzX190aHVtYi15ICovXG4gIHJpZ2h0OiAycHg7XG4gIC8qIHBsZWFzZSBkb24ndCBjaGFuZ2UgJ3Bvc2l0aW9uJyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wc19fcmFpbC14OmhvdmVyID4gLnBzX190aHVtYi14LFxuLnBzX19yYWlsLXg6Zm9jdXMgPiAucHNfX3RodW1iLXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICBoZWlnaHQ6IDExcHg7XG59XG5cbi5wc19fcmFpbC15OmhvdmVyID4gLnBzX190aHVtYi15LFxuLnBzX19yYWlsLXk6Zm9jdXMgPiAucHNfX3RodW1iLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICB3aWR0aDogMTFweDtcbn1cblxuLyogTVMgc3VwcG9ydHMgKi9cbkBzdXBwb3J0cyAoLW1zLW92ZXJmbG93LXN0eWxlOiBub25lKSB7XG4gIC5wcyB7XG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAucHMge1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/material-dashboard.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./src/assets/scss/material-dashboard.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/demo.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/demo.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*!\r\n\r\n=========================================================\r\n* Material Dashboard Angular - v2.4.0\r\n=========================================================\r\n\r\n* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2\r\n* Copyright 2019 Creative Tim (https://www.creative-tim.com)\r\n* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)\r\n\r\n* Coded by Creative Tim\r\n\r\n=========================================================\r\n\r\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\r\n\r\n*/\r\n.tim-typo{\r\n  padding-left: 25%;\r\n  margin-bottom: 40px;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n.tim-typo .tim-note{\r\n  bottom: 5px;\r\n  color: #c0c1c2;\r\n  display: block;\r\n  font-weight: 400;\r\n  font-size: 13px;\r\n  line-height: 15px;\r\n  left: 0;\r\n  margin-left: 20px;\r\n  position: absolute;\r\n  width: 260px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2RlbW8uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JDO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXNzZXRzL2Nzcy9kZW1vLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiogTWF0ZXJpYWwgRGFzaGJvYXJkIEFuZ3VsYXIgLSB2Mi40LjBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4qIFByb2R1Y3QgUGFnZTogaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L21hdGVyaWFsLWRhc2hib2FyZC1hbmd1bGFyMlxyXG4qIENvcHlyaWdodCAyMDE5IENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL21hdGVyaWFsLWRhc2hib2FyZC1hbmd1bGFyMi9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxyXG5cclxuKiBDb2RlZCBieSBDcmVhdGl2ZSBUaW1cclxuXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcbiovXHJcbi50aW0tdHlwb3tcclxuICBwYWRkaW5nLWxlZnQ6IDI1JTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udGltLXR5cG8gLnRpbS1ub3Rle1xyXG4gIGJvdHRvbTogNXB4O1xyXG4gIGNvbG9yOiAjYzBjMWMyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyNjBweDtcclxufVxyXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css":
/*!******************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!./perfect-scrollbar.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/assets/css/demo.css":
/*!*********************************!*\
  !*** ./src/assets/css/demo.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./demo.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/demo.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/assets/scss/material-dashboard.scss":
/*!*************************************************!*\
  !*** ./src/assets/scss/material-dashboard.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/dist/cjs.js??ref--15-3!./material-dashboard.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/material-dashboard.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!********************************************************************************************************************************************!*\
  !*** multi ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css ./src/assets/scss/material-dashboard.scss ./src/assets/css/demo.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\proyect\Downloads\Proyecto Angular MC\tesisweb-mapa\node_modules\perfect-scrollbar\css\perfect-scrollbar.css */"./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");
__webpack_require__(/*! D:\proyect\Downloads\Proyecto Angular MC\tesisweb-mapa\src\assets\scss\material-dashboard.scss */"./src/assets/scss/material-dashboard.scss");
module.exports = __webpack_require__(/*! D:\proyect\Downloads\Proyecto Angular MC\tesisweb-mapa\src\assets\css\demo.css */"./src/assets/css/demo.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map