/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./images/books.png":
/*!**************************!*\
  !*** ./images/books.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/books.png\";\n\n//# sourceURL=webpack://slozhno-sosredotochitsya/./images/books.png?");

/***/ }),

/***/ "./images/ice-cream.png":
/*!******************************!*\
  !*** ./images/ice-cream.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ice-cream.png\";\n\n//# sourceURL=webpack://slozhno-sosredotochitsya/./images/ice-cream.png?");

/***/ }),

/***/ "./images/street.png":
/*!***************************!*\
  !*** ./images/street.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/street.png\";\n\n//# sourceURL=webpack://slozhno-sosredotochitsya/./images/street.png?");

/***/ }),

/***/ "./images/sunset.png":
/*!***************************!*\
  !*** ./images/sunset.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/sunset.png\";\n\n//# sourceURL=webpack://slozhno-sosredotochitsya/./images/sunset.png?");

/***/ }),

/***/ "./images/tape.png":
/*!*************************!*\
  !*** ./images/tape.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/tape.png\";\n\n//# sourceURL=webpack://slozhno-sosredotochitsya/./images/tape.png?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _images_books_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/books.png */ \"./images/books.png\");\n/* harmony import */ var _images_ice_cream_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/ice-cream.png */ \"./images/ice-cream.png\");\n/* harmony import */ var _images_street_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/street.png */ \"./images/street.png\");\n/* harmony import */ var _images_sunset_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/sunset.png */ \"./images/sunset.png\");\n/* harmony import */ var _images_tape_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/tape.png */ \"./images/tape.png\");\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\n\n\n\n\n\nvar themeButtons = document.querySelectorAll('.header__theme-menu-button');\nthemeButtons.forEach(function (button) {\n  button.addEventListener('click', function () {\n    themeButtons.forEach(function (btn) {\n      btn.classList.remove('header__theme-menu-button_active');\n      btn.removeAttribute('disabled');\n    });\n    if (_toConsumableArray(button.classList).includes('header__theme-menu-button_type_light')) {\n      changeTheme('light');\n    } else if (_toConsumableArray(button.classList).includes('header__theme-menu-button_type_dark')) {\n      changeTheme('dark');\n    } else {\n      changeTheme('auto');\n    }\n    button.classList.add('header__theme-menu-button_active');\n    button.setAttribute('disabled', true);\n  });\n});\nfunction changeTheme(theme) {\n  document.body.className = 'page';\n  document.body.classList.add(\"theme_\".concat(theme));\n  localStorage.setItem('theme', theme);\n}\nfunction initTheme() {\n  var theme = localStorage.getItem('theme');\n  if (theme) {\n    changeTheme(theme);\n    themeButtons.forEach(function (btn) {\n      btn.classList.remove('header__theme-menu-button_active');\n      btn.removeAttribute('disabled');\n    });\n    document.querySelector(\".header__theme-menu-button_type_\".concat(theme)).classList.add('header__theme-menu-button_active');\n    document.querySelector(\".header__theme-menu-button_type_\".concat(theme)).setAttribute('disabled', true);\n  }\n}\ninitTheme();\n\n//# sourceURL=webpack://slozhno-sosredotochitsya/./scripts/index.js?");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://slozhno-sosredotochitsya/./styles/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/slozhno-sosredotochitsya/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;