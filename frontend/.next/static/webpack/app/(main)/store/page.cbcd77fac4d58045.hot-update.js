"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(main)/store/page",{

/***/ "(app-client)/./src/lib/config.ts":
/*!***************************!*\
  !*** ./src/lib/config.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MEDUSA_BACKEND_URL: function() { return /* binding */ MEDUSA_BACKEND_URL; },\n/* harmony export */   medusaClient: function() { return /* binding */ medusaClient; },\n/* harmony export */   queryClient: function() { return /* binding */ queryClient; }\n/* harmony export */ });\n/* harmony import */ var _medusajs_medusa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @medusajs/medusa-js */ \"(app-client)/./node_modules/@medusajs/medusa-js/dist/index.mjs\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-client)/./node_modules/@tanstack/query-core/build/lib/queryClient.mjs\");\n\n\n// Defaults to standard port for Medusa server\nlet MEDUSA_BACKEND_URL = \"http://localhost:9000\";\nif (false) {}\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient({\n    defaultOptions: {\n        queries: {\n            refetchOnWindowFocus: false,\n            staleTime: 1000 * 60 * 60 * 24,\n            retry: 1\n        }\n    }\n});\nconst medusaClient = new _medusajs_medusa_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    baseUrl: MEDUSA_BACKEND_URL,\n    maxRetries: 3\n});\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2xpYi9jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFDVztBQUVwRCw4Q0FBOEM7QUFDOUMsSUFBSUUscUJBQXFCO0FBRXpCLElBQUlDLEtBQTBDRSxFQUFFLEVBRS9DO0FBRUQsTUFBTUMsY0FBYyxJQUFJTCw4REFBV0EsQ0FBQztJQUNsQ00sZ0JBQWdCO1FBQ2RDLFNBQVM7WUFDUEMsc0JBQXNCO1lBQ3RCQyxXQUFXLE9BQU8sS0FBSyxLQUFLO1lBQzVCQyxPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsTUFBTUMsZUFBZSxJQUFJWiwyREFBTUEsQ0FBQztJQUFFYSxTQUFTWDtJQUFvQlksWUFBWTtBQUFFO0FBRXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvY29uZmlnLnRzP2EzZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZHVzYSBmcm9tIFwiQG1lZHVzYWpzL21lZHVzYS1qc1wiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5cbi8vIERlZmF1bHRzIHRvIHN0YW5kYXJkIHBvcnQgZm9yIE1lZHVzYSBzZXJ2ZXJcbmxldCBNRURVU0FfQkFDS0VORF9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMFwiO1xuXG5pZiAocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUVEVVNBX0JBQ0tFTkRfVVJMKSB7XG4gIE1FRFVTQV9CQUNLRU5EX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FRFVTQV9CQUNLRU5EX1VSTDtcbn1cblxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xuICBkZWZhdWx0T3B0aW9uczoge1xuICAgIHF1ZXJpZXM6IHtcbiAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICAgIHN0YWxlVGltZTogMTAwMCAqIDYwICogNjAgKiAyNCxcbiAgICAgIHJldHJ5OiAxLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgbWVkdXNhQ2xpZW50ID0gbmV3IE1lZHVzYSh7IGJhc2VVcmw6IE1FRFVTQV9CQUNLRU5EX1VSTCwgbWF4UmV0cmllczogMyB9KTtcblxuZXhwb3J0IHsgTUVEVVNBX0JBQ0tFTkRfVVJMLCBxdWVyeUNsaWVudCwgbWVkdXNhQ2xpZW50IH07XG4iXSwibmFtZXMiOlsiTWVkdXNhIiwiUXVlcnlDbGllbnQiLCJNRURVU0FfQkFDS0VORF9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTUVEVVNBX0JBQ0tFTkRfVVJMIiwicXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsInN0YWxlVGltZSIsInJldHJ5IiwibWVkdXNhQ2xpZW50IiwiYmFzZVVybCIsIm1heFJldHJpZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/lib/config.ts\n"));

/***/ })

});