/* Mobile nav  */
const mobileNavButton = document.querySelector('.header__mobile-nav-button');
const mobileNavIcon = document.querySelector('.header__mobile-nav-button-icon');
const mobileNav = document.querySelector('.mobile');

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active');
});

window.onresize = function () {
	if (document.documentElement.clientWidth > 992) {
		mobileNavIcon.classList.remove('active');
		mobileNav.classList.remove('active');
	}
};
