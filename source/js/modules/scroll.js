const goToTarget = function (target) { // фолбэк для ie11
  const y = target.offsetTop;

  const moveTo = function () {
    if (window.pageYOffset < y) {
      window.scrollBy(0, 60);
      setTimeout(moveTo);
    }
  };

  moveTo();
};

const makeSmoothScroll = function (link) {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let targetId = link.getAttribute('href');
    let target = document.querySelector(targetId);


    try {
      if (target) {

        if (!Promise) { // примитивная проверка для ie 11
          goToTarget(target);
        } else {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    } catch (er) {
      // console.log(er);
    }
  });
};

const links = document.querySelectorAll('.nav__link');
links.forEach((link) => makeSmoothScroll(link));
