
// main menu opener
const navButton = document.querySelector('.nav__toggle');
const navMain = document.querySelector('.nav');
if (navMain && navButton) {

  navMain.classList.add('js-enable');

  const OpenCloseMenu = function () {
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

  const links = navMain.querySelectorAll('.nav__link');
  if (links) {
    links.forEach((link) => link.addEventListener('click', OpenCloseMenu));
  }

  navButton.addEventListener('click', OpenCloseMenu);

  let isTablet = true;
  window.onresize = function () {
    if (document.documentElement.clientWidth >= 1024 && isTablet) {
      navMain.classList.remove('nav--menu-active');
      isTablet = false;
    }
    if (document.documentElement.clientWidth <= 1024) {
      isTablet = true;
    }
  };
}
