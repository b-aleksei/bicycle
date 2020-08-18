
// main menu opener
const navButton = document.querySelector('.nav__toggle');
const navMain = document.querySelector('.nav');
let isTablet = false;
const modal = document.querySelector('.modal');

if (document.documentElement.clientWidth < 1024) {
  isTablet = true;
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
      isTablet = false;
      if (!modal.classList.contains('modal--active')) {
        document.body.classList.remove('body-lock');
      }
    }
    if (document.documentElement.clientWidth < 1024 && !isTablet) {
      isTablet = true;
    }
  };
}
