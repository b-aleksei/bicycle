/*

	// main menu opener
const navButton = document.querySelector('.nav__toggle');
const navMain = document.querySelector('.nav');
let invertExpanded = (el) => el.getAttribute('aria-expanded') === 'false' ? 'true' : 'false';


navMain.classList.add('js-enable');
navButton.addEventListener('click', function () {
	navButton.setAttribute('aria-expanded', invertExpanded(navButton));
	navMain.classList.toggle('nav--menu-active');
});

let isTablet = true
window.onresize = function () {
	if (document.documentElement.clientWidth >= 1024 && isTablet) {
		navMain.classList.remove('nav--menu-active');
		isTablet = false
	}
	if (document.documentElement.clientWidth <= 1024) {
		isTablet = true
	}
}
*/
