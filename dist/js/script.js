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

/***/ "./src/js/modules/comments.js":
/*!************************************!*\
  !*** ./src/js/modules/comments.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comments\": () => (/* binding */ comments)\n/* harmony export */ });\nconst btnSearch = document.getElementById(\"btn__search\");\nconst btnComments = document.getElementById(\"btn__comments\");\nconst searchInput = document.getElementById(\"search__input\");\nconst commentsList = document.getElementById(\"comments__list\");\nfunction comments () {\nconst renderComments = (comments) => {\n  commentsList.innerHTML = \"\";\n  comments.forEach((comment) => {\n    const divListComments = document.createElement(\"div.list__comments\");\n    divListComments.innerHTML = `\n      <h2 > ${comment.email}</h2>\n      <p>${comment.body}</p>\n    `;\n    commentsList.appendChild(divListComments);\n  });\n};\n\n\nconst fetchComments = async (idComments) => {\n  try {\n    const apiUrl = `https://jsonplaceholder.typicode.com/comments/${idComments}`;\n    const response = await fetch(apiUrl)\n    const comment = await response.json();\n    return comment;\n  } catch (error) {\n    console.error(error);\n  }\n}\n\nbtnComments.addEventListener(\"click\", () => {\n  const idComments = searchInput.value;\n    fetchComments(idComments)\n      .then((comment) => [comment])\n      .then((comments) => {\n        renderComments(comments);\n      })\n      .catch((error) => {\n        console.log(error);\n      });\n\n});\n}\ncomments()\n\n//# sourceURL=webpack://homework_24/./src/js/modules/comments.js?");

/***/ }),

/***/ "./src/js/modules/post.js":
/*!********************************!*\
  !*** ./src/js/modules/post.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"post\": () => (/* binding */ post)\n/* harmony export */ });\nconst btnSearch = document.getElementById(\"btn__search\");\nconst searchInput = document.getElementById(\"search__input\");\nconst postList = document.getElementById(\"post__list\");\nconst btnComments = document.getElementById(\"btn__comments\");\nconst commentsList = document.getElementById(\"comments__list\");\nfunction post () {\nconst renderPosts = (posts) => {\n  postList.innerHTML = \"\";\n  posts.forEach((post) => {\n    const divList = document.createElement(\"div.list\");\n    divList.innerHTML = `\n      <h2 class=\"post__title\">${post.title}</h2>\n      <p>${post.body}</p>\n    `;\n    btnComments.style.display = 'block'\n    postList.appendChild(divList);\n  });\n};\n\nconst fetchPost = async (idPost) => {\n  try {\n    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${idPost}`;\n    const response = await fetch(apiUrl)\n    const posts = await response.json();\n    return posts;\n  } catch (error) {\n    console.error(error);\n  }\n}\n\nbtnSearch.addEventListener(\"click\", () => {\n  const idPost = searchInput.value;\n  if (idPost >= 1 && idPost <= 100) {\n    fetchPost(idPost)\n      .then((posts) => {\n        renderPosts([posts]);\n      })\n      .catch((error) => {\n        console.log(error);\n      });\n  }else {\n    alert(`Please enter post ID (from 1 to 100)!`);\n  }\n  commentsList.innerHTML = ''\n});\n}\npost()\n\n\n//# sourceURL=webpack://homework_24/./src/js/modules/post.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/js/modules/comments.js\");\n/* harmony import */ var _modules_post_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/post.js */ \"./src/js/modules/post.js\");\nconst searchInput = document.getElementById(\"search__input\");\nconst btnSearch = document.getElementById(\"btn__search\");\nconst postList = document.getElementById(\"post__list\");\nconst btnComments = document.getElementById(\"btn__comments\");\nconst commentsList = document.getElementById(\"comments__list\");\n\n\n\n\n\n\n\n\n\n//-------------------Comments\n\n\n\n\n\n\n//# sourceURL=webpack://homework_24/./src/js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;