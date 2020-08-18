import {disableScrolling, enableScrolling} from './scroll-lock';

export default function (obj) {
  const overlay = obj.overlay;
  const classActive = obj.classActive;
  const buttonsClose = obj.buttonsClose;

  if (!overlay || !buttonsClose) {
    return;
  }
  // открытие модального окна
  const openPopup = function () {
    overlay.parentElement.classList.add(classActive);
    document.addEventListener('keydown', onCloseModalKey);
    overlay.addEventListener('mousedown', onCloseModalMouse);
    disableScrolling();
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
    overlay.parentElement.classList.remove(classActive);
    document.removeEventListener('keydown', onCloseModalKey);
    overlay.removeEventListener('mousedown', onCloseModalMouse);
    enableScrolling();
  };
  openPopup();
}
