const ua = window.navigator.userAgent.toLowerCase();
const isIe = (/trident/gi).test(ua) || (/msie/gi).test(ua);

if (isIe) {

  const makeSmoothScroll = function (link) {

    link.addEventListener('click', function (e) {
      e.preventDefault();

      let targetId = link.getAttribute('href');
      let target = document.querySelector(targetId);

      if (target) {
        const moveTo = function () {
          if (window.pageYOffset < target.offsetTop) {
            window.scrollBy(0, 60);
            setTimeout(moveTo);
          }
        };

        moveTo();
      }
    });
  };

  const links = document.querySelectorAll('.nav__link');
  if (links.length) {
    links.forEach((link) => makeSmoothScroll(link));
  }
}
