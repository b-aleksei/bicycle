const regExpName = /^[\s-]+$|^\s*-+|[^A-Za-zА-Яа-я\-.\s']+/;


const checkValidity = function (input) {
  if (!input.validity.valid) {
    input.parentElement.classList.remove('form__valid');
    input.parentElement.classList.add('form__invalid');
  } else {
    input.parentElement.classList.remove('form__invalid');
    input.parentElement.classList.add('form__valid');
  }
};

const checkValue = function (input) {
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

export default checkValue;
