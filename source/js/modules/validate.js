import onFocusPhoneInput from '../helpers/phoneMask';
import checkValue from '../helpers/checkValidity';
import focusTrapOne from '../helpers/modal';

const forms = document.querySelectorAll('form');

const template = document.querySelector('template');
const signSuccess = template.content.firstElementChild;

const initValidation = (input) => {
  if (input.name === 'phone') {
    input.addEventListener('focus', onFocusPhoneInput);
  }
  if (input.name === 'name') {
    input.addEventListener('input', function ({target}) {
      checkValue(target);
    });
  }
};

const onSubmit = function (e) {
  e.preventDefault();
  const form = e.currentTarget;
  const inputs = form.querySelectorAll('input[data-validate]');

  if (inputs.length) {

    inputs.forEach((input) => {
      localStorage.setItem(input.name, input.value);
      input.parentElement.classList.remove('form__valid');
    });
  }
  focusTrapOne.activate(); // вызов модального окна
  setTimeout(() => form.reset());
};

// валидация форм на главной странице
if (forms.length) {

  forms.forEach(function (form) {
    const inputs = form.querySelectorAll('input[data-validate]');

    if (inputs.length) {

      inputs.forEach((input) => {
        let value = localStorage.getItem(input.name);
        if (value) {
          input.value = value;
        }
        input.parentElement.prepend(signSuccess.cloneNode(true)); // добавляет зеленую галочку если валидно
        initValidation(input);
      });
    }
    form.addEventListener('submit', onSubmit);
  });
}
