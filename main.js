/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initial-page-load */ \"./src/modules/initial-page-load.js\");\n/* harmony import */ var _modules_initial_page_load__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\n\n\n\n\n\nconst tabs = document.querySelectorAll(\"[data-tab-target]\");\nconst tabContents = document.querySelectorAll(\"[data-tab-content]\");\nconst burger = document.querySelector(\".hamburger\");\n\n//Hamburger menu\nburger.addEventListener(\"click\", () => {\n  document.querySelector(\"ul\").classList.toggle(\"active\");\n  burger.classList.toggle(\"toggle\");\n});\n\n// Navigation tabs\ntabs.forEach((tab) =>\n  tab.addEventListener(\"click\", () => {\n    const target = document.querySelector(tab.dataset.tabTarget);\n    tabContents.forEach((tabContent) => {\n      tabContent.classList.remove(\"active\");\n    });\n    tabs.forEach((tab) => {\n      tab.classList.remove(\"red\");\n    });\n    tab.classList.add(\"red\");\n    target.classList.add(\"active\");\n  })\n);\n\n//Makes sure that menu navigation tab is colored after clicking button\ndocument.querySelector(\".order-now\").addEventListener(\"click\", () => {\n  document.querySelector(`[data-tab-target=\"#menu\"]`).classList.add(\"red\");\n});\n\n//Make sure page doesn't refresh on form submit\ndocument.querySelector(`[type=\"submit\"]`).addEventListener(\"click\", () => {\n  document.querySelector(\"form\").reset();\n});\n\nconsole.log(`Today is ${new Date().toUTCString()}. Very nice.`);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\nconst renderContactPage = (() => {\n    //container\n    const contentContainer = document.querySelector(\"#content\");\n    const contact = document.createElement(\"div\");\n    contact.setAttribute(\"id\", \"contact\");\n    contact.setAttribute(\"data-tab-content\", \"\");\n    contact.innerHTML = `\n      <div class=\"hero\">\n      <div class=\"help\">\n      <h3>How can we help you?</h3>\n    </div>\n    <div class=\"feedback-area\">\n      <div class=\"feedback-para\">\n        <p>You look gorgeous today. Okay, now your turn! Let us know what you think of us</p>\n      </div>\n      <div class=\"feedback-btn\">\n        <a href=\"\">\n          <i class=\"fa-solid fa-location-dot\"></i> Restaurant feedback <i id=\"arrow\" class=\"fa-solid fa-arrow-right\"></i>\n        </a>\n      </div>\n    </div>\n    </div>`;\n  \n    contentContainer.appendChild(contact);\n  })();\n  \n  \n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomePage\": () => (/* binding */ renderHomePage)\n/* harmony export */ });\nconst renderHomePage = (() => {\n    //container\n    const contentContainer = document.querySelector(\"#content\");\n  \n    const home = document.createElement(\"div\");\n    home.classList.add(\"tab-content\")\n    home.innerHTML = `<div id=\"home\" class=\"active\" data-tab-content>\n    <div class=\"search-container\">\n    <h2>Find a restaurant\n    </h2>\n    <div class=\"form-inner\">\n        <input type=\"search\" id=\"restaurant-term\" placeholder=\"Search for city, area or restaurant...\" autocomplete=\"off\">\n        <button class=\"search\">\n            <svg width=\"39\" height=\"39\" viewBox=\"0 0 39 39\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M22.8607 22.8607L31.7243 31.7243\" stroke=\"#2B2B2D\" stroke-width=\"1.58621\" stroke-linecap=\"round\"></path>\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.862 25.3792C21.1182 25.3792 25.3792 21.1182 25.3792 15.862C25.3792 10.6057 21.1182 6.34473 15.862 6.34473C10.6057 6.34473 6.34473 10.6057 6.34473 15.862C6.34473 21.1182 10.6057 25.3792 15.862 25.3792Z\" stroke=\"#2B2B2D\" stroke-width=\"1.58621\"></path>\n            </svg>\n            </button>\n            <div class=\"users_location\" onclick=\"getLocation()\"><svg enable-background=\"new 0 0 48 48\" height=\"33px\" version=\"1.1\" viewBox=\"0 0 48 48\" width=\"48px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"Expanded\"><g><g><path d=\"M24,47.759l-0.823-1.191C22.558,45.671,8,24.499,8,16C8,7.178,15.178,0,24,0s16,7.178,16,16     c0,8.499-14.558,29.671-15.177,30.568L24,47.759z M24,2c-7.72,0-14,6.28-14,14c0,6.787,10.885,23.555,14,28.214     C27.115,39.555,38,22.787,38,16C38,8.28,31.72,2,24,2z\"></path></g><g><path d=\"M24,23c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,23,24,23z M24,11c-2.757,0-5,2.243-5,5s2.243,5,5,5     s5-2.243,5-5S26.757,11,24,11z\"></path></g></g></g></svg></div>\n    </div>\n</div>\n<div class=\"location\">\n<div class=\"text-right\">\n    <h3>BASKETS</h3>\n    <span>2 Restaurants</span>\n</div>\n\n<div class=\"ob\">\n    <div class=\"ob-swakop\">\n    <img src=\"./location-pics/rique_restaurant_exterior_169_people_walking_past_two_different_5e0d5912-2f55-4939-bffb-8471b6075ecd.png\" alt=\"\">\n        <h3>Ocean Basket Swakop</h3>\n              <span>The Swakop Mall, 123 Forest Drive, Forestville, Maine\n              </span>\n             <div class=\"time\">\n              <span>Phone</span>\n              <span>+XXXXXXXXXX</span>\n              <span>Opening Times</span>\n              <span>11:30 - 21:00 (mon - sun)</span>\n          </div>\n    </div>\n    <div class=\"ob-windhoek\">\n    <img src=\"./location-pics/rique_restaurant_exterior_169_people_walking_past_two_different_2bf9b486-7eec-4019-bdda-f3ff87953c13.png\" alt=\"\">\n              <h3>Ocean Basket The Grove</h3>\n              <span>The Grove Mall, 456 Hills Boulevard, Hillsville, Saint\n              </span>\n             <div class=\"time\">\n              <span>Phone</span>\n              <span>+XXXXXXXXXX</span>\n              <span>Opening Times</span>\n              <span>11:00 - 20:00 (mon - sun)</span>\n          </div>\n          </div>\n  </div>\n  </div>\n  <footer>\n  <div class=\"footer1\">\n  <div class=\"company\">\n    <h3>More about company</h3>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint distinctio dolores voluptate culpa eaque obcaecati, voluptatem sunt vitae consequuntur laborum.</p>\n    <p>-Emma Patricia, CEO</p>\n  </div>\n  <div class=\"connected\">\n    <h3>Keep Connected</h3>\n      <div class=\"socials\">\n        <i class=\"fa-brands fa-facebook\" style=\"font-size: 2em;\"></i>\n        <p>Like us on Facebook</p>\n      </div>\n      <div class=\"socials\">\n        <i class=\"fa-brands fa-twitter\" style=\"font-size: 2em;\"></i>\n        <p>Follow us on Twitter</p>\n      </div>\n      <div class=\"socials\">\n        <i class=\"fa-brands fa-google-plus\" style=\"font-size: 2em;\"></i>\n        <p>Add us on Google Plus</p>\n      </div>\n      <div class=\"socials\">\n        <i class=\"fa-brands fa-pinterest\" style=\"font-size: 2em;\"></i>\n        <p>Follow us on Pinterest</p>\n      </div>\n  </div>\n\n  <div class=\"info\">\n    <h3>Contact Information</h3>\n    <div class=\"email\">\n      <i class=\"fa-solid fa-envelope\" style=\"font-size: 1.5em;\"></i>\n      <p>contact@example.com</p>\n    </div>\n  </div>\n</div>\n<div class=\"footer2\">\n  <p>© Copyright 2023</p>\n    <div class=\"others\">\n      <div class=\"other1\">\n        <p>Company Information</p>\n      </div>\n      <div class=\"other1\">\n        <p>Privacy Policy</p>\n      </div>\n      <div class=\"other1\">\n        <p>Terms & Conditions </p>\n      </div>\n    </div>\n</div>\n</footer>\n</div>`;\n  \n    contentContainer.appendChild(home);\n  })();\n  \n  \n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/initial-page-load.js":
/*!******************************************!*\
  !*** ./src/modules/initial-page-load.js ***!
  \******************************************/
/***/ (() => {

eval("const initialPageLoad = (() => {\n    //container\n    const contentContainer = document.querySelector(\"#content\");\n  \n    const header = document.createElement(\"header\");\n    header.innerHTML = `\n    <nav>\n    <h2>Ocean Basket</h2>\n    <a href=\"#\" class=\"hamburger\">\n      <span class=\"line line1\"></span>\n      <span class=\"line line2\"></span>\n      <span class=\"line line3\"></span>\n    </a>\n    <ul class=\"links\">\n      <li data-tab-target=\"#home\"  class=\"tab red\">Home</li>\n      <li data-tab-target=\"#menu\" class=\"tab\">Menu</li>\n      <li data-tab-target=\"#contact\" class=\"tab\">Contact us</li>\n    </ul>\n  </nav>`;\n  \n      contentContainer.appendChild(header)\n  })();\n  \n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initial-page-load.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuPage\": () => (/* binding */ renderMenuPage)\n/* harmony export */ });\nconst renderMenuPage = (() => {\n    //container\n    const contentContainer = document.querySelector(\"#content\");\n    const menu = document.createElement(\"div\");\n    menu.setAttribute(\"id\", \"menu\");\n    menu.setAttribute(\"data-tab-content\", \"\");\n    menu.innerHTML = `\n    <div class=\"hero\">\n    <div class=\"menu-header\">\n        \n        <p>our special meals</p>\n    </div>\n    <div class=\"list\">\n    <div class=\"list-1\">\n    <img src=\"./meals/fishandchips_413x549-7bk06tn9p4g69tt8fe4wvkjcc.jpeg\" alt=\"\">\n        <div class=\"prices\">\n        <p>Fish & amp; Chips</p>\n        <p>$8</p>\n    </div>\n    </div>\n    <div class=\"list-2\">\n    <img src=\"./meals/platter-for-2-7c2g6imsfvj2lw03nem43qqy4.png\" alt=\"\">\n        <div class=\"prices\">\n        <p>Platter for 2</p>\n        <p>$35</p>\n    </div>\n    </div>\n    <div class=\"list-3\">\n    <img src=\"./meals/prawn_mussel_413x549-7bk06twyq1u8moprnb69jlt64.jpeg\" alt=\"\">\n        <div class=\"prices\">\n        <p>Prawn & Mussel combo</p>\n        <p>$13</p>\n    </div>\n    </div>\n    <div class=\"list-4\">\n    <img src=\"./meals/fusion-crunch-v2-7c2g85m1303etvx0tdu6bhj3g.png\" alt=\"\">\n        <div class=\"prices\">\n        <p>Fusion Crunch Platter</p>\n        <p>$10</p>\n    </div>\n    </div>\n    <div class=\"list-5\">\n    <img src=\"./meals/Futomaki-7c2g85vq3xhh6qtk1avizisx8.png\" alt=\"\">\n        <div class=\"prices\">\n        <p>Futomaki</p>\n        <p>$3</p>\n    </div>\n    </div>\n    <div class=\"list-6\">\n    <img src=\"./meals/sushi-for-2-7c2g85cc22pch10hlgstng99o.png\" alt=\"\">\n        <div class=\"prices\">\n        <p>Sushi for 2</p>\n        <p>$15</p>\n    </div>\n    </div>\n</div>\n  </div>`;\n  \n    contentContainer.appendChild(menu);\n  })();\n  \n  \n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;