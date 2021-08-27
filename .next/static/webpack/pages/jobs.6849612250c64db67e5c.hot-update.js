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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sam_code_internova_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component */ \"./node_modules/react-lazy-load-image-component/build/index.js\");\n/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/sam/code/internova/components/JobComponent.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar JobComponent = function JobComponent(job, handleTagClick) {\n  var position = job.position,\n      contract = job.contract,\n      location = job.location,\n      logo = job.logo,\n      company = job.company,\n      postedAt = job.postedAt,\n      tools = job.tools,\n      isNew = job.isNew,\n      featured = job.featured;\n  var tags = [];\n\n  if (tools) {\n    tags.push.apply(tags, (0,_Users_sam_code_internova_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(tools));\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col shadow-lg m-4 p-6 my-16 mx-4 rounded 'border-solid border-variant-1 border-l-8 lg:flex-row lg:my-6 hover:shadow-xl transition duration-500\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__.LazyLoadImage, {\n        className: \"-mt-16 mb-4 w-20 h-20 lg:w-24 lg:h-24 lg:my-0\",\n        src: logo,\n        alt: company\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-col justify-between ml-4\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: \"font-bold text-teal-500\",\n        children: [company, isNew && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"bg-teal-500 text-teal-100 text-xs uppercase m-2 px-2 py-1 rounded-full\",\n          children: \"New!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 13\n        }, _this), featured && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"bg-gray-800 text-white text-xs uppercase m-0 px-2 py-1 rounded-full\",\n          children: \"Featured\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"font-bold text-xl my-2 lg:my-0\",\n        children: position\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-gray-500\",\n        children: [' ', moment__WEBPACK_IMPORTED_MODULE_2___default()(postedAt).fromNow(), \" \\xB7 \", contract, \" \\xB7 \", location, ' ']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-wrap cursor-pointer items-center mt-4 mx-4 pt-4 border-t border-gray-300 border-solid lg:ml-auto lg:border-0 lg:mt-0 lg:pt-0\",\n      children: tags ? tags.map(function (tag) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          onClick: function onClick() {\n            return handleTagClick(tag);\n          },\n          className: \"text-teal-500 bg-teal-100 font-bold pr-3 py-1 mb-4 rounded lg:mb-0\",\n          children: tag\n        }, tag, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 15\n        }, _this);\n      }) : ''\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = JobComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"JobComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0pvYkNvbXBvbmVudC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsR0FBRCxFQUFlQyxjQUFmLEVBQWtDO0FBQUEsTUFFbkRDLFFBRm1ELEdBV2pERixHQVhpRCxDQUVuREUsUUFGbUQ7QUFBQSxNQUduREMsUUFIbUQsR0FXakRILEdBWGlELENBR25ERyxRQUhtRDtBQUFBLE1BSW5EQyxRQUptRCxHQVdqREosR0FYaUQsQ0FJbkRJLFFBSm1EO0FBQUEsTUFLbkRDLElBTG1ELEdBV2pETCxHQVhpRCxDQUtuREssSUFMbUQ7QUFBQSxNQU1uREMsT0FObUQsR0FXakROLEdBWGlELENBTW5ETSxPQU5tRDtBQUFBLE1BT25EQyxRQVBtRCxHQVdqRFAsR0FYaUQsQ0FPbkRPLFFBUG1EO0FBQUEsTUFRbkRDLEtBUm1ELEdBV2pEUixHQVhpRCxDQVFuRFEsS0FSbUQ7QUFBQSxNQVNuREMsS0FUbUQsR0FXakRULEdBWGlELENBU25EUyxLQVRtRDtBQUFBLE1BVW5EQyxRQVZtRCxHQVdqRFYsR0FYaUQsQ0FVbkRVLFFBVm1EO0FBWXJELE1BQU1DLElBQUksR0FBRyxFQUFiOztBQUVBLE1BQUlILEtBQUosRUFBVztBQUNURyxJQUFBQSxJQUFJLENBQUNDLElBQUwsT0FBQUQsSUFBSSxnSkFBU0gsS0FBVCxFQUFKO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsMEpBQWY7QUFBQSw0QkFDRTtBQUFBLDZCQUNFLDhEQUFDLDBFQUFEO0FBQ0UsaUJBQVMsRUFBQywrQ0FEWjtBQUVFLFdBQUcsRUFBRUgsSUFGUDtBQUdFLFdBQUcsRUFBRUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBUUU7QUFBSyxlQUFTLEVBQUMsb0NBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMseUJBQWQ7QUFBQSxtQkFDR0EsT0FESCxFQUVHRyxLQUFLLGlCQUNKO0FBQU0sbUJBQVMsRUFBQyx3RUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosRUFPR0MsUUFBUSxpQkFDUDtBQUFNLG1CQUFTLEVBQUMscUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBY0U7QUFBSSxpQkFBUyxFQUFDLGdDQUFkO0FBQUEsa0JBQWdEUjtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEYsZUFlRTtBQUFHLGlCQUFTLEVBQUMsZUFBYjtBQUFBLG1CQUNHLEdBREgsRUFFR04sNkNBQU0sQ0FBQ1csUUFBRCxDQUFOLENBQWlCTSxPQUFqQixFQUZILFlBRWtDVixRQUZsQyxZQUUrQ0MsUUFGL0MsRUFFeUQsR0FGekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUE0QkU7QUFBSyxlQUFTLEVBQUMsd0lBQWY7QUFBQSxnQkFDR08sSUFBSSxHQUNEQSxJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxHQUFEO0FBQUEsNEJBQ1A7QUFDRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1kLGNBQWMsQ0FBQ2MsR0FBRCxDQUFwQjtBQUFBLFdBRFg7QUFFRSxtQkFBUyxFQUFDLG9FQUZaO0FBQUEsb0JBS0dBO0FBTEgsV0FHT0EsR0FIUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURPO0FBQUEsT0FBVCxDQURDLEdBVUQ7QUFYTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNENELENBOUREOztLQUFNaEI7QUFnRU4sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Kb2JDb21wb25lbnQudHN4P2E2OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExhenlMb2FkSW1hZ2UgfSBmcm9tICdyZWFjdC1sYXp5LWxvYWQtaW1hZ2UtY29tcG9uZW50JztcbmltcG9ydCBqb2JUeXBlIGZyb20gJy4uL2xpYi90eXBlcy9qb2JUeXBlJztcblxuY29uc3QgSm9iQ29tcG9uZW50ID0gKGpvYjogam9iVHlwZSwgaGFuZGxlVGFnQ2xpY2spID0+IHtcbiAgY29uc3Qge1xuICAgIHBvc2l0aW9uLFxuICAgIGNvbnRyYWN0LFxuICAgIGxvY2F0aW9uLFxuICAgIGxvZ28sXG4gICAgY29tcGFueSxcbiAgICBwb3N0ZWRBdCxcbiAgICB0b29scyxcbiAgICBpc05ldyxcbiAgICBmZWF0dXJlZCxcbiAgfSA9IGpvYjtcbiAgY29uc3QgdGFncyA9IFtdO1xuXG4gIGlmICh0b29scykge1xuICAgIHRhZ3MucHVzaCguLi50b29scyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzaGFkb3ctbGcgbS00IHAtNiBteS0xNiBteC00IHJvdW5kZWQgJ2JvcmRlci1zb2xpZCBib3JkZXItdmFyaWFudC0xIGJvcmRlci1sLTggbGc6ZmxleC1yb3cgbGc6bXktNiBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDBcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMYXp5TG9hZEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPVwiLW10LTE2IG1iLTQgdy0yMCBoLTIwIGxnOnctMjQgbGc6aC0yNCBsZzpteS0wXCJcbiAgICAgICAgICBzcmM9e2xvZ299XG4gICAgICAgICAgYWx0PXtjb21wYW55fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIG1sLTRcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXRlYWwtNTAwXCI+XG4gICAgICAgICAge2NvbXBhbnl9XG4gICAgICAgICAge2lzTmV3ICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXRlYWwtNTAwIHRleHQtdGVhbC0xMDAgdGV4dC14cyB1cHBlcmNhc2UgbS0yIHB4LTIgcHktMSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgTmV3IVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2ZlYXR1cmVkICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHRleHQtd2hpdGUgdGV4dC14cyB1cHBlcmNhc2UgbS0wIHB4LTIgcHktMSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgRmVhdHVyZWRcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2gzPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbXktMiBsZzpteS0wXCI+e3Bvc2l0aW9ufTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIHttb21lbnQocG9zdGVkQXQpLmZyb21Ob3coKX0gwrcge2NvbnRyYWN0fSDCtyB7bG9jYXRpb259eycgJ31cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBtdC00IG14LTQgcHQtNCBib3JkZXItdCBib3JkZXItZ3JheS0zMDAgYm9yZGVyLXNvbGlkIGxnOm1sLWF1dG8gbGc6Ym9yZGVyLTAgbGc6bXQtMCBsZzpwdC0wXCI+XG4gICAgICAgIHt0YWdzXG4gICAgICAgICAgPyB0YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFnQ2xpY2sodGFnKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtNTAwIGJnLXRlYWwtMTAwIGZvbnQtYm9sZCBwci0zIHB5LTEgbWItNCByb3VuZGVkIGxnOm1iLTBcIlxuICAgICAgICAgICAgICAgIGtleT17dGFnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKb2JDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsibW9tZW50IiwiUmVhY3QiLCJMYXp5TG9hZEltYWdlIiwiSm9iQ29tcG9uZW50Iiwiam9iIiwiaGFuZGxlVGFnQ2xpY2siLCJwb3NpdGlvbiIsImNvbnRyYWN0IiwibG9jYXRpb24iLCJsb2dvIiwiY29tcGFueSIsInBvc3RlZEF0IiwidG9vbHMiLCJpc05ldyIsImZlYXR1cmVkIiwidGFncyIsInB1c2giLCJmcm9tTm93IiwibWFwIiwidGFnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/JobComponent.tsx\n");

/***/ })

});