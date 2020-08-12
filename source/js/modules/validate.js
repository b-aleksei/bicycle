const START_INDEX = 4;
const FIRST_NUMBER = '7';
const substrateThree = '___';
const substrateTwo = '__';
const delimiter = ' ';
const regExp = /^7? ?\(?(\d{0,3})\)? ?(\d{0,3})-?(\d{0,2})-?(\d{0,2})/;
const regE = /7.*/;
const pln = /(?:\d\D*)$/g; // позиция последней цифры
const controlKeys = ['Tab', 'ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'];
const forms = document.querySelectorAll('form');
const successSend = {
  overlay: document.querySelector('.modal'),
  classHidden: 'modal--invisible',
  buttonsClose: document.querySelectorAll('.modal__close'),
};
const signSuccess = `
<span class="form__input-valid">
  <svg width="20" height="18">
    <use href="img/sprite_auto.svg#tick"></use>
  </svg>
</span>`;

const enterPhoneValue = function (e) {

  const isControlKey = controlKeys.some(function (key) {
    return e.key === key;
  });

  if (!e.ctrlKey && !isControlKey) {

    let cursor = this.selectionStart = this.selectionEnd;
    setTimeout(() => {
      let number = this.value.match(regE) || [FIRST_NUMBER];
      let arr = Array.from(number[0]);
      let str = arr.filter((item) => /\d/.test(item));
      str = str.join('').slice(0, 11);
      this.value = str.replace(regExp, (m, p1, p2, p3, p4) => {
        return '+' + FIRST_NUMBER + ' (' + (p1 + substrateThree).slice(0, substrateThree.length) + ') '
          + (p2 + substrateThree).slice(0, substrateThree.length) + delimiter
          + (p3 + substrateTwo).slice(0, substrateTwo.length) + delimiter
          + (p4 + substrateTwo).slice(0, substrateTwo.length);
      });
      // управление курсором
      let search = this.value.search(pln);
      this.selectionStart = this.selectionEnd = (e.key === 'Delete') ? cursor : search + 1;
      if (cursor < START_INDEX) {
        this.selectionStart = this.selectionEnd = START_INDEX;
      }
      checkValidity.call(this);
    }, 1);
  }
};

const checkValidity = function () {
  if (!this.validity.valid) {
    this.parentElement.classList.remove('form__valid');
    this.parentElement.classList.add('form__invalid');
  } else {
    this.parentElement.classList.remove('form__invalid');
    this.parentElement.classList.add('form__valid');
  }
};
// обработчик события focus на form
const onValidate = function (e) {
  if (e.target.name === 'phone') {
    e.target.addEventListener('keydown', enterPhoneValue);
  }

  if (e.target.name === 'name') {
    e.target.addEventListener('input', checkValidity);
  }
  this.addEventListener('focusout', deleteHandler);
};

const deleteHandler = function (e) {
  if (e.target.name === 'phone') {
    e.target.removeEventListener('keydown', enterPhoneValue);
  }
  if (e.target.name === 'name') {
    e.target.removeEventListener('input', checkValidity);
  }
  this.removeEventListener('focusout', deleteHandler);
};

const onSubmit = function (e) {
  e.preventDefault();
  for (const input of this.elements) {
    if (input.dataset.validate) {
      localStorage.setItem(input.name, input.value);
      input.parentElement.classList.remove('form__valid');
    }
  }
  setTimeout(() => this.reset());
  openClosePopup(successSend);
};

// валидация форм на главной странице
forms.forEach(function (form) {
  for (const input of form.elements) {
    if (input.dataset.validate) {
      input.value = localStorage.getItem(input.name);
      input.parentElement.insertAdjacentHTML('afterbegin', signSuccess); // добавляет зеленую галочку если валидно
    }
  }
  form.addEventListener('focusin', onValidate);
  form.addEventListener('submit', onSubmit);
});


const openClosePopup = function (obj) {
  const {
    overlay, // оверлей с модальным окном
    classHidden, // класс с dispay: none
    buttonsClose, // кнопки закрытия окна(массив)
  } = obj;

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
    const isButtonClose = Array.from(buttonsClose).some((button) => e.target === button);
    if (e.target === this || isButtonClose) {
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
