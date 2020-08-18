
// main menu opener
const navButton = document.querySelector('.nav__toggle');
const navMain = document.querySelector('.nav');
const pictures = document.querySelectorAll('img[data-object-fit]');
let isTablet = false;

const removeAttr = function (pictures) {
  console.log('start');
  if (pictures) {
    pictures.forEach((img) => {
      if (!isTablet) {
        img.removeAttribute('data-object-fit');
        // img.setAttribute('data-object-fit', 'none');
      } else {
        img.setAttribute('data-object-fit', 'cover');
      }
    });
  }
};

if (document.documentElement.clientWidth < 1024) {
  isTablet = true;
} else {
  removeAttr(pictures);
}

if (navMain && navButton) {

  navMain.classList.add('js-enable');

  const openCloseMenu = function () {
    if (navButton.getAttribute('aria-expanded') === 'false') {
      navButton.setAttribute('aria-expanded', 'true');
      navMain.classList.add('nav--menu-active');
      document.body.classList.add('body-lock');
    } else {
      navButton.setAttribute('aria-expanded', 'false');
      navMain.classList.remove('nav--menu-active');
      document.body.classList.remove('body-lock');
    }
  };

  const closeMenu = function () {
    if (navMain.classList.contains('nav--menu-active')) {
      openCloseMenu();
    }
  };

  const links = navMain.querySelectorAll('.nav__link');
  if (links) {
    links.forEach((link) => link.addEventListener('click', closeMenu));
  }

  navButton.addEventListener('click', openCloseMenu);

  window.onresize = function () {
    if (document.documentElement.clientWidth >= 1024 && isTablet) {
      navButton.setAttribute('aria-expanded', 'false');
      navMain.classList.remove('nav--menu-active');
      document.body.classList.remove('body-lock');
      isTablet = false;
      removeAttr(pictures);
    }
    if (document.documentElement.clientWidth < 1024 && !isTablet) {
      isTablet = true;
      removeAttr(pictures);
    }
  };
}
