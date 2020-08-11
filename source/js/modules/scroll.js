let makeSmoothScroll = function (link) {

  link.addEventListener("click", function (e) {
    e.preventDefault();

    let targetId = this.getAttribute("href");
    let target = document.querySelector(targetId)

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  })
}

const links = document.querySelectorAll('.nav__link');
links.forEach(link => makeSmoothScroll(link))
