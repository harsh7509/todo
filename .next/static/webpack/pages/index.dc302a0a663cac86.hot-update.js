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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_todoAtom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/todoAtom */ \"./atoms/todoAtom.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Adjust path accordingly\n\n\nconst TodoList = ()=>{\n    _s();\n    const [todos, setTodos] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_atoms_todoAtom__WEBPACK_IMPORTED_MODULE_2__.todoListState);\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [priority, setPriority] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null); // Track the task being edited\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"); // State for error messages\n    // Load todos from localStorage on initial render\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const storedTodos = localStorage.getItem(\"todo-list\");\n        if (storedTodos) {\n            setTodos(JSON.parse(storedTodos));\n        }\n    }, [\n        setTodos\n    ]);\n    // Save todos to localStorage when they change\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        localStorage.setItem(\"todo-list\", JSON.stringify(todos));\n    }, [\n        todos\n    ]);\n    const addTodo = ()=>{\n        if (newTask.trim() === \"\") {\n            setErrorMessage(\"Task cannot be empty\");\n            return;\n        }\n        if (!date) {\n            setErrorMessage(\"Please select a date\");\n            return;\n        }\n        // Check if we're editing an existing task\n        if (editIndex !== null) {\n            // Update the task at the edit index\n            const updatedTodos = [\n                ...todos\n            ];\n            updatedTodos[editIndex] = {\n                task: newTask,\n                description,\n                date,\n                priority,\n                completed: todos[editIndex].completed\n            };\n            setTodos(updatedTodos);\n            setEditIndex(null); // Exit edit mode\n        } else {\n            // Add a new task\n            setTodos((prevTodos)=>[\n                    ...prevTodos,\n                    {\n                        task: newTask,\n                        description,\n                        date,\n                        priority,\n                        completed: false\n                    }\n                ]);\n        }\n        // Clear inputs and error message\n        setNewTask(\"\");\n        setDescription(\"\");\n        setDate(\"\");\n        setPriority(\"\");\n        setErrorMessage(\"\");\n    };\n    const markAsCompleted = (index)=>{\n        setTodos((prevTodos)=>{\n            const newTodos = [\n                ...prevTodos\n            ];\n            newTodos[index] = {\n                ...newTodos[index],\n                completed: !newTodos[index].completed\n            };\n            return newTodos;\n        });\n    };\n    const editTask = (index)=>{\n        const task = todos[index];\n        setNewTask(task.task);\n        setDescription(task.description);\n        setDate(task.date);\n        setPriority(task.priority);\n        setEditIndex(index); // Set the index to be edited\n    };\n    const deleteTask = (index)=>{\n        setTodos((prevTodos)=>prevTodos.filter((_, i)=>i !== index));\n        if (editIndex === index) {\n            // If the task being edited is deleted, reset the edit state\n            setEditIndex(null);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().todoContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                lineNumber: 100,\n                columnNumber: 30\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: newTask,\n                        onChange: (e)=>setNewTask(e.target.value),\n                        placeholder: \"Enter new task\",\n                        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: description,\n                        onChange: (e)=>setDescription(e.target.value),\n                        placeholder: \"Enter description\",\n                        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"date\",\n                        value: date,\n                        onChange: (e)=>setDate(e.target.value),\n                        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: priority,\n                        onChange: (e)=>setPriority(e.target.value),\n                        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select Priority\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"low\",\n                                children: \"Low\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"medium\",\n                                children: \"Medium\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"high\",\n                                children: \"High\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().addtask),\n                        onClick: addTodo,\n                        disabled: !newTask || !date,\n                        children: editIndex !== null ? \"Update Task\" : \"Add Task\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: todo.completed ? (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().completed) : \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Task:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                        lineNumber: 141,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \",\n                                    todo.task\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Description:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \",\n                                    todo.description\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Date:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \",\n                                    todo.date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 146,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Priority:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                        lineNumber: 150,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \",\n                                    todo.priority\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().completeButton),\n                                onClick: ()=>markAsCompleted(index),\n                                children: todo.completed ? \"Undo\" : \"Complete\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().completeButton),\n                                onClick: ()=>deleteTask(index),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().completeButton),\n                                onClick: ()=>editTask(index),\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 156,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                lineNumber: 137,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n        lineNumber: 98,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TodoList, \"nL7PgiYLRf+K7vT/6rkklJyg0LU=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState\n    ];\n});\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVNqQzt3QkFBU2tDLFVBQVUsQ0FBQ3JELFdBQVcsQ0FBQ0k7a0NBQ3ZFSSxjQUFjLE9BQU8sZ0JBQWdCOzs7Ozs7b0JBRWpDOzs7Ozs7OzBCQUViLDhEQUFDOEM7MEJBQ0l4RCxNQUFNeUQsR0FBRyxDQUFDLENBQUNDLE1BQU05QixzQkFDZCw4REFBQytCO3dCQUFldkIsV0FBV3NCLEtBQUtqQyxTQUFTLEdBQUczQiw4RUFBZ0IsR0FBRzs7MENBQzNELDhEQUFDcUM7O2tEQUNHLDhEQUFDeUI7a0RBQU87Ozs7OztvQ0FBYztvQ0FBRUYsS0FBS2xDLElBQUk7Ozs7Ozs7MENBRXJDLDhEQUFDVzs7a0RBQ0csOERBQUN5QjtrREFBTzs7Ozs7O29DQUFxQjtvQ0FBRUYsS0FBS3RELFdBQVc7Ozs7Ozs7MENBRW5ELDhEQUFDK0I7O2tEQUNHLDhEQUFDeUI7a0RBQU87Ozs7OztvQ0FBYztvQ0FBRUYsS0FBS3BELElBQUk7Ozs7Ozs7MENBRXJDLDhEQUFDNkI7O2tEQUNHLDhEQUFDeUI7a0RBQU87Ozs7OztvQ0FBa0I7b0NBQUVGLEtBQUtsRCxRQUFROzs7Ozs7OzBDQUU3Qyw4REFBQzRDO2dDQUFPaEIsV0FBV3RDLG1GQUFxQjtnQ0FBRXdELFNBQVMsSUFBTTNCLGdCQUFnQkM7MENBQ3BFOEIsS0FBS2pDLFNBQVMsR0FBRyxTQUFTOzs7Ozs7MENBRS9CLDhEQUFDMkI7Z0NBQU9oQixXQUFXdEMsbUZBQXFCO2dDQUFFd0QsU0FBUyxJQUFNdkIsV0FBV0g7MENBQVE7Ozs7OzswQ0FDNUUsOERBQUN3QjtnQ0FBT2hCLFdBQVd0QyxtRkFBcUI7Z0NBQUV3RCxTQUFTLElBQU14QixTQUFTRjswQ0FBUTs7Ozs7Ozt1QkFqQnJFQTs7Ozs7Ozs7Ozs7Ozs7OztBQXVCN0I7R0ExSk03Qjs7UUFDd0JMLGtEQUFjQTs7O0tBRHRDSztBQTRKTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeD8xYzhjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiOyAvLyBFbnN1cmVzIHRoZSBjb21wb25lbnQgcnVucyBvbiB0aGUgY2xpZW50LXNpZGVcclxuXHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgdG9kb0xpc3RTdGF0ZSB9IGZyb20gJy4uL2F0b21zL3RvZG9BdG9tJzsgLy8gQWRqdXN0IHBhdGggYWNjb3JkaW5nbHlcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVG9kb0xpc3QubW9kdWxlLmNzcyc7IFxyXG5cclxuY29uc3QgVG9kb0xpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVJlY29pbFN0YXRlKHRvZG9MaXN0U3RhdGUpO1xyXG4gICAgY29uc3QgW25ld1Rhc2ssIHNldE5ld1Rhc2tdID0gdXNlU3RhdGUoJycpOyBcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3ByaW9yaXR5LCBzZXRQcmlvcml0eV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZWRpdEluZGV4LCBzZXRFZGl0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7IC8vIFRyYWNrIHRoZSB0YXNrIGJlaW5nIGVkaXRlZFxyXG4gICAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTsgLy8gU3RhdGUgZm9yIGVycm9yIG1lc3NhZ2VzXHJcblxyXG4gICAgLy8gTG9hZCB0b2RvcyBmcm9tIGxvY2FsU3RvcmFnZSBvbiBpbml0aWFsIHJlbmRlclxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzdG9yZWRUb2RvcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvLWxpc3QnKTtcclxuICAgICAgICBpZiAoc3RvcmVkVG9kb3MpIHtcclxuICAgICAgICAgICAgc2V0VG9kb3MoSlNPTi5wYXJzZShzdG9yZWRUb2RvcykpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXRUb2Rvc10pO1xyXG5cclxuICAgIC8vIFNhdmUgdG9kb3MgdG8gbG9jYWxTdG9yYWdlIHdoZW4gdGhleSBjaGFuZ2VcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XHJcbiAgICB9LCBbdG9kb3NdKTtcclxuXHJcbiAgICBjb25zdCBhZGRUb2RvID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXdUYXNrLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdUYXNrIGNhbm5vdCBiZSBlbXB0eScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGF0ZSkge1xyXG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1BsZWFzZSBzZWxlY3QgYSBkYXRlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHdlJ3JlIGVkaXRpbmcgYW4gZXhpc3RpbmcgdGFza1xyXG4gICAgICAgIGlmIChlZGl0SW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSB0YXNrIGF0IHRoZSBlZGl0IGluZGV4XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvcyA9IFsuLi50b2Rvc107XHJcbiAgICAgICAgICAgIHVwZGF0ZWRUb2Rvc1tlZGl0SW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgdGFzazogbmV3VGFzayxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkOiB0b2Rvc1tlZGl0SW5kZXhdLmNvbXBsZXRlZCwgLy8gUHJlc2VydmUgdGhlIGNvbXBsZXRlZCBzdGF0dXNcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc2V0VG9kb3ModXBkYXRlZFRvZG9zKTtcclxuICAgICAgICAgICAgc2V0RWRpdEluZGV4KG51bGwpOyAvLyBFeGl0IGVkaXQgbW9kZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBhIG5ldyB0YXNrXHJcbiAgICAgICAgICAgIHNldFRvZG9zKChwcmV2VG9kb3MpID0+IFtcclxuICAgICAgICAgICAgICAgIC4uLnByZXZUb2RvcyxcclxuICAgICAgICAgICAgICAgIHsgdGFzazogbmV3VGFzaywgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgaW5wdXRzIGFuZCBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgc2V0TmV3VGFzaygnJyk7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oJycpO1xyXG4gICAgICAgIHNldERhdGUoJycpO1xyXG4gICAgICAgIHNldFByaW9yaXR5KCcnKTtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtYXJrQXNDb21wbGV0ZWQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFRvZG9zKChwcmV2VG9kb3MpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VG9kb3MgPSBbLi4ucHJldlRvZG9zXTtcclxuICAgICAgICAgICAgbmV3VG9kb3NbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgIC4uLm5ld1RvZG9zW2luZGV4XSxcclxuICAgICAgICAgICAgICBjb21wbGV0ZWQ6ICFuZXdUb2Rvc1tpbmRleF0uY29tcGxldGVkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdUb2RvcztcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZWRpdFRhc2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSB0b2Rvc1tpbmRleF07XHJcbiAgICAgICAgc2V0TmV3VGFzayh0YXNrLnRhc2spO1xyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKHRhc2suZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHNldERhdGUodGFzay5kYXRlKTtcclxuICAgICAgICBzZXRQcmlvcml0eSh0YXNrLnByaW9yaXR5KTtcclxuICAgICAgICBzZXRFZGl0SW5kZXgoaW5kZXgpOyAvLyBTZXQgdGhlIGluZGV4IHRvIGJlIGVkaXRlZFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBzZXRUb2RvcygocHJldlRvZG9zKSA9PiBwcmV2VG9kb3MuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCkpO1xyXG4gICAgICAgIGlmIChlZGl0SW5kZXggPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSB0YXNrIGJlaW5nIGVkaXRlZCBpcyBkZWxldGVkLCByZXNldCB0aGUgZWRpdCBzdGF0ZVxyXG4gICAgICAgICAgICBzZXRFZGl0SW5kZXgobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+VG9kbyBMaXN0PC9oMT5cclxuICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57ZXJyb3JNZXNzYWdlfTwvZGl2Pn0gey8qIERpc3BsYXkgZXJyb3IgbWVzc2FnZSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdUYXNrfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1Rhc2soZS50YXJnZXQudmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIG5ldyB0YXNrXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGaWVsZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGaWVsZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaW9yaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpb3JpdHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RmllbGR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBQcmlvcml0eTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkdGFza30gb25DbGljaz17YWRkVG9kb30gZGlzYWJsZWQ9eyFuZXdUYXNrIHx8ICFkYXRlfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZWRpdEluZGV4ICE9PSBudWxsID8gJ1VwZGF0ZSBUYXNrJyA6ICdBZGQgVGFzayd9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gey8qIENoYW5nZSBidXR0b24gdGV4dCBiYXNlZCBvbiBlZGl0IG1vZGUgKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3RvZG8uY29tcGxldGVkID8gc3R5bGVzLmNvbXBsZXRlZCA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VGFzazo8L3N0cm9uZz4ge3RvZG8udGFza31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRlc2NyaXB0aW9uOjwvc3Ryb25nPiB7dG9kby5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRhdGU6PC9zdHJvbmc+IHt0b2RvLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Qcmlvcml0eTo8L3N0cm9uZz4ge3RvZG8ucHJpb3JpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBsZXRlQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBtYXJrQXNDb21wbGV0ZWQoaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b2RvLmNvbXBsZXRlZCA/ICdVbmRvJyA6ICdDb21wbGV0ZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBsZXRlQnV0dG9ufSBvbkNsaWNrPXsoKSA9PiBkZWxldGVUYXNrKGluZGV4KX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGxldGVCdXR0b259IG9uQ2xpY2s9eygpID0+IGVkaXRUYXNrKGluZGV4KX0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZVJlY29pbFN0YXRlIiwidG9kb0xpc3RTdGF0ZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiVG9kb0xpc3QiLCJ0b2RvcyIsInNldFRvZG9zIiwibmV3VGFzayIsInNldE5ld1Rhc2siLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiZGF0ZSIsInNldERhdGUiLCJwcmlvcml0eSIsInNldFByaW9yaXR5IiwiZWRpdEluZGV4Iiwic2V0RWRpdEluZGV4IiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwic3RvcmVkVG9kb3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImFkZFRvZG8iLCJ0cmltIiwidXBkYXRlZFRvZG9zIiwidGFzayIsImNvbXBsZXRlZCIsInByZXZUb2RvcyIsIm1hcmtBc0NvbXBsZXRlZCIsImluZGV4IiwibmV3VG9kb3MiLCJlZGl0VGFzayIsImRlbGV0ZVRhc2siLCJmaWx0ZXIiLCJfIiwiaSIsImRpdiIsImNsYXNzTmFtZSIsInRvZG9Db250YWluZXIiLCJoMSIsInRpdGxlIiwiZXJyb3IiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImlucHV0RmllbGQiLCJzZWxlY3QiLCJvcHRpb24iLCJidXR0b24iLCJhZGR0YXNrIiwib25DbGljayIsImRpc2FibGVkIiwidWwiLCJtYXAiLCJ0b2RvIiwibGkiLCJzdHJvbmciLCJjb21wbGV0ZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n"));

/***/ })

});