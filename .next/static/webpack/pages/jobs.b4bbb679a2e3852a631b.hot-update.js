"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/jobs",{

/***/ "./components/JobComponent.tsx":
/*!*************************************!*\
  !*** ./components/JobComponent.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sam_code_internova_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component */ \"./node_modules/react-lazy-load-image-component/build/index.js\");\n/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/sam/code/internova/components/JobComponent.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar JobComponent = function JobComponent(_ref) {\n  var jobType = _ref.job,\n      handleTagClick = _ref.handleTagClick;\n  var position = jobType.position,\n      contract = jobType.contract,\n      location = jobType.location,\n      logo = jobType.logo,\n      company = jobType.company,\n      tools = jobType.tools,\n      isNew = jobType.isNew,\n      featured = jobType.featured;\n  var tags = [tools];\n\n  if (tools) {\n    tags.push.apply(tags, (0,_Users_sam_code_internova_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(tools));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col shadow-lg m-4 p-6 my-16 mx-4 rounded 'border-solid border-variant-1 border-l-8 lg:flex-row lg:my-6 hover:shadow-xl transition duration-500\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__.LazyLoadImage, {\n        className: \"-mt-16 mb-4 w-20 h-20 lg:w-24 lg:h-24 lg:my-0\",\n        src: logo,\n        alt: company\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-col justify-between ml-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: \"font-bold text-teal-500\",\n        children: [company, isNew && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"bg-teal-500 text-teal-100 text-xs uppercase m-2 px-2 py-1 rounded-full\",\n          children: \"New!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }, _this), featured && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"bg-gray-800 text-white text-xs uppercase m-0 px-2 py-1 rounded-full\",\n          children: \"Featured\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"font-bold text-xl my-2 lg:my-0\",\n        children: position\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-gray-500\",\n        children: [' ', moment__WEBPACK_IMPORTED_MODULE_2___default()(postedAt).fromNow(), \" \\xB7 \", contract, \" \\xB7 \", location, ' ']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-wrap cursor-pointer items-center mt-4 mx-4 pt-4 border-t border-gray-300 border-solid lg:ml-auto lg:border-0 lg:mt-0 lg:pt-0\",\n      children: tags ? tags.map(function (tag) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          onClick: function onClick() {\n            return handleTagClick(tag);\n          },\n          className: \"text-teal-500 bg-teal-100 font-bold pr-3 py-1 mb-4 rounded lg:mb-0\",\n          children: tag\n        }, tag, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 15\n        }, _this);\n      }) : ''\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = JobComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"JobComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0pvYkNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBYUEsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FHZjtBQUFBLE1BRkNDLE9BRUQsUUFGSkMsR0FFSTtBQUFBLE1BREpDLGNBQ0ksUUFESkEsY0FDSTtBQUFBLE1BQ0dDLFFBREgsR0FDMEVILE9BRDFFLENBQ0dHLFFBREg7QUFBQSxNQUNhQyxRQURiLEdBQzBFSixPQUQxRSxDQUNhSSxRQURiO0FBQUEsTUFDdUJDLFFBRHZCLEdBQzBFTCxPQUQxRSxDQUN1QkssUUFEdkI7QUFBQSxNQUNpQ0MsSUFEakMsR0FDMEVOLE9BRDFFLENBQ2lDTSxJQURqQztBQUFBLE1BQ3VDQyxPQUR2QyxHQUMwRVAsT0FEMUUsQ0FDdUNPLE9BRHZDO0FBQUEsTUFDZ0RDLEtBRGhELEdBQzBFUixPQUQxRSxDQUNnRFEsS0FEaEQ7QUFBQSxNQUN1REMsS0FEdkQsR0FDMEVULE9BRDFFLENBQ3VEUyxLQUR2RDtBQUFBLE1BQzhEQyxRQUQ5RCxHQUMwRVYsT0FEMUUsQ0FDOERVLFFBRDlEO0FBRUosTUFBTUMsSUFBSSxHQUFHLENBQUNILEtBQUQsQ0FBYjs7QUFFQSxNQUFJQSxLQUFKLEVBQVc7QUFDVEcsSUFBQUEsSUFBSSxDQUFDQyxJQUFMLE9BQUFELElBQUksZ0pBQVNILEtBQVQsRUFBSjtBQUNEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFDLDBKQUFmO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRSw4REFBQywwRUFBRDtBQUNFLGlCQUFTLEVBQUMsK0NBRFo7QUFFRSxXQUFHLEVBQUVGLElBRlA7QUFHRSxXQUFHLEVBQUVDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVFFO0FBQUssZUFBUyxFQUFDLG9DQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLHlCQUFkO0FBQUEsbUJBQ0dBLE9BREgsRUFFR0UsS0FBSyxpQkFDSjtBQUFNLG1CQUFTLEVBQUMsd0VBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLEVBT0dDLFFBQVEsaUJBQ1A7QUFBTSxtQkFBUyxFQUFDLHFFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWNFO0FBQUksaUJBQVMsRUFBQyxnQ0FBZDtBQUFBLGtCQUFnRFA7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGLGVBZUU7QUFBRyxpQkFBUyxFQUFDLGVBQWI7QUFBQSxtQkFDRyxHQURILEVBRUdQLDZDQUFNLENBQUNpQixRQUFELENBQU4sQ0FBaUJDLE9BQWpCLEVBRkgsWUFFa0NWLFFBRmxDLFlBRStDQyxRQUYvQyxFQUV5RCxHQUZ6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQTRCRTtBQUFLLGVBQVMsRUFBQyx3SUFBZjtBQUFBLGdCQUNHTSxJQUFJLEdBQ0RBLElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQUNDLEdBQUQ7QUFBQSw0QkFDUDtBQUNFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTWQsY0FBYyxDQUFDYyxHQUFELENBQXBCO0FBQUEsV0FEWDtBQUVFLG1CQUFTLEVBQUMsb0VBRlo7QUFBQSxvQkFLR0E7QUFMSCxXQUdPQSxHQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE87QUFBQSxPQUFULENBREMsR0FVRDtBQVhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0Q0QsQ0F2REQ7O0tBQU1qQjtBQXlETiwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0pvYkNvbXBvbmVudC50c3g/YTY5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF6eUxvYWRJbWFnZSB9IGZyb20gJ3JlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQnO1xuXG50eXBlIGpvYlR5cGUgPSB7XG4gIHBvc2l0aW9uOiBzdHJpbmc7XG4gIGNvbnRyYWN0OiBzdHJpbmc7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG4gIGxvZ286IHN0cmluZztcbiAgY29tcGFueTogc3RyaW5nO1xuICBwb3N0ZWRBdDogRGF0ZTtcbiAgdG9vbHM6IHN0cmluZ1tdO1xuICBpc05ldz86IGJvb2xlYW47XG4gIGZlYXR1cmVkPzogYm9vbGVhbjtcbn1cbmNvbnN0IEpvYkNvbXBvbmVudCA9ICh7XG4gIGpvYjogam9iVHlwZSxcbiAgaGFuZGxlVGFnQ2xpY2ssXG59KSA9PiB7XG4gIGNvbnN0IHtwb3NpdGlvbiwgY29udHJhY3QsIGxvY2F0aW9uLCBsb2dvLCBjb21wYW55LCB0b29scywgaXNOZXcsIGZlYXR1cmVkfSA9IGpvYlR5cGVcbiAgY29uc3QgdGFncyA9IFt0b29sc107XG5cbiAgaWYgKHRvb2xzKSB7XG4gICAgdGFncy5wdXNoKC4uLnRvb2xzKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNoYWRvdy1sZyBtLTQgcC02IG15LTE2IG14LTQgcm91bmRlZCAnYm9yZGVyLXNvbGlkIGJvcmRlci12YXJpYW50LTEgYm9yZGVyLWwtOCBsZzpmbGV4LXJvdyBsZzpteS02IGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPExhenlMb2FkSW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9XCItbXQtMTYgbWItNCB3LTIwIGgtMjAgbGc6dy0yNCBsZzpoLTI0IGxnOm15LTBcIlxuICAgICAgICAgIHNyYz17bG9nb31cbiAgICAgICAgICBhbHQ9e2NvbXBhbnl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gbWwtNFwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdGVhbC01MDBcIj5cbiAgICAgICAgICB7Y29tcGFueX1cbiAgICAgICAgICB7aXNOZXcgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdGVhbC01MDAgdGV4dC10ZWFsLTEwMCB0ZXh0LXhzIHVwcGVyY2FzZSBtLTIgcHgtMiBweS0xIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICBOZXchXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7ZmVhdHVyZWQgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC13aGl0ZSB0ZXh0LXhzIHVwcGVyY2FzZSBtLTAgcHgtMiBweS0xIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICBGZWF0dXJlZFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBteS0yIGxnOm15LTBcIj57cG9zaXRpb259PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAge21vbWVudChwb3N0ZWRBdCkuZnJvbU5vdygpfSDCtyB7Y29udHJhY3R9IMK3IHtsb2NhdGlvbn17JyAnfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIG10LTQgbXgtNCBwdC00IGJvcmRlci10IGJvcmRlci1ncmF5LTMwMCBib3JkZXItc29saWQgbGc6bWwtYXV0byBsZzpib3JkZXItMCBsZzptdC0wIGxnOnB0LTBcIj5cbiAgICAgICAge3RhZ3NcbiAgICAgICAgICA/IHRhZ3MubWFwKCh0YWcpID0+IChcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWdDbGljayh0YWcpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtdGVhbC01MDAgYmctdGVhbC0xMDAgZm9udC1ib2xkIHByLTMgcHktMSBtYi00IHJvdW5kZWQgbGc6bWItMFwiXG4gICAgICAgICAgICAgICAga2V5PXt0YWd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvYkNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJtb21lbnQiLCJSZWFjdCIsIkxhenlMb2FkSW1hZ2UiLCJKb2JDb21wb25lbnQiLCJqb2JUeXBlIiwiam9iIiwiaGFuZGxlVGFnQ2xpY2siLCJwb3NpdGlvbiIsImNvbnRyYWN0IiwibG9jYXRpb24iLCJsb2dvIiwiY29tcGFueSIsInRvb2xzIiwiaXNOZXciLCJmZWF0dXJlZCIsInRhZ3MiLCJwdXNoIiwicG9zdGVkQXQiLCJmcm9tTm93IiwibWFwIiwidGFnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/JobComponent.tsx\n");

/***/ })

});