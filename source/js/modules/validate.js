import initPhoneMask from './phoneMask';
import focusTrapOne from './modal';

const phoneInput = document.querySelector('input[name=phone]');
const regExpName = /^[\s-]+$|^\s*-+|[^A-Za-zА-Яа-я\-.\s']+/;
const forms = document.querySelectorAll('form');

const signSuccess = '' +
'<span class="form__input-valid">' +
  '<svg width="20" height="18">' +
    '<use href="#tick"></use>' +
  '</svg>' +
'</span>';

const checkValue = function (e) {
  const input = e.currentTarget;
  input.setCustomValidity('');
  if (input.name === 'name') {

    if (regExpName.test(input.value)) {
      input.setCustomValidity('Вы ввели недопустимый символ');
    }
  }

  if (input.name === 'phone') {
    let phoneLength = input.value.replace(/\D/g, '').length;
    let messageError = 'Длина номера менее 11 цифр, сейчас: ' + phoneLength;
    if (phoneLength < 11) {
      input.setCustomValidity(messageError);
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
  Array.prototype.forEach.call(form.elements, (input) => {
    if (input.dataset.validate) {
      localStorage.setItem(input.name, input.value);
      input.parentElement.classList.remove('form__valid');
    }
  });
  focusTrapOne.activate(); // вызов модального окна
  setTimeout(() => form.reset());
};

try {
// валидация форм на главной странице
  forms.forEach(function (form) {
    Array.prototype.forEach.call(form.elements, (input) => {
      if (input.dataset.validate) {
        let value = localStorage.getItem(input.name);
        if (value) {
          input.value = value;
        }
        input.parentElement.insertAdjacentHTML('afterbegin', signSuccess); // добавляет зеленую галочку если валидно
      }
    });
    initPhoneMask(phoneInput);
    form.addEventListener('focusin', onValidate);
    form.addEventListener('submit', onSubmit);
  });
} catch (e) {
  // console.log(e);
}
