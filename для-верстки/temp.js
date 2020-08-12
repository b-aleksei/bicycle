"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var START_INDEX = 4;
var FIRST_NUMBER = '7';
var substrateThree = '___';
var substrateTwo = '__';
var delimiter = ' ';
var regExp = /^7? ?\(?(\d{0,3})\)? ?(\d{0,3})-?(\d{0,2})-?(\d{0,2})/;
var regE = /7.*/;
var pln = /(?:\d\D*)$/g; // позиция последней цифры

var controlKeys = ['Tab', 'ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'];
var forms = document.querySelectorAll('form');
var successSend = {
  overlay: document.querySelector('.modal'),
  classHidden: 'modal--invisible',
  buttonsClose: document.querySelectorAll('.modal__close')
};
var signSuccess = "\n<span class=\"form__input-valid\">\n  <svg width=\"20\" height=\"18\">\n    <use href=\"img/sprite_auto.svg#tick\"></use>\n  </svg>\n</span>";

var enterPhoneValue = function enterPhoneValue(e) {
  var _this = this;

  var isControlKey = controlKeys.some(function (key) {
    return e.key === key;
  });

  if (!e.ctrlKey && !isControlKey) {
    var cursor = this.selectionStart = this.selectionEnd;
    setTimeout(function () {
      var number = _this.value.match(regE) || [FIRST_NUMBER];
      var arr = Array.from(number[0]);
      var str = arr.filter(function (item) {
        return /\d/.test(item);
      });
      str = str.join('').slice(0, 11);
      _this.value = str.replace(regExp, function (m, p1, p2, p3, p4) {
        return '+' + FIRST_NUMBER + ' (' + (p1 + substrateThree).slice(0, substrateThree.length) + ') ' + (p2 + substrateThree).slice(0, substrateThree.length) + delimiter + (p3 + substrateTwo).slice(0, substrateTwo.length) + delimiter + (p4 + substrateTwo).slice(0, substrateTwo.length);
      }); // управление курсором

      var search = _this.value.search(pln);

      _this.selectionStart = _this.selectionEnd = e.key === 'Delete' ? cursor : search + 1;

      if (cursor < START_INDEX) {
        _this.selectionStart = _this.selectionEnd = START_INDEX;
      }

      checkValidity.call(_this);
    }, 1);
  }
};

var checkValidity = function checkValidity() {
  if (!this.validity.valid) {
    this.parentElement.classList.remove('form__valid');
    this.parentElement.classList.add('form__invalid');
  } else {
    this.parentElement.classList.remove('form__invalid');
    this.parentElement.classList.add('form__valid');
  }
}; // обработчик события focus на form


var onValidate = function onValidate(e) {
  if (e.target.name === 'phone') {
    e.target.addEventListener('keydown', enterPhoneValue);
  }

  if (e.target.name === 'name') {
    e.target.addEventListener('input', checkValidity);
  }

  this.addEventListener('focusout', deleteHandler);
};

var deleteHandler = function deleteHandler(e) {
  if (e.target.name === 'phone') {
    e.target.removeEventListener('keydown', enterPhoneValue);
  }

  if (e.target.name === 'name') {
    e.target.removeEventListener('input', checkValidity);
  }

  this.removeEventListener('focusout', deleteHandler);
};

var onSubmit = function onSubmit(e) {
  var _this2 = this;

  e.preventDefault();

  var _iterator = _createForOfIteratorHelper(this.elements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var input = _step.value;

      if (input.dataset.validate) {
        localStorage.setItem(input.name, input.value);
        input.parentElement.classList.remove('form__valid');
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  setTimeout(function () {
    return _this2.reset();
  });
  openClosePopup(successSend);
}; // валидация форм на главной странице


forms.forEach(function (form) {
  var _iterator2 = _createForOfIteratorHelper(form.elements),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var input = _step2.value;

      if (input.dataset.validate) {
        input.value = localStorage.getItem(input.name);
        input.parentElement.insertAdjacentHTML('afterbegin', signSuccess); // добавляет зеленую галочку если валидно
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  form.addEventListener('focusin', onValidate);
  form.addEventListener('submit', onSubmit);
});

var openClosePopup = function openClosePopup(obj) {
  var overlay = obj.overlay,
      classHidden = obj.classHidden,
      buttonsClose = obj.buttonsClose;
  var body = document.body; // открытие модального окна

  var openPopup = function openPopup() {
    overlay.classList.remove(classHidden);
    document.addEventListener('keydown', onCloseModalKey);
    overlay.addEventListener('mousedown', onCloseModalMouse);
    body.dataset.scrollY = self.pageYOffset; // сохраним значение скролла

    body.classList.add('body-lock');
    body.style.top = -body.dataset.scrollY + 'px';
  }; //  Обработчик на оверлее для закрытия попапа по клику на нем или на соотв. кнопки


  var onCloseModalMouse = function onCloseModalMouse(e) {
    e.stopPropagation();
    var isButtonClose = Array.from(buttonsClose).some(function (button) {
      return e.target === button;
    });

    if (e.target === this || isButtonClose) {
      removeHandler();
    }
  };

  var onCloseModalKey = function onCloseModalKey(e) {
    if (e.key === 'Escape') {
      removeHandler();
    }
  };

  var removeHandler = function removeHandler() {
    overlay.classList.add(classHidden);
    document.removeEventListener('keydown', onCloseModalKey);
    overlay.removeEventListener('mousedown', onCloseModalMouse);
    body.classList.remove('body-lock');
    window.scrollTo(0, body.dataset.scrollY);
  };

  openPopup();
};