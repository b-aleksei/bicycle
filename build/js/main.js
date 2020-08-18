/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./js/modules/menu.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./js/modules/scroll.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_scroll__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/validate */ \"./js/modules/validate.js\");\n/* harmony import */ var _modules_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/button */ \"./js/modules/button.js\");\n/* harmony import */ var _modules_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_intersect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/intersect */ \"./js/modules/intersect.js\");\n/* harmony import */ var _modules_intersect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_intersect__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modules/button.js":
/*!******************************!*\
  !*** ./js/modules/button.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var addElement = function addElement(e) {\n  var button = e.currentTarget;\n  var el = e.currentTarget.lastElementChild;\n  var mValue = Math.max(button.clientWidth, button.clientHeight);\n  el.style.width = el.style.height = mValue + 'px';\n  el.classList.remove('pulse');\n  setTimeout(function () {\n    var rect = button.getBoundingClientRect();\n    el.style.left = e.clientX - rect.left - mValue / 2 + 'px';\n    el.style.top = e.clientY - rect.top - mValue / 2 + 'px';\n    el.classList.add('pulse');\n  });\n};\n\nvar buttons = document.querySelectorAll('button[data-pulse]');\n\nif (buttons.length) {\n  buttons.forEach(function (b) {\n    b.append(document.createElement('span'));\n    b.addEventListener('click', addElement);\n  });\n}\n\n//# sourceURL=webpack:///./js/modules/button.js?");

/***/ }),

/***/ "./js/modules/intersect.js":
/*!*********************************!*\
  !*** ./js/modules/intersect.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("try {\n  var options = {\n    rootMargin: '0px 0px -30px 0px'\n  };\n  var views = ['.form', '.about-us', '.variety', '.video', '.contact', 'footer'];\n\n  var handleChanges = function handleChanges(entries, observer) {\n    entries.forEach(function (el) {\n      if (el.isIntersecting) {\n        observer.unobserve(el.target);\n        el.target.classList.remove('op');\n        el.target.addEventListener('transitionend', function () {\n          el.target.classList.remove('tr');\n        }, {\n          once: true\n        });\n      }\n    });\n  };\n\n  var observer = new IntersectionObserver(handleChanges, options);\n  window.addEventListener('load', function () {\n    views.forEach(function (view) {\n      var target = document.querySelector(view);\n\n      if (target) {\n        target.classList.add('op', 'tr');\n        observer.observe(target);\n      }\n    });\n  });\n} catch (e) {// console.log(e);\n}\n\n//# sourceURL=webpack:///./js/modules/intersect.js?");

/***/ }),

/***/ "./js/modules/menu.js":
/*!****************************!*\
  !*** ./js/modules/menu.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// main menu opener\nvar navButton = document.querySelector('.nav__toggle');\nvar navMain = document.querySelector('.nav');\nvar isTablet = false;\n\nif (document.documentElement.clientWidth < 1024) {\n  isTablet = true;\n}\n\nif (navMain && navButton) {\n  navMain.classList.add('js-enable');\n\n  var openCloseMenu = function openCloseMenu() {\n    if (navButton.getAttribute('aria-expanded') === 'false') {\n      navButton.setAttribute('aria-expanded', 'true');\n      navMain.classList.add('nav--menu-active');\n      document.body.classList.add('body-lock');\n    } else {\n      navButton.setAttribute('aria-expanded', 'false');\n      navMain.classList.remove('nav--menu-active');\n      document.body.classList.remove('body-lock');\n    }\n  };\n\n  var closeMenu = function closeMenu() {\n    if (navMain.classList.contains('nav--menu-active')) {\n      openCloseMenu();\n    }\n  };\n\n  var links = navMain.querySelectorAll('.nav__link');\n\n  if (links) {\n    links.forEach(function (link) {\n      return link.addEventListener('click', closeMenu);\n    });\n  }\n\n  navButton.addEventListener('click', openCloseMenu);\n\n  window.onresize = function () {\n    if (document.documentElement.clientWidth >= 1024 && isTablet) {\n      navButton.setAttribute('aria-expanded', 'false');\n      navMain.classList.remove('nav--menu-active');\n      document.body.classList.remove('body-lock');\n      isTablet = false;\n    }\n\n    if (document.documentElement.clientWidth < 1024 && !isTablet) {\n      isTablet = true;\n    }\n  };\n}\n\n//# sourceURL=webpack:///./js/modules/menu.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (obj) {\n  var overlay = obj.overlay;\n  var classActive = obj.classActive;\n  var buttonsClose = obj.buttonsClose;\n\n  if (!overlay || !buttonsClose) {\n    return;\n  }\n\n  var body = document.body; // открытие модального окна\n\n  var openPopup = function openPopup() {\n    overlay.parentElement.classList.add(classActive);\n    document.addEventListener('keydown', onCloseModalKey);\n    overlay.addEventListener('mousedown', onCloseModalMouse);\n    body.dataset.scrollY = self.pageYOffset; // сохраним значение скролла\n\n    body.classList.add('body-lock', 'body-no-event');\n    body.style.top = -body.dataset.scrollY + 'px';\n  }; //  Обработчик на оверлее для закрытия попапа по клику на нем или на соотв. кнопки\n\n\n  var onCloseModalMouse = function onCloseModalMouse(e) {\n    e.stopPropagation();\n    var isButtonClose = Array.from(buttonsClose).some(function (button) {\n      return e.target === button;\n    });\n\n    if (e.target === e.currentTarget || isButtonClose) {\n      removeHandler();\n    }\n  };\n\n  var onCloseModalKey = function onCloseModalKey(e) {\n    if (e.key === 'Escape') {\n      removeHandler();\n    }\n  };\n\n  var removeHandler = function removeHandler() {\n    overlay.parentElement.classList.remove(classActive);\n    document.removeEventListener('keydown', onCloseModalKey);\n    overlay.removeEventListener('mousedown', onCloseModalMouse);\n    body.classList.remove('body-lock', 'body-no-event');\n    window.scrollTo(0, body.dataset.scrollY);\n  };\n\n  openPopup();\n});\n\n//# sourceURL=webpack:///./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/phoneMask.js":
/*!*********************************!*\
  !*** ./js/modules/phoneMask.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar COUNTRY_CODE = '+7';\n\nvar onInputPhoneInput = function onInputPhoneInput(_ref) {\n  var target = _ref.target;\n  var matrix = \"\".concat(COUNTRY_CODE, \" (___) ___ __ __\");\n  var def = matrix.replace(/\\D/g, '');\n  var i = 0;\n  var val = target.value.replace(/\\D/g, '');\n\n  if (!val.length) {\n    val = def;\n  }\n\n  target.value = '';\n  Array.from(matrix).forEach(function (item) {\n    var isValNumber = /[_\\d]/.test(item) && val.length > i;\n\n    if (isValNumber) {\n      target.value += val.charAt(i++);\n    } else {\n      target.value += val.length <= i ? '' : item;\n    }\n  });\n};\n\nvar onFocusPhoneInput = function onFocusPhoneInput(_ref2) {\n  var target = _ref2.target;\n\n  if (!target.value) {\n    target.value = COUNTRY_CODE;\n  }\n\n  target.addEventListener('input', onInputPhoneInput);\n  target.addEventListener('blur', onBlurPhoneInput);\n};\n\nvar onBlurPhoneInput = function onBlurPhoneInput(_ref3) {\n  var target = _ref3.target;\n\n  if (target.value === COUNTRY_CODE) {\n    target.value = '';\n  }\n\n  target.removeEventListener('input', onInputPhoneInput);\n  target.removeEventListener('blur', onBlurPhoneInput);\n};\n\nvar initPhoneMask = function initPhoneMask(input) {\n  input.addEventListener('focus', onFocusPhoneInput);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initPhoneMask);\n\n//# sourceURL=webpack:///./js/modules/phoneMask.js?");

/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var goToTarget = function goToTarget(target) {\n  // фолбэк для ie11\n  var y = target.offsetTop;\n\n  var moveTo = function moveTo() {\n    if (window.pageYOffset < y) {\n      window.scrollBy(0, 60);\n      setTimeout(moveTo);\n    }\n  };\n\n  moveTo();\n};\n\nvar makeSmoothScroll = function makeSmoothScroll(link) {\n  link.addEventListener('click', function (e) {\n    e.preventDefault();\n    var targetId = link.getAttribute('href');\n    var target = document.querySelector(targetId);\n\n    try {\n      if (target) {\n        if (!Promise) {\n          // примитивная проверка для ie 11\n          goToTarget(target);\n        } else {\n          target.scrollIntoView({\n            behavior: 'smooth',\n            block: 'start'\n          });\n        }\n      }\n    } catch (er) {// console.log(er);\n    }\n  });\n};\n\nvar links = document.querySelectorAll('.nav__link');\nlinks.forEach(function (link) {\n  return makeSmoothScroll(link);\n});\n\n//# sourceURL=webpack:///./js/modules/scroll.js?");

/***/ }),

/***/ "./js/modules/validate.js":
/*!********************************!*\
  !*** ./js/modules/validate.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _phoneMask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phoneMask */ \"./js/modules/phoneMask.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./js/modules/modal.js\");\n\n\nvar phoneInput = document.querySelector('input[name=phone]');\nvar regExpName = /^[\\s-]+$|^\\s*-+|[^A-Za-zА-Яа-я\\-.\\s']+/;\nvar forms = document.querySelectorAll('form');\nvar successSend = {\n  overlay: document.querySelector('.modal__wrap'),\n  classActive: 'modal--active',\n  buttonsClose: document.querySelectorAll('.modal__close')\n};\nvar signSuccess = '' + '<span class=\"form__input-valid\">' + '<svg width=\"20\" height=\"18\">' + '<use href=\"#tick\"></use>' + '</svg>' + '</span>';\n\nvar checkValue = function checkValue(e) {\n  var input = e.currentTarget;\n  input.setCustomValidity('');\n\n  if (input.name === 'name') {\n    if (regExpName.test(input.value)) {\n      input.setCustomValidity('Вы ввели недопустимый символ');\n    }\n  }\n\n  if (input.name === 'phone') {\n    var phoneLength = input.value.replace(/\\D/g, '').length;\n    var messageError = 'Длина номера менее 11 цифр, сейчас: ' + phoneLength;\n\n    if (phoneLength < 11) {\n      input.setCustomValidity(messageError);\n    }\n  }\n\n  checkValidity(input);\n};\n\nvar checkValidity = function checkValidity(input) {\n  if (!input.validity.valid) {\n    input.parentElement.classList.remove('form__valid');\n    input.parentElement.classList.add('form__invalid');\n  } else {\n    input.parentElement.classList.remove('form__invalid');\n    input.parentElement.classList.add('form__valid');\n  }\n}; // обработчик события focus на form\n\n\nvar onValidate = function onValidate(e) {\n  if (e.target.dataset.validate) {\n    e.target.addEventListener('input', checkValue);\n  }\n\n  e.currentTarget.addEventListener('focusout', deleteHandler);\n};\n\nvar deleteHandler = function deleteHandler(e) {\n  if (e.target.dataset.validate) {\n    e.target.removeEventListener('input', checkValue);\n  }\n\n  e.currentTarget.removeEventListener('focusout', deleteHandler);\n};\n\nvar onSubmit = function onSubmit(e) {\n  e.preventDefault();\n  var form = e.currentTarget;\n\n  for (var i = 0; i < form.elements.length; i++) {\n    var input = form.elements[i];\n\n    if (input.dataset.validate) {\n      localStorage.setItem(input.name, input.value);\n      input.parentElement.classList.remove('form__valid');\n    }\n  }\n\n  Object(_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(successSend);\n  setTimeout(function () {\n    form.reset();\n  });\n}; // валидация форм на главной странице\n\n\nforms.forEach(function (form) {\n  form.querySelectorAll('input').forEach(function (input) {\n    if (input.dataset.validate) {\n      var value = localStorage.getItem(input.name);\n\n      if (value) {\n        input.value = value;\n      }\n\n      input.parentElement.insertAdjacentHTML('afterbegin', signSuccess); // добавляет зеленую галочку если валидно\n    }\n  });\n  Object(_phoneMask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(phoneInput);\n  form.addEventListener('focusin', onValidate);\n  form.addEventListener('submit', onSubmit);\n});\n\n//# sourceURL=webpack:///./js/modules/validate.js?");

/***/ })

/******/ });