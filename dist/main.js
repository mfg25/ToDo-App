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

/***/ "./src/components/header/header.css":
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/components/header/header.css?");

/***/ }),

/***/ "./src/components/mainContent/loadMainContent.css":
/*!********************************************************!*\
  !*** ./src/components/mainContent/loadMainContent.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/components/mainContent/loadMainContent.css?");

/***/ }),

/***/ "./src/components/mainContent/todoInput/todoInput.css":
/*!************************************************************!*\
  !*** ./src/components/mainContent/todoInput/todoInput.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/components/mainContent/todoInput/todoInput.css?");

/***/ }),

/***/ "./src/components/menu/add/popUp.css":
/*!*******************************************!*\
  !*** ./src/components/menu/add/popUp.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/components/menu/add/popUp.css?");

/***/ }),

/***/ "./src/components/menu/menu.css":
/*!**************************************!*\
  !*** ./src/components/menu/menu.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/components/menu/menu.css?");

/***/ }),

/***/ "./src/pressets.css":
/*!**************************!*\
  !*** ./src/pressets.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo/./src/pressets.css?");

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.css */ \"./src/components/header/header.css\");\n/* harmony import */ var _check_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check.png */ \"./src/components/header/check.png\");\n\r\n\r\n\r\nfunction Heading(){\r\n    let headerElement = document.createElement('header')\r\n    headerElement.id = 'header'\r\n    //\r\n    let burguerButtonContainer = document.createElement('div')\r\n    let burguerButton = document.createElement('div')\r\n    burguerButtonContainer.id = 'burguer-button-container'\r\n    burguerButton.id = 'burguer-button'\r\n    //\r\n    let pageTitle = document.createElement('h2')\r\n    pageTitle.id = 'page-title'\r\n    pageTitle.innerText = 'ToDo App'\r\n\r\n    let checkmark = document.createElement('img')\r\n    checkmark.src = _check_png__WEBPACK_IMPORTED_MODULE_1__\r\n    checkmark.id = 'checkmark'\r\n\r\n\r\n    burguerButtonContainer.appendChild(burguerButton)\r\n    headerElement.appendChild(burguerButtonContainer)\r\n    headerElement.appendChild(pageTitle)\r\n    headerElement.appendChild(checkmark)\r\n\r\n    return headerElement\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n//# sourceURL=webpack://todo/./src/components/header/header.js?");

/***/ }),

/***/ "./src/components/mainContent/loadMainContent.js":
/*!*******************************************************!*\
  !*** ./src/components/mainContent/loadMainContent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadMainContent_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadMainContent.css */ \"./src/components/mainContent/loadMainContent.css\");\n/* harmony import */ var _loadTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadTodos */ \"./src/components/mainContent/loadTodos.js\");\n/* harmony import */ var _todoInput_todoInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoInput/todoInput.js */ \"./src/components/mainContent/todoInput/todoInput.js\");\n/* harmony import */ var _trash_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trash.png */ \"./src/components/mainContent/trash.png\");\n\r\n\r\n\r\n\r\n\r\nfunction loadMainContent(contentName){\r\n\r\n    let usuarios = new Array()  \r\n    if(document.getElementById('modalAddButton')){\r\n        document.getElementById('modalAddButton').remove()\r\n    }\r\n    if(localStorage.hasOwnProperty(\"usuarios\")){\r\n        usuarios = JSON.parse(localStorage.getItem(\"usuarios\"))\r\n    }\r\n    if(contentName == 'All' ||contentName == 'Important' || contentName == 'Completed'){\r\n        document.getElementById('main-content').innerHTML = `\r\n        <div id=\"title-add-container\">\r\n            <div id=\"type-selected-container\"><h3>${contentName}</h3></div>\r\n        </div>`\r\n    }else{\r\n        document.getElementById('main-content').innerHTML = `\r\n        <div id=\"title-add-container\">\r\n            <div id=\"type-selected-container\"><h3>${contentName}</h3></div>\r\n        </div>\r\n        <button id=\"addTodo\">+</button>`\r\n    }\r\n    \r\n    let allTodosContainer = document.createElement('div')\r\n    allTodosContainer.id = 'all-todos-container'\r\n    document.getElementById('title-add-container').appendChild(allTodosContainer)\r\n    let currentPage = contentName\r\n    \r\n    for(let obj in usuarios){\r\n        let item = JSON.parse(localStorage.getItem('usuarios'))\r\n        if(currentPage == 'All'){\r\n            (0,_loadTodos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allTodosContainer, item, obj)\r\n        }\r\n        else if(currentPage == 'Important' && item[obj].importantValue){\r\n            (0,_loadTodos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allTodosContainer, item, obj)\r\n        }\r\n        else if(item[obj].contentName == currentPage){\r\n            (0,_loadTodos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allTodosContainer, item, obj)\r\n        }else if(currentPage == 'Completed' && item[obj].taskCompleted){\r\n            (0,_loadTodos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allTodosContainer, item, obj)\r\n        }\r\n    }\r\n\r\n    //////////////\r\n    let popUp = new _todoInput_todoInput_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\r\n    document.querySelector('body').appendChild(popUp)\r\n    let addTodoButton = document.getElementById('addTodo')\r\n    addTodoButton.addEventListener('click', () => {\r\n        popUp.classList.add('mostrar')\r\n    })\r\n    let closeButton = popUp.firstChild.children[0];\r\n    let submitTodoButton = popUp.children[0].children[2].children[5]\r\n    closeButton.addEventListener(\"click\", () =>{\r\n        popUp.classList.remove('mostrar')\r\n   });\r\n    \r\n    //////////////\r\n    submitTodoButton.addEventListener('click', (e) =>{\r\n        e.preventDefault()\r\n\r\n        let titleValue = document.getElementById('todoTitle').value\r\n        \r\n        let dateValue = document.getElementById('date').value\r\n\r\n        let importantValue = document.getElementById('important-checkbox').checked\r\n\r\n        \r\n\r\n        if(localStorage.hasOwnProperty(\"usuarios\")){\r\n            usuarios = JSON.parse(localStorage.getItem(\"usuarios\"))\r\n        }\r\n        usuarios.push({titleValue, dateValue, importantValue, contentName, taskCompleted: false})\r\n\r\n        localStorage.setItem(\"usuarios\", JSON.stringify(usuarios))\r\n        popUp.classList.remove('mostrar')\r\n        popUp.remove()\r\n        loadMainContent(contentName)\r\n        \r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMainContent);\n\n//# sourceURL=webpack://todo/./src/components/mainContent/loadMainContent.js?");

/***/ }),

/***/ "./src/components/mainContent/loadTodos.js":
/*!*************************************************!*\
  !*** ./src/components/mainContent/loadTodos.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadTodos)\n/* harmony export */ });\n/* harmony import */ var _trash_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trash.png */ \"./src/components/mainContent/trash.png\");\n/* harmony import */ var _menu_savedTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/savedTasks.js */ \"./src/components/menu/savedTasks.js\");\n\r\n\r\n\r\nfunction loadTodos(allTodosContainer, item, obj){\r\n    let toDoContainer = document.createElement('div')\r\n    toDoContainer.classList.add('ToDo-container')\r\n    let titleTodo = document.createElement('p')\r\n    titleTodo.innerHTML = `${item[obj].titleValue}`\r\n    let dateDeleteCheckedDiv = document.createElement('div')\r\n    dateDeleteCheckedDiv.id = 'date-delete-checked-container'\r\n    let dateText = document.createElement('p')\r\n    dateText.innerHTML = `${item[obj].dateValue}`\r\n    let checkboxFinished = document.createElement('input')\r\n    checkboxFinished.type = 'checkbox'\r\n    checkboxFinished.id = 'checkbox'\r\n    if(item[obj].taskCompleted){\r\n        checkboxFinished.setAttribute('checked', 'checked')\r\n    }\r\n    let trashCanImg = document.createElement('img')\r\n    trashCanImg.id = 'delete'\r\n    trashCanImg.src = _trash_png__WEBPACK_IMPORTED_MODULE_0__\r\n    dateDeleteCheckedDiv.appendChild(dateText)\r\n    dateDeleteCheckedDiv.appendChild(checkboxFinished)\r\n    dateDeleteCheckedDiv.appendChild(trashCanImg)\r\n    toDoContainer.appendChild(titleTodo)\r\n    toDoContainer.appendChild(dateDeleteCheckedDiv)\r\n    allTodosContainer.appendChild(toDoContainer)   \r\n\r\n    trashCanImg.addEventListener('click', ()=>{\r\n        trashCanImg.parentElement.parentElement.remove()\r\n        ;(0,_menu_savedTasks_js__WEBPACK_IMPORTED_MODULE_1__.removeTask)(trashCanImg.parentElement.parentElement.firstChild.innerHTML, trashCanImg.parentElement.firstChild.innerHTML)\r\n    })\r\n    checkboxFinished.addEventListener('click', () =>{\r\n        ;(0,_menu_savedTasks_js__WEBPACK_IMPORTED_MODULE_1__.toggleCompleted)(checkboxFinished.parentElement.parentElement.firstChild.innerHTML, checkboxFinished.parentElement.firstChild.innerHTML)\r\n        if(checkboxFinished.classList.contains('completedTask')){\r\n            checkboxFinished.classList.remove('completedTask')\r\n        }else{\r\n            checkboxFinished.classList.add('completedTask')\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://todo/./src/components/mainContent/loadTodos.js?");

/***/ }),

/***/ "./src/components/mainContent/todoInput/todoInput.js":
/*!***********************************************************!*\
  !*** ./src/components/mainContent/todoInput/todoInput.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoInput_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoInput.css */ \"./src/components/mainContent/todoInput/todoInput.css\");\n\r\n\r\nfunction addTodoPopUp(){\r\n    let modalContainer = document.createElement('div')\r\n    modalContainer.classList.add('modal-container')\r\n    modalContainer.id = 'modalAddButton'\r\n    modalContainer.innerHTML = `<div class=\"todo-form\">\r\n    <button id=\"close\">X</button>\r\n      <h2 id=\"todo-form-title\">New ToDo</h2>\r\n      <form action=\"\" id=\"form\">\r\n        <label for=\"todoTitle\" class=\"label\">ToDo:</label>\r\n        <input\r\n          type=\"text\"\r\n          id=\"todoTitle\"\r\n          placeholder=\"What to do?\"\r\n          required\r\n          maxlength=\"100s\"\r\n        />\r\n        <label for=\"date\">Date:</label>\r\n        <input type=\"date\" id=\"date\" />\r\n        <div id=\"container-important\">\r\n          <label for=\"important-checkbox\">Important</label>\r\n          <input type=\"checkbox\" id=\"important-checkbox\" />\r\n        </div>\r\n        <button type=\"submit\" id=\"submitButton\">Submit</button>\r\n      </form>\r\n  </div>`\r\n\r\n    return modalContainer\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodoPopUp);\n\n//# sourceURL=webpack://todo/./src/components/mainContent/todoInput/todoInput.js?");

/***/ }),

/***/ "./src/components/menu/add/addButton.js":
/*!**********************************************!*\
  !*** ./src/components/menu/add/addButton.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUp.js */ \"./src/components/menu/add/popUp.js\");\n\r\n\r\nfunction createButton(personalTasksContainer){\r\n    let divAdd = document.createElement('div')\r\n    divAdd.innerText = 'add'\r\n    divAdd.id = 'add'\r\n\r\n    let popUp = new _popUp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](personalTasksContainer)\r\n    document.querySelector('body').appendChild(popUp)\r\n    divAdd.addEventListener(\"click\", () =>{\r\n        popUp.classList.add('mostrar')\r\n    });\r\n\r\n    let closeButton = popUp.firstChild.children[0];\r\n\r\n    closeButton.addEventListener(\"click\", () =>{\r\n        popUp.classList.remove('mostrar')\r\n    });\r\n    \r\n    return divAdd\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createButton);\n\n//# sourceURL=webpack://todo/./src/components/menu/add/addButton.js?");

/***/ }),

/***/ "./src/components/menu/add/popUp.js":
/*!******************************************!*\
  !*** ./src/components/menu/add/popUp.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popUp_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUp.css */ \"./src/components/menu/add/popUp.css\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks */ \"./src/components/menu/tasks.js\");\n/* harmony import */ var _savedTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../savedTasks */ \"./src/components/menu/savedTasks.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createPopUp(personalTasksContainer){\r\n    let modalContainer = document.createElement('div')\r\n    modalContainer.classList.add('modal-container')\r\n    modalContainer.innerHTML = `<div class=\"form\">\r\n    <button id=\"close\">X</button>\r\n    <h2 id=\"form-title\">New project</h2>\r\n    <form action=\"\">\r\n      <label for=\"projectName\" class=\"label\">Name</label>\r\n      <input\r\n        type=\"text\"\r\n        id=\"projectName\"\r\n        placeholder=\"Project name\"\r\n        required\r\n        maxlength=\"20s\"\r\n      />\r\n      <button type=\"submit\" id=\"submitButton\" value=\"Submit\">Submit</button>\r\n    </form>\r\n  </div>`\r\n\r\n    //get input value\r\n    let submitButton = modalContainer.firstChild.children[2].children[2]\r\n    submitButton.addEventListener(\"click\", (e) =>{\r\n        e.preventDefault()\r\n        let name = document.getElementById('projectName')\r\n        let nameValue = name.value\r\n        if(nameValue.length != 0){\r\n            modalContainer.classList.remove('mostrar')\r\n            ;(0,_savedTasks__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(nameValue)\r\n            ;(0,_tasks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(nameValue, personalTasksContainer)\r\n        }\r\n    });\r\n\r\n\r\n  return modalContainer\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPopUp);\n\n//# sourceURL=webpack://todo/./src/components/menu/add/popUp.js?");

/***/ }),

/***/ "./src/components/menu/menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.js */ \"./src/components/menu/tasks.js\");\n/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.css */ \"./src/components/menu/menu.css\");\n/* harmony import */ var _add_popUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add/popUp.js */ \"./src/components/menu/add/popUp.js\");\n/* harmony import */ var _add_addButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/addButton.js */ \"./src/components/menu/add/addButton.js\");\n/* harmony import */ var _savedTasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./savedTasks.js */ \"./src/components/menu/savedTasks.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createMenu(){\r\n    let menuSection = document.createElement('section')\r\n    menuSection.id = 'menu'\r\n\r\n    //button menu slider\r\n\r\n\r\n\r\n    //Creating home text\r\n\r\n    let homeContainer = document.createElement('div')\r\n    homeContainer.id = 'home'\r\n    let homeText = document.createElement('p')\r\n    homeText.innerText = 'Home'\r\n\r\n    homeContainer.appendChild(homeText)\r\n    menuSection.appendChild(homeContainer)\r\n\r\n    \r\n\r\n    //Creating default tasks\r\n\r\n    let mainTasksContainer = document.createElement('div')\r\n    mainTasksContainer.id = 'main-tasks'\r\n    \r\n    let allTasks = new _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('All', mainTasksContainer)\r\n\r\n    let importantTasks = new _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Important', mainTasksContainer)\r\n\r\n    let completedTasks = new _tasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Completed', mainTasksContainer)\r\n    \r\n\r\n    menuSection.appendChild(mainTasksContainer)\r\n\r\n    //Creating personal tasks text\r\n\r\n    let projectsContainer = document.createElement('div')\r\n    projectsContainer.id = 'container-title'\r\n    let projectsTitle = document.createElement('div')\r\n    projectsTitle.id = 'projects-title'\r\n    menuSection.appendChild(projectsContainer)\r\n\r\n    //personal tasks container\r\n    let personalTasksContainer = document.createElement('div')\r\n    personalTasksContainer.id = 'personal-tasks'\r\n    menuSection.appendChild(personalTasksContainer)\r\n\r\n    //add button and popUp\r\n    let divAdd = new _add_addButton_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](personalTasksContainer)\r\n    let projectsText = document.createElement('p')\r\n    projectsText.innerText = 'Projects'\r\n\r\n    projectsTitle.appendChild(projectsText)\r\n    projectsContainer.appendChild(projectsTitle)\r\n    projectsContainer.appendChild(divAdd)\r\n    \r\n    //burguer button \r\n    document.getElementById('burguer-button-container').addEventListener('click', () =>{\r\n        menuSection.classList.toggle('active')\r\n    })\r\n    \r\n    //\r\n    ;(0,_savedTasks_js__WEBPACK_IMPORTED_MODULE_4__.showSavedTasks)(personalTasksContainer)\r\n\r\n    \r\n    return menuSection\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://todo/./src/components/menu/menu.js?");

/***/ }),

/***/ "./src/components/menu/savedTasks.js":
/*!*******************************************!*\
  !*** ./src/components/menu/savedTasks.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ saveTask),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"showSavedTasks\": () => (/* binding */ showSavedTasks),\n/* harmony export */   \"toggleCompleted\": () => (/* binding */ toggleCompleted)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/components/menu/tasks.js\");\n\r\n\r\nfunction saveTask(taskName){\r\n    let savedTasks = new Array()\r\n\r\n    if(localStorage.hasOwnProperty(\"savedTasks\")){\r\n        savedTasks = JSON.parse(localStorage.getItem(\"savedTasks\"))\r\n    }\r\n\r\n    console.log(savedTasks)\r\n\r\n    savedTasks.push(taskName)\r\n    localStorage.setItem(\"savedTasks\", JSON.stringify(savedTasks))\r\n\r\n    return savedTasks\r\n}\r\n\r\nfunction removeTask(taskName, taskDate){\r\n    let usuarios = new Array\r\n\r\n    usuarios = JSON.parse(localStorage.getItem(\"usuarios\"))\r\n\r\n    usuarios = usuarios.filter(function(item) {\r\n        return item.titleValue !== taskName && item.dateValue !== taskDate;\r\n    });\r\n    localStorage.setItem(\"usuarios\", JSON.stringify(usuarios))\r\n    \r\n}\r\n\r\nfunction showSavedTasks(personalTasksContainer){\r\n    let savedTasks = new Array()\r\n    if(localStorage.hasOwnProperty(\"savedTasks\")){\r\n        savedTasks = JSON.parse(localStorage.getItem(\"savedTasks\"))\r\n    }\r\n    for(let obj in savedTasks){\r\n        (0,_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(savedTasks[obj], personalTasksContainer)\r\n    }\r\n}\r\n\r\nfunction toggleCompleted(taskName, taskDate){\r\n    let usuarios = new Array\r\n\r\n    usuarios = JSON.parse(localStorage.getItem(\"usuarios\"))\r\n    \r\n    usuarios.forEach(element => {\r\n        if(element.titleValue == taskName && element.dateValue == taskDate){\r\n            if(element.taskCompleted == true){\r\n                element.taskCompleted = false\r\n            }else{\r\n                element.taskCompleted = true\r\n            }\r\n        }\r\n    });\r\n\r\n    localStorage.setItem(\"usuarios\", JSON.stringify(usuarios))\r\n}\n\n//# sourceURL=webpack://todo/./src/components/menu/savedTasks.js?");

/***/ }),

/***/ "./src/components/menu/tasks.js":
/*!**************************************!*\
  !*** ./src/components/menu/tasks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mainContent_loadMainContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mainContent/loadMainContent.js */ \"./src/components/mainContent/loadMainContent.js\");\n\r\n\r\nfunction createTasks(text, selectedContainer){\r\n    let div = document.createElement('div')\r\n    div.classList.add(\"tasks\");\r\n\r\n    let divText = document.createElement('p')\r\n    divText.innerText = `${text}`\r\n    div.appendChild(divText)\r\n        \r\n    selectedContainer.appendChild(div)\r\n\r\n\r\n    //active class \r\n    div.addEventListener('click', () =>{\r\n        for (let i = 0; i <  document.getElementById('main-tasks').childNodes.length; i++) {\r\n            document.getElementById('main-tasks').childNodes[i].classList.remove('active');\r\n        }\r\n        for (let i = 0; i <  document.getElementById('personal-tasks').childNodes.length; i++) {\r\n            document.getElementById('personal-tasks').childNodes[i].classList.remove('active');\r\n        }\r\n        div.classList.add('active')\r\n        ;(0,_mainContent_loadMainContent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(text)\r\n    })\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTasks);\n\n//# sourceURL=webpack://todo/./src/components/menu/tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pressets_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pressets.css */ \"./src/pressets.css\");\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.js */ \"./src/components/header/header.js\");\n/* harmony import */ var _components_menu_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.js */ \"./src/components/menu/menu.js\");\n\r\n\r\n\r\n\r\nloadPage()\r\n\r\nfunction loadPage(){\r\n    let header = new _components_header_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n    document.getElementById('content').appendChild(header)\r\n\r\n    let main = document.createElement('main')\r\n    document.getElementById('content').appendChild(main)\r\n\r\n    let menu = new _components_menu_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\r\n    main.appendChild(menu)\r\n\r\n    let pageContent = document.createElement('section')\r\n    pageContent.id = 'main-content'\r\n    main.appendChild(pageContent)\r\n    \r\n}\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/components/header/check.png":
/*!*****************************************!*\
  !*** ./src/components/header/check.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e95abe0870091376d0e.png\";\n\n//# sourceURL=webpack://todo/./src/components/header/check.png?");

/***/ }),

/***/ "./src/components/mainContent/trash.png":
/*!**********************************************!*\
  !*** ./src/components/mainContent/trash.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"23d539070761edd071d5.png\";\n\n//# sourceURL=webpack://todo/./src/components/mainContent/trash.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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