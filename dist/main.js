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

/***/ "./src/components/header/header.css":
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/components/header/header.css?");

/***/ }),

/***/ "./src/components/menu/menu.css":
/*!**************************************!*\
  !*** ./src/components/menu/menu.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/components/menu/menu.css?");

/***/ }),

/***/ "./src/pressets.css":
/*!**************************!*\
  !*** ./src/pressets.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/pressets.css?");

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.css */ \"./src/components/header/header.css\");\n/* harmony import */ var _check_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check.png */ \"./src/components/header/check.png\");\n\r\n\r\n\r\nfunction Heading(){\r\n    let headerElement = document.createElement('header')\r\n    headerElement.id = 'header'\r\n\r\n    let pageTitle = document.createElement('h2')\r\n    pageTitle.id = 'page-title'\r\n    pageTitle.innerText = 'ToDo App'\r\n\r\n    let checkmark = document.createElement('img')\r\n    checkmark.src = _check_png__WEBPACK_IMPORTED_MODULE_1__\r\n    checkmark.id = 'checkmark'\r\n\r\n    headerElement.appendChild(pageTitle)\r\n    headerElement.appendChild(checkmark)\r\n\r\n    return headerElement\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n//# sourceURL=webpack://todo/./src/components/header/header.js?");

/***/ }),

/***/ "./src/components/menu/menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/components/menu/tasks.js\");\n/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.css */ \"./src/components/menu/menu.css\");\n\r\n\r\n\r\nfunction createMenu(){\r\n    let menuSection = document.createElement('section')\r\n    menuSection.id = 'menu'\r\n\r\n    //Creating home text\r\n\r\n    let homeContainer = document.createElement('div')\r\n    homeContainer.id = 'home'\r\n    let homeText = document.createElement('p')\r\n    homeText.innerText = 'Home'\r\n\r\n    homeContainer.appendChild(homeText)\r\n    menuSection.appendChild(homeContainer)\r\n\r\n    //Creating default tasks\r\n\r\n    let mainTasksContainer = document.createElement('div')\r\n    mainTasksContainer.id = 'main-tasks'\r\n    let allTasks = new _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('All')\r\n    mainTasksContainer.appendChild(allTasks)\r\n\r\n    let importantTasks = new _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Important')\r\n    mainTasksContainer.appendChild(importantTasks)\r\n\r\n    let completedTasks = new _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Completed')\r\n    mainTasksContainer.appendChild(completedTasks)\r\n\r\n    menuSection.appendChild(mainTasksContainer)\r\n\r\n    //Creating personal tasks text\r\n\r\n    let projectsContainer = document.createElement('div')\r\n    projectsContainer.id = 'container-title'\r\n    let projectsTitle = document.createElement('div')\r\n    projectsTitle.id = 'projects-title'\r\n    //add button\r\n    let divAdd = document.createElement('div')\r\n    divAdd.innerText = 'add'\r\n    divAdd.id = 'add'\r\n    //\r\n    let projectsText = document.createElement('p')\r\n    projectsText.innerText = 'Projects'\r\n\r\n\r\n    projectsTitle.appendChild(projectsText)\r\n    projectsContainer.appendChild(projectsTitle)\r\n    projectsContainer.appendChild(divAdd)\r\n    menuSection.appendChild(projectsContainer)\r\n\r\n    return menuSection\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://todo/./src/components/menu/menu.js?");

/***/ }),

/***/ "./src/components/menu/tasks.js":
/*!**************************************!*\
  !*** ./src/components/menu/tasks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTasks(text){\r\n    let div = document.createElement('div')\r\n    div.classList.add(\"tasks\");\r\n\r\n    let divText = document.createElement('p')\r\n    divText.innerText = `${text}`\r\n\r\n    div.appendChild(divText)\r\n\r\n    return div\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTasks);\n\n//# sourceURL=webpack://todo/./src/components/menu/tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pressets_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pressets.css */ \"./src/pressets.css\");\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.js */ \"./src/components/header/header.js\");\n/* harmony import */ var _components_menu_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.js */ \"./src/components/menu/menu.js\");\n\r\n\r\n\r\n\r\nloadPage()\r\n\r\nfunction loadPage(){\r\n    let header = new _components_header_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n    document.getElementById('content').appendChild(header)\r\n\r\n    let menu = new _components_menu_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\r\n    document.getElementById('content').appendChild(menu)\r\n    \r\n}\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/components/header/check.png":
/*!*****************************************!*\
  !*** ./src/components/header/check.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e95abe0870091376d0e.png\";\n\n//# sourceURL=webpack://todo/./src/components/header/check.png?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;