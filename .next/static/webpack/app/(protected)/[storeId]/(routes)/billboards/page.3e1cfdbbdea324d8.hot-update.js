"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(protected)/[storeId]/(routes)/billboards/page",{

/***/ "(app-pages-browser)/./src/app/(protected)/[storeId]/(routes)/billboards/components/BillBoardTable.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/app/(protected)/[storeId]/(routes)/billboards/components/BillBoardTable.tsx ***!
  \*****************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst columns = [\n    {\n        field: \"label\",\n        headerName: \"Label\",\n        width: 70\n    },\n    {\n        field: \"daye\",\n        headerName: \"Date\",\n        width: 130,\n        valueGetter: (params)=>\"\".concat(params.row.firstName || \"\", \" \").concat(params.row.lastName || \"\")\n    },\n    {\n        field: \"lastName\",\n        headerName: \"Last name\",\n        width: 130\n    },\n    {\n        field: \"age\",\n        headerName: \"Age\",\n        type: \"number\",\n        width: 90\n    },\n    {\n        field: \"fullName\",\n        headerName: \"Full name\",\n        description: \"This column has a value getter and is not sortable.\",\n        sortable: false,\n        width: 160\n    }\n];\nconst rows = [\n    {\n        id: 1,\n        lastName: \"Snow\",\n        firstName: \"Jon\",\n        age: 35\n    },\n    {\n        id: 2,\n        lastName: \"Lannister\",\n        firstName: \"Cersei\",\n        age: 42\n    },\n    {\n        id: 3,\n        lastName: \"Lannister\",\n        firstName: \"Jaime\",\n        age: 45\n    },\n    {\n        id: 4,\n        lastName: \"Stark\",\n        firstName: \"Arya\",\n        age: 16\n    },\n    {\n        id: 5,\n        lastName: \"Targaryen\",\n        firstName: \"Daenerys\",\n        age: null\n    },\n    {\n        id: 6,\n        lastName: \"Melisandre\",\n        firstName: null,\n        age: 150\n    },\n    {\n        id: 7,\n        lastName: \"Clifford\",\n        firstName: \"Ferrara\",\n        age: 44\n    },\n    {\n        id: 8,\n        lastName: \"Frances\",\n        firstName: \"Rossini\",\n        age: 36\n    },\n    {\n        id: 9,\n        lastName: \"Roxie\",\n        firstName: \"Harvey\",\n        age: 65\n    }\n];\nconst BillBoardTable = (param)=>{\n    let { data } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            height: 400,\n            width: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__.DataGrid, {\n            rows: rows,\n            columns: columns,\n            initialState: {\n                pagination: {\n                    paginationModel: {\n                        page: 0,\n                        pageSize: 5\n                    }\n                }\n            },\n            pageSizeOptions: [\n                5,\n                10\n            ],\n            checkboxSelection: true\n        }, void 0, false, {\n            fileName: \"/Users/ankit/Documents/projects/personal/next-js/ecommerce/admin-ui/src/app/(protected)/[storeId]/(routes)/billboards/components/BillBoardTable.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ankit/Documents/projects/personal/next-js/ecommerce/admin-ui/src/app/(protected)/[storeId]/(routes)/billboards/components/BillBoardTable.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BillBoardTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BillBoardTable);\nvar _c;\n$RefreshReg$(_c, \"BillBoardTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKHByb3RlY3RlZCkvW3N0b3JlSWRdLyhyb3V0ZXMpL2JpbGxib2FyZHMvY29tcG9uZW50cy9CaWxsQm9hcmRUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRStCO0FBQ2dEO0FBRy9FLE1BQU1FLFVBQXdCO0lBQzVCO1FBQUVDLE9BQU87UUFBU0MsWUFBWTtRQUFTQyxPQUFPO0lBQUc7SUFDakQ7UUFDRUYsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLE9BQU87UUFDUEMsYUFBYSxDQUFDQyxTQUNaLEdBQWlDQSxPQUE5QkEsT0FBT0MsR0FBRyxDQUFDQyxTQUFTLElBQUksSUFBRyxLQUE2QixPQUExQkYsT0FBT0MsR0FBRyxDQUFDRSxRQUFRLElBQUk7SUFDNUQ7SUFDQTtRQUFFUCxPQUFPO1FBQVlDLFlBQVk7UUFBYUMsT0FBTztJQUFJO0lBQ3pEO1FBQ0VGLE9BQU87UUFDUEMsWUFBWTtRQUNaTyxNQUFNO1FBQ05OLE9BQU87SUFDVDtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsWUFBWTtRQUNaUSxhQUFhO1FBQ2JDLFVBQVU7UUFDVlIsT0FBTztJQUNUO0NBQ0Q7QUFFRCxNQUFNUyxPQUFPO0lBQ1g7UUFBRUMsSUFBSTtRQUFHTCxVQUFVO1FBQVFELFdBQVc7UUFBT08sS0FBSztJQUFHO0lBQ3JEO1FBQUVELElBQUk7UUFBR0wsVUFBVTtRQUFhRCxXQUFXO1FBQVVPLEtBQUs7SUFBRztJQUM3RDtRQUFFRCxJQUFJO1FBQUdMLFVBQVU7UUFBYUQsV0FBVztRQUFTTyxLQUFLO0lBQUc7SUFDNUQ7UUFBRUQsSUFBSTtRQUFHTCxVQUFVO1FBQVNELFdBQVc7UUFBUU8sS0FBSztJQUFHO0lBQ3ZEO1FBQUVELElBQUk7UUFBR0wsVUFBVTtRQUFhRCxXQUFXO1FBQVlPLEtBQUs7SUFBSztJQUNqRTtRQUFFRCxJQUFJO1FBQUdMLFVBQVU7UUFBY0QsV0FBVztRQUFNTyxLQUFLO0lBQUk7SUFDM0Q7UUFBRUQsSUFBSTtRQUFHTCxVQUFVO1FBQVlELFdBQVc7UUFBV08sS0FBSztJQUFHO0lBQzdEO1FBQUVELElBQUk7UUFBR0wsVUFBVTtRQUFXRCxXQUFXO1FBQVdPLEtBQUs7SUFBRztJQUM1RDtRQUFFRCxJQUFJO1FBQUdMLFVBQVU7UUFBU0QsV0FBVztRQUFVTyxLQUFLO0lBQUc7Q0FDMUQ7QUFNRCxNQUFNQyxpQkFBaUI7UUFBQyxFQUFFQyxJQUFJLEVBQXVCO0lBQ25ELHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPO1lBQUVDLFFBQVE7WUFBS2hCLE9BQU87UUFBTztrQkFDdkMsNEVBQUNKLHNEQUFRQTtZQUNQYSxNQUFNQTtZQUNOWixTQUFTQTtZQUNUb0IsY0FBYztnQkFDWkMsWUFBWTtvQkFDVkMsaUJBQWlCO3dCQUFFQyxNQUFNO3dCQUFHQyxVQUFVO29CQUFFO2dCQUMxQztZQUNGO1lBQ0FDLGlCQUFpQjtnQkFBQztnQkFBRzthQUFHO1lBQ3hCQyxpQkFBaUI7Ozs7Ozs7Ozs7O0FBSXpCO0tBaEJNWDtBQWtCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhwcm90ZWN0ZWQpL1tzdG9yZUlkXS8ocm91dGVzKS9iaWxsYm9hcmRzL2NvbXBvbmVudHMvQmlsbEJvYXJkVGFibGUudHN4PzQ0ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRDb2xEZWYsIEdyaWRWYWx1ZUdldHRlclBhcmFtcyB9IGZyb20gXCJAbXVpL3gtZGF0YS1ncmlkXCI7XG5pbXBvcnQgeyBCaWxsYm9hcmQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgY29sdW1uczogR3JpZENvbERlZltdID0gW1xuICB7IGZpZWxkOiBcImxhYmVsXCIsIGhlYWRlck5hbWU6IFwiTGFiZWxcIiwgd2lkdGg6IDcwIH0sXG4gIHtcbiAgICBmaWVsZDogXCJkYXllXCIsXG4gICAgaGVhZGVyTmFtZTogXCJEYXRlXCIsXG4gICAgd2lkdGg6IDEzMCxcbiAgICB2YWx1ZUdldHRlcjogKHBhcmFtczogR3JpZFZhbHVlR2V0dGVyUGFyYW1zKSA9PlxuICAgICAgYCR7cGFyYW1zLnJvdy5maXJzdE5hbWUgfHwgXCJcIn0gJHtwYXJhbXMucm93Lmxhc3ROYW1lIHx8IFwiXCJ9YCxcbiAgfSxcbiAgeyBmaWVsZDogXCJsYXN0TmFtZVwiLCBoZWFkZXJOYW1lOiBcIkxhc3QgbmFtZVwiLCB3aWR0aDogMTMwIH0sXG4gIHtcbiAgICBmaWVsZDogXCJhZ2VcIixcbiAgICBoZWFkZXJOYW1lOiBcIkFnZVwiLFxuICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgd2lkdGg6IDkwLFxuICB9LFxuICB7XG4gICAgZmllbGQ6IFwiZnVsbE5hbWVcIixcbiAgICBoZWFkZXJOYW1lOiBcIkZ1bGwgbmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgY29sdW1uIGhhcyBhIHZhbHVlIGdldHRlciBhbmQgaXMgbm90IHNvcnRhYmxlLlwiLFxuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICB3aWR0aDogMTYwLFxuICB9LFxuXTtcblxuY29uc3Qgcm93cyA9IFtcbiAgeyBpZDogMSwgbGFzdE5hbWU6IFwiU25vd1wiLCBmaXJzdE5hbWU6IFwiSm9uXCIsIGFnZTogMzUgfSxcbiAgeyBpZDogMiwgbGFzdE5hbWU6IFwiTGFubmlzdGVyXCIsIGZpcnN0TmFtZTogXCJDZXJzZWlcIiwgYWdlOiA0MiB9LFxuICB7IGlkOiAzLCBsYXN0TmFtZTogXCJMYW5uaXN0ZXJcIiwgZmlyc3ROYW1lOiBcIkphaW1lXCIsIGFnZTogNDUgfSxcbiAgeyBpZDogNCwgbGFzdE5hbWU6IFwiU3RhcmtcIiwgZmlyc3ROYW1lOiBcIkFyeWFcIiwgYWdlOiAxNiB9LFxuICB7IGlkOiA1LCBsYXN0TmFtZTogXCJUYXJnYXJ5ZW5cIiwgZmlyc3ROYW1lOiBcIkRhZW5lcnlzXCIsIGFnZTogbnVsbCB9LFxuICB7IGlkOiA2LCBsYXN0TmFtZTogXCJNZWxpc2FuZHJlXCIsIGZpcnN0TmFtZTogbnVsbCwgYWdlOiAxNTAgfSxcbiAgeyBpZDogNywgbGFzdE5hbWU6IFwiQ2xpZmZvcmRcIiwgZmlyc3ROYW1lOiBcIkZlcnJhcmFcIiwgYWdlOiA0NCB9LFxuICB7IGlkOiA4LCBsYXN0TmFtZTogXCJGcmFuY2VzXCIsIGZpcnN0TmFtZTogXCJSb3NzaW5pXCIsIGFnZTogMzYgfSxcbiAgeyBpZDogOSwgbGFzdE5hbWU6IFwiUm94aWVcIiwgZmlyc3ROYW1lOiBcIkhhcnZleVwiLCBhZ2U6IDY1IH0sXG5dO1xuXG5pbnRlcmZhY2UgQmlsbEJvYXJkVGFibGVQcm9wcyB7XG4gIGRhdGE6IEJpbGxib2FyZFtdO1xufVxuXG5jb25zdCBCaWxsQm9hcmRUYWJsZSA9ICh7IGRhdGEgfTogQmlsbEJvYXJkVGFibGVQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA0MDAsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgIDxEYXRhR3JpZFxuICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBpbml0aWFsU3RhdGU9e3tcbiAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICBwYWdpbmF0aW9uTW9kZWw6IHsgcGFnZTogMCwgcGFnZVNpemU6IDUgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICBwYWdlU2l6ZU9wdGlvbnM9e1s1LCAxMF19XG4gICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmlsbEJvYXJkVGFibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEYXRhR3JpZCIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ3aWR0aCIsInZhbHVlR2V0dGVyIiwicGFyYW1zIiwicm93IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJzb3J0YWJsZSIsInJvd3MiLCJpZCIsImFnZSIsIkJpbGxCb2FyZFRhYmxlIiwiZGF0YSIsImRpdiIsInN0eWxlIiwiaGVpZ2h0IiwiaW5pdGlhbFN0YXRlIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25Nb2RlbCIsInBhZ2UiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsImNoZWNrYm94U2VsZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(protected)/[storeId]/(routes)/billboards/components/BillBoardTable.tsx\n"));

/***/ })

});