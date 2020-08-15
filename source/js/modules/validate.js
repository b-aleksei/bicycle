const regExpName = /^[\s-]+$|^\s*-+|[^A-Za-zА-Яа-я\-\s']+/;
const regExpPhone = /^[\s-+()]+$|^[-()]+|[^\d-\s+()]+/;
const forms = document.querySelectorAll('form');
const successSend = {
  overlay: document.querySelector('.modal'),
  classHidden: 'modal--invisible',
  buttonsClose: document.querySelectorAll('.modal__close'),
};
const signSuccess = '' +
'<span class="form__input-valid">' +
  '<svg width="20" height="18">' +
    '<use href="#tick"></use>' +
  '</svg>' +
'</span>';

const messageError = {
  maxLength: 'Длина номера превышает 11 цифр',
  minLength: 'Длина номера менее 11 цифр',
  errorSign: 'Вы ввели недопустимый символ',
};

const checkValue = function (e) {
  const input = e.currentTarget;
  const regExp = input.name === 'name' ? regExpName : regExpPhone;
  const invalid = regExp.test(input.value);
  input.setCustomValidity('');
  if (invalid) {
    input.setCustomValidity(messageError.errorSign);
  }

  if (input.name === 'phone' && !invalid) {
    let arr = input.value.match(/\d+/g);
    if (arr) {
      let phoneLength = arr.join('').length;
      if (phoneLength < 11) {
        input.setCustomValidity(messageError.minLength);
      } else if (phoneLength > 11) {
        input.setCustomValidity(messageError.maxLength);
      }
    }
  }
  checkValidity(input);
};

const checkValidity = function (input) {
  if (!input.validity.valid) {
    input.parentElement.classList.remove('form__valid');
    input.parentElement.classList.add('form__invalid');
  } else {
    input.parentElement.classList.remove('form__invalid');
    input.parentElement.classList.add('form__valid');
  }
};
  // обработчик события focus на form
const onValidate = function (e) {
  if (e.target.dataset.validate) {
    e.target.addEventListener('input', checkValue);
  }
  e.currentTarget.addEventListener('focusout', deleteHandler);
};

const deleteHandler = function (e) {
  if (e.target.dataset.validate) {
    e.target.removeEventListener('input', checkValue);
  }
  e.currentTarget.removeEventListener('focusout', deleteHandler);
};

const onSubmit = function (e) {
  e.preventDefault();
  const form = e.currentTarget;
  for (let i = 0; i < form.elements.length; i++) {
    let input = form.elements[i];
    if (input.dataset.validate) {
      localStorage.setItem(input.name, input.value);
      input.parentElement.classList.remove('form__valid');
    }
  }
  openClosePopup(successSend);
  setTimeout(function () {
    form.reset();
  });
};

// валидация форм на главной странице
forms.forEach(function (form) {
  for (let i = 0; i < form.elements.length; i++) {
    let input = form.elements[i];
    if (input.dataset.validate) {
      input.value = localStorage.getItem(input.name);
      input.parentElement.insertAdjacentHTML('afterbegin', signSuccess); // добавляет зеленую галочку если валидно
    }
  }
  form.addEventListener('focusin', onValidate);
  form.addEventListener('submit', onSubmit);
});


const openClosePopup = function (obj) {
  const overlay = obj.overlay;
  const classHidden = obj.classHidden;
  const buttonsClose = obj.buttonsClose;

  const body = document.body;
  // открытие модального окна
  const openPopup = function () {
    overlay.classList.remove(classHidden);
    document.addEventListener('keydown', onCloseModalKey);
    overlay.addEventListener('mousedown', onCloseModalMouse);
    body.dataset.scrollY = self.pageYOffset; // сохраним значение скролла
    body.classList.add('body-lock');
    body.style.top = -body.dataset.scrollY + 'px';
  };
    //  Обработчик на оверлее для закрытия попапа по клику на нем или на соотв. кнопки
  const onCloseModalMouse = function (e) {
    e.stopPropagation();
    const isButtonClose = Array.from(buttonsClose).some(function (button) {
      return e.target === button;
    });
    if (e.target === e.currentTarget || isButtonClose) {
      removeHandler();
    }
  };

  const onCloseModalKey = function (e) {
    if (e.key === 'Escape') {
      removeHandler();
    }
  };

  const removeHandler = function () {
    overlay.classList.add(classHidden);
    document.removeEventListener('keydown', onCloseModalKey);
    overlay.removeEventListener('mousedown', onCloseModalMouse);
    body.classList.remove('body-lock');
    window.scrollTo(0, body.dataset.scrollY);
  };
  openPopup();
};
