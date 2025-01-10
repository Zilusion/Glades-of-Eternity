const loader = document.querySelector('.loader');

window.addEventListener(
	'load',
	function () {
		this.setTimeout(function () {
			loader.classList.add('closing');
			if (
				document.documentElement.clientWidth > 992 &&
				document.documentElement.clientHeight > 630
			) {
				this.setTimeout(function () {
					loader.style.display = 'none';
					document.body.classList.add('loaded');
					this.setTimeout(function () {
						document.body.classList.remove('no-scroll');
					}, 7000);
				}, 1000);
			} else {
				document.body.classList.remove('no-scroll');
				loader.style.display = 'none';
				this.setTimeout(function () {
					document.body.classList.add('loaded');
				}, 1000);
			}
		}, 3000);
	},
	{ once: true }
);

const sections = document.querySelectorAll('.section-scroll');
let currentSectionIndex = 0;
let isScrolling = false;
let popUpBlock = document.querySelector('.search__pop-up');

setTimeout(() => {
	window.addEventListener(
		'wheel',
		(event) => {
			var target = event.target;
			console.log(popUpBlock.contains(target));
			if (!popUpBlock.contains(target)) {
				document.body.classList.remove('no-scroll');
				console.log(
					`${document.documentElement.clientWidth} - ${document.documentElement.clientHeight}`
				);
				if (
					document.documentElement.clientWidth > 992 &&
					document.documentElement.clientHeight > 630
				) {
					event.preventDefault();
					if (!isScrolling) {
						if (event.deltaY < 0 && currentSectionIndex > 0) {
							currentSectionIndex--;
							scrollToSection();
						} else if (
							event.deltaY > 0 &&
							currentSectionIndex < sections.length - 1
						) {
							currentSectionIndex++;
							scrollToSection();
						}
					}
				}
			} else {
				document.body.classList.add('no-scroll');
			}
		},
		{ passive: false }
	);

	document.addEventListener('keydown', (event) => {
		if (
			event.target.nodeName !== 'INPUT' &&
			event.target.nodeName !== 'TEXTAREA'
		) {
			if (
				document.documentElement.clientWidth > 992 &&
				document.documentElement.clientHeight > 630
			) {
				event.preventDefault();
				const key = event.key;
				switch (key) {
					case 'Home':
						if (currentSectionIndex > 0) {
							currentSectionIndex = 0;
							scrollToSection();
						}
						break;
					case 'End':
						if (currentSectionIndex < sections.length - 1) {
							currentSectionIndex = sections.length - 1;
							scrollToSection();
						}
						break;
					case 'ArrowUp':
					case 'PageUp':
					case 'w':
					case 'W':
					case 'ц':
					case 'Ц':
						if (currentSectionIndex > 0) {
							currentSectionIndex--;
							scrollToSection();
						}
						break;
					case 'ArrowDown':
					case 'PageDown':
					case 's':
					case 'S':
					case 'ы':
					case 'Ы':
						if (currentSectionIndex < sections.length - 1) {
							currentSectionIndex++;
							scrollToSection();
						}
						break;
				}
			}
		}
	});
}, 12000);

function scrollToSection() {
	isScrolling = true;
	if (document.documentElement.clientWidth > 992) {
		document.body.classList.add('no-scroll');
	}

	sections[currentSectionIndex].scrollIntoView({
		behavior: 'smooth',
	});
	setTimeout(() => {
		isScrolling = false;
		document.body.classList.remove('no-scroll');
	}, 300);
}

const heroLinks = document.querySelectorAll('.hero-link');
const searchLinks = document.querySelectorAll('.search-link');
const aboutUsLinks = document.querySelectorAll('.about-us-link');
const feedbackLinks = document.querySelectorAll('.feedback-link');
const contactsLinks = document.querySelectorAll('.contacts-link');

for (let i = 0; i < heroLinks.length; i++) {
	heroLinks[i].addEventListener('click', function () {
		currentSectionIndex = 0;
		scrollToSection();
	});
}

for (let i = 0; i < searchLinks.length; i++) {
	searchLinks[i].addEventListener('click', function () {
		currentSectionIndex = 1;
		scrollToSection();
	});
}

for (let i = 0; i < aboutUsLinks.length; i++) {
	aboutUsLinks[i].addEventListener('click', function () {
		currentSectionIndex = 2;
		scrollToSection();
	});
}

for (let i = 0; i < feedbackLinks.length; i++) {
	feedbackLinks[i].addEventListener('click', function () {
		currentSectionIndex = 4;
		scrollToSection();
	});
}

for (let i = 0; i < contactsLinks.length; i++) {
	contactsLinks[i].addEventListener('click', function () {
		currentSectionIndex = 5;
		scrollToSection();
	});
}
