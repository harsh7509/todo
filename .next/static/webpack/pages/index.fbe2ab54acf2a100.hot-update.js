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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_todoAtom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/todoAtom */ \"./atoms/todoAtom.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/TodoList.module.css */ \"./styles/TodoList.module.css\");\n/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Adjust path accordingly\n\n\nconst TodoList = ()=>{\n    _s();\n    const [todos, setTodos] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_atoms_todoAtom__WEBPACK_IMPORTED_MODULE_2__.todoListState);\n    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [priority, setPriority] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null); // Track the task being edited\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"); // State for error messages\n    // Load todos from localStorage on initial render\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const storedTodos = localStorage.getItem(\"todo-list\");\n        if (storedTodos) {\n            setTodos(JSON.parse(storedTodos));\n        }\n    }, [\n        setTodos\n    ]);\n    // Save todos to localStorage when they change\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        localStorage.setItem(\"todo-list\", JSON.stringify(todos));\n    }, [\n        todos\n    ]);\n    const addTodo = ()=>{\n        if (newTask.trim() === \"\") {\n            setErrorMessage(\"Task cannot be empty\");\n            return;\n        }\n        if (!date) {\n            setErrorMessage(\"Please select a date\");\n            return;\n        }\n        // Check if we're editing an existing task\n        if (editIndex !== null) {\n            // Update the task at the edit index\n            const updatedTodos = [\n                ...todos\n            ];\n            updatedTodos[editIndex] = {\n                task: newTask,\n                description,\n                date,\n                priority,\n                completed: todos[editIndex].completed\n            };\n            setTodos(updatedTodos);\n            setEditIndex(null); // Exit edit mode\n        } else {\n            // Add a new task\n            setTodos((prevTodos)=>[\n                    ...prevTodos,\n                    {\n                        task: newTask,\n                        description,\n                        date,\n                        priority,\n                        completed: false\n                    }\n                ]);\n        }\n        // Clear inputs and error message\n        setNewTask(\"\");\n        setDescription(\"\");\n        setDate(\"\");\n        setPriority(\"\");\n        setErrorMessage(\"\");\n    };\n    const markAsCompleted = (index)=>{\n        setTodos((prevTodos)=>{\n            const newTodos = [\n                ...prevTodos\n            ];\n            newTodos[index] = {\n                ...newTodos[index],\n                completed: !newTodos[index].completed\n            };\n            return newTodos;\n        });\n    };\n    const editTask = (index)=>{\n        const task = todos[index];\n        setNewTask(task.task);\n        setDescription(task.description);\n        setDate(task.date);\n        setPriority(task.priority);\n        setEditIndex(index); // Set the index to be edited\n    };\n    const deleteTask = (index)=>{\n        setTodos((prevTodos)=>prevTodos.filter((_, i)=>i !== index));\n        if (editIndex === index) {\n            // If the task being edited is deleted, reset the edit state\n            setEditIndex(null);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().todoContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                children: \"Todo List\"\n            }, void 0, false, {\n                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n                children: errorMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                lineNumber: 100,\n                columnNumber: 30\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: newTask,\n                        onChange: (e)=>setNewTask(e.target.value),\n                        placeholder: \"Enter new task\",\n                        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: description,\n                        onChange: (e)=>setDescription(e.target.value),\n                        placeholder: \"Enter description\",\n                        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"date\",\n                        value: date,\n                        onChange: (e)=>setDate(e.target.value),\n                        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: priority,\n                        onChange: (e)=>setPriority(e.target.value),\n                        className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputField),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select Priority\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"low\",\n                                children: \"Low\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"medium\",\n                                children: \"Medium\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"high\",\n                                children: \"High\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        idName: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().addtask),\n                        onClick: addTodo,\n                        disabled: !newTask || !date,\n                        children: editIndex !== null ? \"Update Task\" : \"Add Task\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: todo.completed ? (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().completed) : \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Task:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                        lineNumber: 141,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \",\n                                    todo.task\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 140,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Description:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \",\n                                    todo.description\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 143,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Date:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \",\n                                    todo.date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 146,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Priority:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                        lineNumber: 150,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \",\n                                    todo.priority\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 149,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().completeButton),\n                                onClick: ()=>markAsCompleted(index),\n                                children: todo.completed ? \"Undo\" : \"Complete\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().completeButton),\n                                onClick: ()=>deleteTask(index),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 155,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().completeButton),\n                                onClick: ()=>editTask(index),\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                                lineNumber: 156,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 139,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n                lineNumber: 137,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\mern stack projects\\\\todo-recoil\\\\components\\\\TodoList.tsx\",\n        lineNumber: 98,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TodoList, \"nL7PgiYLRf+K7vT/6rkklJyg0LU=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState\n    ];\n});\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U2xDO3dCQUFTbUMsVUFBVSxDQUFDdEQsV0FBVyxDQUFDSTtrQ0FDcEVJLGNBQWMsT0FBTyxnQkFBZ0I7Ozs7OztvQkFFakM7Ozs7Ozs7MEJBRWIsOERBQUMrQzswQkFDSXpELE1BQU0wRCxHQUFHLENBQUMsQ0FBQ0MsTUFBTS9CLHNCQUNkLDhEQUFDZ0M7d0JBQWV4QixXQUFXdUIsS0FBS2xDLFNBQVMsR0FBRzNCLDhFQUFnQixHQUFHOzswQ0FDM0QsOERBQUNxQzs7a0RBQ0csOERBQUMwQjtrREFBTzs7Ozs7O29DQUFjO29DQUFFRixLQUFLbkMsSUFBSTs7Ozs7OzswQ0FFckMsOERBQUNXOztrREFDRyw4REFBQzBCO2tEQUFPOzs7Ozs7b0NBQXFCO29DQUFFRixLQUFLdkQsV0FBVzs7Ozs7OzswQ0FFbkQsOERBQUMrQjs7a0RBQ0csOERBQUMwQjtrREFBTzs7Ozs7O29DQUFjO29DQUFFRixLQUFLckQsSUFBSTs7Ozs7OzswQ0FFckMsOERBQUM2Qjs7a0RBQ0csOERBQUMwQjtrREFBTzs7Ozs7O29DQUFrQjtvQ0FBRUYsS0FBS25ELFFBQVE7Ozs7Ozs7MENBRTdDLDhEQUFDNEM7Z0NBQU9oQixXQUFXdEMsbUZBQXFCO2dDQUFFeUQsU0FBUyxJQUFNNUIsZ0JBQWdCQzswQ0FDcEUrQixLQUFLbEMsU0FBUyxHQUFHLFNBQVM7Ozs7OzswQ0FFL0IsOERBQUMyQjtnQ0FBT2hCLFdBQVd0QyxtRkFBcUI7Z0NBQUV5RCxTQUFTLElBQU14QixXQUFXSDswQ0FBUTs7Ozs7OzBDQUM1RSw4REFBQ3dCO2dDQUFPaEIsV0FBV3RDLG1GQUFxQjtnQ0FBRXlELFNBQVMsSUFBTXpCLFNBQVNGOzBDQUFROzs7Ozs7O3VCQWpCckVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBdUI3QjtHQTFKTTdCOztRQUN3Qkwsa0RBQWNBOzs7S0FEdENLO0FBNEpOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4PzFjOGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IC8vIEVuc3VyZXMgdGhlIGNvbXBvbmVudCBydW5zIG9uIHRoZSBjbGllbnQtc2lkZVxyXG5cclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyB0b2RvTGlzdFN0YXRlIH0gZnJvbSAnLi4vYXRvbXMvdG9kb0F0b20nOyAvLyBBZGp1c3QgcGF0aCBhY2NvcmRpbmdseVxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ub2RvTGlzdC5tb2R1bGUuY3NzJzsgXHJcblxyXG5jb25zdCBUb2RvTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlUmVjb2lsU3RhdGUodG9kb0xpc3RTdGF0ZSk7XHJcbiAgICBjb25zdCBbbmV3VGFzaywgc2V0TmV3VGFza10gPSB1c2VTdGF0ZSgnJyk7IFxyXG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcHJpb3JpdHksIHNldFByaW9yaXR5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlZGl0SW5kZXgsIHNldEVkaXRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTsgLy8gVHJhY2sgdGhlIHRhc2sgYmVpbmcgZWRpdGVkXHJcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpOyAvLyBTdGF0ZSBmb3IgZXJyb3IgbWVzc2FnZXNcclxuXHJcbiAgICAvLyBMb2FkIHRvZG9zIGZyb20gbG9jYWxTdG9yYWdlIG9uIGluaXRpYWwgcmVuZGVyXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlZFRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8tbGlzdCcpO1xyXG4gICAgICAgIGlmIChzdG9yZWRUb2Rvcykge1xyXG4gICAgICAgICAgICBzZXRUb2RvcyhKU09OLnBhcnNlKHN0b3JlZFRvZG9zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NldFRvZG9zXSk7XHJcblxyXG4gICAgLy8gU2F2ZSB0b2RvcyB0byBsb2NhbFN0b3JhZ2Ugd2hlbiB0aGV5IGNoYW5nZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kby1saXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcclxuICAgIH0sIFt0b2Rvc10pO1xyXG5cclxuICAgIGNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG5ld1Rhc2sudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1Rhc2sgY2Fubm90IGJlIGVtcHR5Jyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnUGxlYXNlIHNlbGVjdCBhIGRhdGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UncmUgZWRpdGluZyBhbiBleGlzdGluZyB0YXNrXHJcbiAgICAgICAgaWYgKGVkaXRJbmRleCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHRhc2sgYXQgdGhlIGVkaXQgaW5kZXhcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFRvZG9zID0gWy4uLnRvZG9zXTtcclxuICAgICAgICAgICAgdXBkYXRlZFRvZG9zW2VkaXRJbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrOiBuZXdUYXNrLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IHRvZG9zW2VkaXRJbmRleF0uY29tcGxldGVkLCAvLyBQcmVzZXJ2ZSB0aGUgY29tcGxldGVkIHN0YXR1c1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzZXRUb2Rvcyh1cGRhdGVkVG9kb3MpO1xyXG4gICAgICAgICAgICBzZXRFZGl0SW5kZXgobnVsbCk7IC8vIEV4aXQgZWRpdCBtb2RlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQWRkIGEgbmV3IHRhc2tcclxuICAgICAgICAgICAgc2V0VG9kb3MoKHByZXZUb2RvcykgPT4gW1xyXG4gICAgICAgICAgICAgICAgLi4ucHJldlRvZG9zLFxyXG4gICAgICAgICAgICAgICAgeyB0YXNrOiBuZXdUYXNrLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbGVhciBpbnB1dHMgYW5kIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICBzZXROZXdUYXNrKCcnKTtcclxuICAgICAgICBzZXREZXNjcmlwdGlvbignJyk7XHJcbiAgICAgICAgc2V0RGF0ZSgnJyk7XHJcbiAgICAgICAgc2V0UHJpb3JpdHkoJycpO1xyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG1hcmtBc0NvbXBsZXRlZCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0VG9kb3MoKHByZXZUb2RvcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUb2RvcyA9IFsuLi5wcmV2VG9kb3NdO1xyXG4gICAgICAgICAgICBuZXdUb2Rvc1tpbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgLi4ubmV3VG9kb3NbaW5kZXhdLFxyXG4gICAgICAgICAgICAgIGNvbXBsZXRlZDogIW5ld1RvZG9zW2luZGV4XS5jb21wbGV0ZWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld1RvZG9zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBlZGl0VGFzayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IHRvZG9zW2luZGV4XTtcclxuICAgICAgICBzZXROZXdUYXNrKHRhc2sudGFzayk7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24odGFzay5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgc2V0RGF0ZSh0YXNrLmRhdGUpO1xyXG4gICAgICAgIHNldFByaW9yaXR5KHRhc2sucHJpb3JpdHkpO1xyXG4gICAgICAgIHNldEVkaXRJbmRleChpbmRleCk7IC8vIFNldCB0aGUgaW5kZXggdG8gYmUgZWRpdGVkXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHNldFRvZG9zKChwcmV2VG9kb3MpID0+IHByZXZUb2Rvcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KSk7XHJcbiAgICAgICAgaWYgKGVkaXRJbmRleCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIHRhc2sgYmVpbmcgZWRpdGVkIGlzIGRlbGV0ZWQsIHJlc2V0IHRoZSBlZGl0IHN0YXRlXHJcbiAgICAgICAgICAgIHNldEVkaXRJbmRleChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b2RvQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Ub2RvIExpc3Q8L2gxPlxyXG4gICAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PntlcnJvck1lc3NhZ2V9PC9kaXY+fSB7LyogRGlzcGxheSBlcnJvciBtZXNzYWdlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld1Rhc2t9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VGFzayhlLnRhcmdldC52YWx1ZSl9IFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHRhc2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgICBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpb3JpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmlvcml0eShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRGaWVsZH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFByaW9yaXR5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZE5hbWU9e3N0eWxlcy5hZGR0YXNrfSBvbkNsaWNrPXthZGRUb2RvfSBkaXNhYmxlZD17IW5ld1Rhc2sgfHwgIWRhdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlZGl0SW5kZXggIT09IG51bGwgPyAnVXBkYXRlIFRhc2snIDogJ0FkZCBUYXNrJ31cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiB7LyogQ2hhbmdlIGJ1dHRvbiB0ZXh0IGJhc2VkIG9uIGVkaXQgbW9kZSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT17dG9kby5jb21wbGV0ZWQgPyBzdHlsZXMuY29tcGxldGVkIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5UYXNrOjwvc3Ryb25nPiB7dG9kby50YXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+IHt0b2RvLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGF0ZTo8L3N0cm9uZz4ge3RvZG8uZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlByaW9yaXR5Ojwvc3Ryb25nPiB7dG9kby5wcmlvcml0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGxldGVCdXR0b259IG9uQ2xpY2s9eygpID0+IG1hcmtBc0NvbXBsZXRlZChpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvZG8uY29tcGxldGVkID8gJ1VuZG8nIDogJ0NvbXBsZXRlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY29tcGxldGVCdXR0b259IG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRhc2soaW5kZXgpfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jb21wbGV0ZUJ1dHRvbn0gb25DbGljaz17KCkgPT4gZWRpdFRhc2soaW5kZXgpfT5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xyXG4iXSwibmFtZXMiOlsidXNlUmVjb2lsU3RhdGUiLCJ0b2RvTGlzdFN0YXRlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJUb2RvTGlzdCIsInRvZG9zIiwic2V0VG9kb3MiLCJuZXdUYXNrIiwic2V0TmV3VGFzayIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJkYXRlIiwic2V0RGF0ZSIsInByaW9yaXR5Iiwic2V0UHJpb3JpdHkiLCJlZGl0SW5kZXgiLCJzZXRFZGl0SW5kZXgiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzdG9yZWRUb2RvcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWRkVG9kbyIsInRyaW0iLCJ1cGRhdGVkVG9kb3MiLCJ0YXNrIiwiY29tcGxldGVkIiwicHJldlRvZG9zIiwibWFya0FzQ29tcGxldGVkIiwiaW5kZXgiLCJuZXdUb2RvcyIsImVkaXRUYXNrIiwiZGVsZXRlVGFzayIsImZpbHRlciIsIl8iLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwidG9kb0NvbnRhaW5lciIsImgxIiwidGl0bGUiLCJlcnJvciIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiaW5wdXRGaWVsZCIsInNlbGVjdCIsIm9wdGlvbiIsImJ1dHRvbiIsImlkTmFtZSIsImFkZHRhc2siLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJ1bCIsIm1hcCIsInRvZG8iLCJsaSIsInN0cm9uZyIsImNvbXBsZXRlQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n"));

/***/ })

});