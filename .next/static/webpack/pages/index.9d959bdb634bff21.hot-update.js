"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_todoAtom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/todoAtom */ \"./atoms/todoAtom.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Adjust path accordingly\n\n\nconst TodoList = ()=>{\n    _s();\n    const [todos, setTodos] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_atoms_todoAtom__WEBPACK_IMPORTED_MODULE_2__.todoListState);\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [priority, setPriority] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"); // State for error messages\n    // Load todos from localStorage on initial render\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const storedTodos = localStorage.getItem(\"todo-list\");\n        if (storedTodos) {\n            setTodos(JSON.parse(storedTodos));\n        }\n    }, [\n        setTodos\n    ]);\n    // Save todos to localStorage when they change\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        localStorage.setItem(\"todo-list\", JSON.stringify(todos));\n    }, [\n        todos\n    ]);\n    const addTodo = ()=>{\n        if (newTask.trim() === \"\") {\n            setErrorMessage(\"Task cannot be empty\");\n            return;\n        }\n        if (!date) {\n            setErrorMessage(\"Please select a date\");\n            return;\n        }\n        setTodos((prevTodos)=>[\n                ...prevTodos,\n                {\n                    task: newTask,\n                    description,\n                    date,\n                    priority,\n                    completed: false\n                }\n            ]);\n        // Clear inputs and error message\n        setNewTask(\"\");\n        setDescription(\"\");\n        setDate(\"\");\n        setPriority(\"\");\n        setErrorMessage(\"\");\n    };\n    const markAsCompleted = (index)=>{\n        setTodos((prevTodos)=>{\n            const newTodos = [\n                ...prevTodos\n            ];\n            newTodos[index] = {\n                ...newTodos[index],\n                completed: !newTodos[index].completed\n            };\n            return newTodos;\n        });\n    };\n    const editTask = (index)=>{\n        const task = todos[index];\n        setNewTask(task.task);\n        setDescription(task.description);\n        setDate(task.date);\n        setPriority(task.priority);\n        setEditIndex(index);\n    };\n    const deleteTask = (index)=>{\n        setTodos((prevTodos)=>prevTodos.filter((_, i)=>i !== index));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().todoContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, undefined),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                lineNumber: 81,\n                columnNumber: 30\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: newTask,\n                        onChange: (e)=>setNewTask(e.target.value),\n                        placeholder: \"Enter new task\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: description,\n                        onChange: (e)=>setDescription(e.target.value),\n                        placeholder: \"Enter description\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"date\",\n                        value: date,\n                        onChange: (e)=>setDate(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: priority,\n                        onChange: (e)=>setPriority(e.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select Priority\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"low\",\n                                children: \"Low\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"medium\",\n                                children: \"Medium\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"high\",\n                                children: \"High\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addTodo,\n                        disabled: !newTask || !date,\n                        children: \"Add Task\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: todo.completed ? (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().completed) : \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Task:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \",\n                                    todo.task\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Description:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \",\n                                    todo.description\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Date:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \",\n                                    todo.date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Priority:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \",\n                                    todo.priority\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().completeButton),\n                                onClick: ()=>markAsCompleted(index),\n                                children: \"Complete\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().completeButton),\n                                onClick: ()=>deleteTask(index),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().completeButton),\n                                onClick: ()=>deleteTask(index),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TodoList, \"nL7PgiYLRf+K7vT/6rkklJyg0LU=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState\n    ];\n});\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFROzs7Ozs7OzBDQUU3Qyw4REFBQzBDO2dDQUFPZixXQUFXckMsbUZBQXFCO2dDQUFFcUQsU0FBUyxJQUFNekIsZ0JBQWdCQzswQ0FBUTs7Ozs7OzBDQUNqRiw4REFBQ3VCO2dDQUFPZixXQUFXckMsbUZBQXFCO2dDQUFFcUQsU0FBUyxJQUFNckIsV0FBV0g7MENBQVE7Ozs7OzswQ0FDNUUsOERBQUN1QjtnQ0FBT2YsV0FBV3JDLG1GQUFxQjtnQ0FBRXFELFNBQVMsSUFBTXJCLFdBQVdIOzBDQUFROzs7Ozs7O3VCQWZ2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQjdCO0dBOUhNNUI7O1FBQ3dCTCxrREFBY0E7OztLQUR0Q0s7QUFnSU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/MWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjsgLy8gRW5zdXJlcyB0aGUgY29tcG9uZW50IHJ1bnMgb24gdGhlIGNsaWVudC1zaWRlXHJcblxyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XHJcbmltcG9ydCB7IHRvZG9MaXN0U3RhdGUgfSBmcm9tICcuLi9hdG9tcy90b2RvQXRvbSc7IC8vIEFkanVzdCBwYXRoIGFjY29yZGluZ2x5XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1RvZG9MaXN0Lm1vZHVsZS5jc3MnOyBcclxuXHJcbmNvbnN0IFRvZG9MaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VSZWNvaWxTdGF0ZSh0b2RvTGlzdFN0YXRlKTtcclxuICAgIGNvbnN0IFtuZXdUYXNrLCBzZXROZXdUYXNrXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwcmlvcml0eSwgc2V0UHJpb3JpdHldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2VkaXRJbmRleCwgc2V0RWRpdEluZGV4XSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTsgLy8gU3RhdGUgZm9yIGVycm9yIG1lc3NhZ2VzXHJcblxyXG4gICAgLy8gTG9hZCB0b2RvcyBmcm9tIGxvY2FsU3RvcmFnZSBvbiBpbml0aWFsIHJlbmRlclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzdG9yZWRUb2RvcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvLWxpc3QnKTtcclxuICAgICAgICBpZiAoc3RvcmVkVG9kb3MpIHtcclxuICAgICAgICAgICAgc2V0VG9kb3MoSlNPTi5wYXJzZShzdG9yZWRUb2RvcykpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXRUb2Rvc10pO1xyXG5cclxuICAgIC8vIFNhdmUgdG9kb3MgdG8gbG9jYWxTdG9yYWdlIHdoZW4gdGhleSBjaGFuZ2VcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XHJcbiAgICB9LCBbdG9kb3NdKTtcclxuXHJcbiAgICBjb25zdCBhZGRUb2RvID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXdUYXNrLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdUYXNrIGNhbm5vdCBiZSBlbXB0eScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGF0ZSkge1xyXG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1BsZWFzZSBzZWxlY3QgYSBkYXRlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRvZG9zKChwcmV2VG9kb3MpID0+IFtcclxuICAgICAgICAgICAgLi4ucHJldlRvZG9zLFxyXG4gICAgICAgICAgICB7IHRhc2s6IG5ld1Rhc2ssIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgY29tcGxldGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAvLyBDbGVhciBpbnB1dHMgYW5kIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICBzZXROZXdUYXNrKCcnKTtcclxuICAgICAgICBzZXREZXNjcmlwdGlvbignJyk7XHJcbiAgICAgICAgc2V0RGF0ZSgnJyk7XHJcbiAgICAgICAgc2V0UHJpb3JpdHkoJycpO1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1hcmtBc0NvbXBsZXRlZCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0VG9kb3MoKHByZXZUb2RvcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvcyA9IFsuLi5wcmV2VG9kb3NdO1xyXG4gICAgICAgICAgICBuZXdUb2Rvc1tpbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgLi4ubmV3VG9kb3NbaW5kZXhdLFxyXG4gICAgICAgICAgICAgIGNvbXBsZXRlZDogIW5ld1RvZG9zW2luZGV4XS5jb21wbGV0ZWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld1RvZG9zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBlZGl0VGFzaz0oaW5kZXg6IG51bWJlcikgPT57XHJcbiAgICAgICAgY29uc3QgdGFzayA9IHRvZG9zW2luZGV4XTtcclxuICAgICAgICBzZXROZXdUYXNrKHRhc2sudGFzayk7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24odGFzay5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgc2V0RGF0ZSh0YXNrLmRhdGUpO1xyXG4gICAgICAgIHNldFByaW9yaXR5KHRhc2sucHJpb3JpdHkpO1xyXG4gICAgICAgIHNldEVkaXRJbmRleChpbmRleCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRUb2RvcygocHJldlRvZG9zKSA9PiBwcmV2VG9kb3MuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VG9kbyBMaXN0PC9oMT5cclxuICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57ZXJyb3JNZXNzYWdlfTwvZGl2Pn0gey8qIERpc3BsYXkgZXJyb3IgbWVzc2FnZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdUYXNrfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1Rhc2soZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5ldyB0YXNrXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaW9yaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpb3JpdHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgUHJpb3JpdHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRvZG99IGRpc2FibGVkPXshbmV3VGFzayB8fCAhZGF0ZX0+QWRkIFRhc2s8L2J1dHRvbj4gey8qIERpc2FibGUgYnV0dG9uICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3RvZG9zLm1hcCgodG9kbywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXt0b2RvLmNvbXBsZXRlZCA/IHN0eWxlcy5jb21wbGV0ZWQgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRhc2s6PC9zdHJvbmc+IHt0b2RvLnRhc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EZXNjcmlwdGlvbjo8L3N0cm9uZz4ge3RvZG8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EYXRlOjwvc3Ryb25nPiB7dG9kby5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UHJpb3JpdHk6PC9zdHJvbmc+IHt0b2RvLnByaW9yaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wbGV0ZUJ1dHRvbn0gb25DbGljaz17KCkgPT4gbWFya0FzQ29tcGxldGVkKGluZGV4KX0+Q29tcGxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wbGV0ZUJ1dHRvbn0gb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayhpbmRleCl9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBsZXRlQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBkZWxldGVUYXNrKGluZGV4KX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xyXG4iXSwibmFtZXMiOlsidXNlUmVjb2lsU3RhdGUiLCJ0b2RvTGlzdFN0YXRlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJUb2RvTGlzdCIsInRvZG9zIiwic2V0VG9kb3MiLCJuZXdUYXNrIiwic2V0TmV3VGFzayIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJkYXRlIiwic2V0RGF0ZSIsInByaW9yaXR5Iiwic2V0UHJpb3JpdHkiLCJlZGl0SW5kZXgiLCJzZXRFZGl0SW5kZXgiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzdG9yZWRUb2RvcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9kbyIsInRyaW0iLCJwcmV2VG9kb3MiLCJ0YXNrIiwiY29tcGxldGVkIiwibWFya0FzQ29tcGxldGVkIiwiaW5kZXgiLCJuZXdUb2RvcyIsImVkaXRUYXNrIiwiZGVsZXRlVGFzayIsImZpbHRlciIsIl8iLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwidG9kb0NvbnRhaW5lciIsImgxIiwidGl0bGUiLCJlcnJvciIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwic2VsZWN0Iiwib3B0aW9uIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwidWwiLCJtYXAiLCJ0b2RvIiwibGkiLCJzdHJvbmciLCJjb21wbGV0ZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n"));

/***/ })

});