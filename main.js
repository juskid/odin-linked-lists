/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linkedLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedLists */ \"./src/linkedLists.js\");\n\n\nconst test = new _linkedLists__WEBPACK_IMPORTED_MODULE_0__.LinkedList();\ntest.append('dog');\ntest.append('cat');\ntest.append('mouse');\ntest.prepend('tiger');\nconsole.log(test);\nconsole.log(test.size());\nconsole.log(test.head());\nconsole.log(test.tail());\nconsole.log(test.at(1));\ntest.pop();\nconsole.log(test.tail());\nconsole.log(test.contains('dog'));\nconsole.log(test.contains('mouse'));\nconsole.log(test.find('cat'));\ntest.toString();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkM7O0FBRTNDLGlCQUFpQixvREFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlua2VkTGlzdCB9IGZyb20gXCIuL2xpbmtlZExpc3RzXCI7XG5cbmNvbnN0IHRlc3QgPSBuZXcgTGlua2VkTGlzdCgpO1xudGVzdC5hcHBlbmQoJ2RvZycpO1xudGVzdC5hcHBlbmQoJ2NhdCcpO1xudGVzdC5hcHBlbmQoJ21vdXNlJyk7XG50ZXN0LnByZXBlbmQoJ3RpZ2VyJyk7XG5jb25zb2xlLmxvZyh0ZXN0KTtcbmNvbnNvbGUubG9nKHRlc3Quc2l6ZSgpKTtcbmNvbnNvbGUubG9nKHRlc3QuaGVhZCgpKTtcbmNvbnNvbGUubG9nKHRlc3QudGFpbCgpKTtcbmNvbnNvbGUubG9nKHRlc3QuYXQoMSkpO1xudGVzdC5wb3AoKTtcbmNvbnNvbGUubG9nKHRlc3QudGFpbCgpKTtcbmNvbnNvbGUubG9nKHRlc3QuY29udGFpbnMoJ2RvZycpKTtcbmNvbnNvbGUubG9nKHRlc3QuY29udGFpbnMoJ21vdXNlJykpO1xuY29uc29sZS5sb2codGVzdC5maW5kKCdjYXQnKSk7XG50ZXN0LnRvU3RyaW5nKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/linkedLists.js":
/*!****************************!*\
  !*** ./src/linkedLists.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LinkedList: () => (/* binding */ LinkedList)\n/* harmony export */ });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./src/node.js\");\n\n\nclass LinkedList {\n    constructor() {\n        this.headPointer = null; \n    }\n\n    append(value) {\n        if (this.headPointer == null) {\n            this.headPointer = new _node__WEBPACK_IMPORTED_MODULE_0__.Node(value);\n        }\n        else {\n            appendRecursion(this.headPointer, value);\n        }\n\n        function appendRecursion(node, value) {\n            if (node.next == null) {\n                node.next = new _node__WEBPACK_IMPORTED_MODULE_0__.Node(value);\n            }\n            else {\n                appendRecursion(node.next, value);\n            }\n        }\n    }\n\n    prepend(value) {\n        const newHeadNode = new _node__WEBPACK_IMPORTED_MODULE_0__.Node(value);\n        newHeadNode.next = this.headPointer;\n        this.headPointer = newHeadNode;\n    }\n\n    size() {\n        if (this.headPointer == null) {\n            return 0;\n        }\n        else {\n            return sizeRecursion(1, this.headPointer);\n        }\n        function sizeRecursion(count, node) {\n            if (node.next == null) {\n                return count;\n            }\n            else {\n                return sizeRecursion(count + 1, node.next);\n            }\n        }\n    }\n\n    head() {\n        return this.headPointer;\n    }\n\n    tail() {\n        if (this.headPointer == null) {\n            return null;\n        } else {\n            return tailRecursion(this.headPointer);\n        }\n\n        function tailRecursion(node) {\n            if (node.next == null) {\n                return node;\n            }\n            else {\n                return tailRecursion(node.next);\n            }\n        }\n    }\n\n    at(index) {\n        if (index == 0) {\n            return this.headPointer;\n        } else if (this.headPointer == null){\n            return null;\n        } else {\n            return atRecursion(0, index, this.headPointer);\n        }\n\n        function atRecursion (count, index, node) {\n            if (count == index) {\n                return node;\n            } else if (node.next == null){\n                return null;\n            } else {\n                return atRecursion(count +1, index, node.next);\n            }\n        }\n\n    }\n    pop() {\n        if (this.headPointer !== null) {\n            popRecursion(this.headPointer)\n        }\n        function popRecursion(node) {\n            if (node.next !== null) {\n                let beforeLast = popRecursion(node.next);\n                if (beforeLast) {\n                    node.next = null;\n                    return false;\n                } else {\n                    return false;\n                }\n            } else {\n                return true;\n            }\n\n        }\n    }\n\n    contains(value) {\n        if (this.headPointer == null) {\n            return false;\n        } else {\n            return containsRecursion(value, this.headPointer);\n        }\n        function containsRecursion(value, node) {\n            if (node.value == value) {\n                return true;\n            } else if (node.next == null) {\n                return false;\n            } else {\n                return containsRecursion(value, node.next);\n            }\n        }\n    }\n\n    find(value) {\n        if (this.headPointer == null) {\n            return null;\n        } else {\n            return findRecursion(0, value, this.headPointer);\n        }\n        function findRecursion (count, value, node) {\n            if (node.value == value) {\n                return count;\n            } else if (node.next == null) {\n                return null;\n            } else {\n                return findRecursion(count+1, value, node.next);\n            }\n        }\n    }\n\n    toString() {\n        if (this.headPointer == null) {\n            console.log('null');\n        } else {\n            console.log(toStringRecursion(this.headPointer));\n        }\n        function toStringRecursion(node) {\n            if (node.next == null) {\n                return node.value;\n            } else {\n                return node.value + ' --> ' + toStringRecursion(node.next);\n            }\n        }\n    }\n\n\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlua2VkTGlzdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsdUNBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyx1Q0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsdUNBQUk7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbGlua2VkTGlzdHMuanM/N2NkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZVwiO1xuXG5jbGFzcyBMaW5rZWRMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkUG9pbnRlciA9IG51bGw7IFxuICAgIH1cblxuICAgIGFwcGVuZCh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5oZWFkUG9pbnRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRQb2ludGVyID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXBwZW5kUmVjdXJzaW9uKHRoaXMuaGVhZFBvaW50ZXIsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFwcGVuZFJlY3Vyc2lvbihub2RlLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubmV4dCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5uZXh0ID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kUmVjdXJzaW9uKG5vZGUubmV4dCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJlcGVuZCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdIZWFkTm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgbmV3SGVhZE5vZGUubmV4dCA9IHRoaXMuaGVhZFBvaW50ZXI7XG4gICAgICAgIHRoaXMuaGVhZFBvaW50ZXIgPSBuZXdIZWFkTm9kZTtcbiAgICB9XG5cbiAgICBzaXplKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFkUG9pbnRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzaXplUmVjdXJzaW9uKDEsIHRoaXMuaGVhZFBvaW50ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHNpemVSZWN1cnNpb24oY291bnQsIG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5leHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaXplUmVjdXJzaW9uKGNvdW50ICsgMSwgbm9kZS5uZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhlYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRQb2ludGVyO1xuICAgIH1cblxuICAgIHRhaWwoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRQb2ludGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhaWxSZWN1cnNpb24odGhpcy5oZWFkUG9pbnRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0YWlsUmVjdXJzaW9uKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5leHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhaWxSZWN1cnNpb24obm9kZS5uZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF0KGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oZWFkUG9pbnRlcjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhlYWRQb2ludGVyID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYXRSZWN1cnNpb24oMCwgaW5kZXgsIHRoaXMuaGVhZFBvaW50ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYXRSZWN1cnNpb24gKGNvdW50LCBpbmRleCwgbm9kZSkge1xuICAgICAgICAgICAgaWYgKGNvdW50ID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dCA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0UmVjdXJzaW9uKGNvdW50ICsxLCBpbmRleCwgbm9kZS5uZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHBvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZFBvaW50ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHBvcFJlY3Vyc2lvbih0aGlzLmhlYWRQb2ludGVyKVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBvcFJlY3Vyc2lvbihub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJlZm9yZUxhc3QgPSBwb3BSZWN1cnNpb24obm9kZS5uZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoYmVmb3JlTGFzdCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLm5leHQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRhaW5zKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRQb2ludGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluc1JlY3Vyc2lvbih2YWx1ZSwgdGhpcy5oZWFkUG9pbnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY29udGFpbnNSZWN1cnNpb24odmFsdWUsIG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnZhbHVlID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbnNSZWN1cnNpb24odmFsdWUsIG5vZGUubmV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRQb2ludGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZpbmRSZWN1cnNpb24oMCwgdmFsdWUsIHRoaXMuaGVhZFBvaW50ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGZpbmRSZWN1cnNpb24gKGNvdW50LCB2YWx1ZSwgbm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUudmFsdWUgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubmV4dCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaW5kUmVjdXJzaW9uKGNvdW50KzEsIHZhbHVlLCBub2RlLm5leHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRQb2ludGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdudWxsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b1N0cmluZ1JlY3Vyc2lvbih0aGlzLmhlYWRQb2ludGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdG9TdHJpbmdSZWN1cnNpb24obm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubmV4dCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUudmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnZhbHVlICsgJyAtLT4gJyArIHRvU3RyaW5nUmVjdXJzaW9uKG5vZGUubmV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5leHBvcnQge0xpbmtlZExpc3R9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/linkedLists.js\n");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Node: () => (/* binding */ Node)\n/* harmony export */ });\nclass Node {\n    constructor(value) {\n        this.value = value;\n        this.next = null;\n    }\n\n    setNext (nextNode) {\n        this.next = nextNode;\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbm9kZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbm9kZS5qcz8xMWU3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXROZXh0IChuZXh0Tm9kZSkge1xuICAgICAgICB0aGlzLm5leHQgPSBuZXh0Tm9kZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7Tm9kZX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/node.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;