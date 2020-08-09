'use strict';


(function () {
	// main menu opener
	const navButton = document.querySelector('.nav__toggle');
	const navMain = document.querySelector('.nav');
	let invertExpanded = (el) => el.getAttribute('aria-expanded') === 'false' ? 'true' : 'false';


	navMain.classList.remove('no-js');
	navButton.addEventListener('click', function () {
		navButton.setAttribute('aria-expanded', invertExpanded(navButton));
		navMain.classList.toggle('nav--menu-active');
	});

})();
