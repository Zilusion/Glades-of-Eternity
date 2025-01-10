const loader = document.querySelector('.loader-container');

window.addEventListener(
	'load',
	function () {
		this.setTimeout(function () {
			loader.classList.add('closing');
			this.setTimeout(function () {
				loader.style.display = 'none';
				document.body.classList.add('loaded');
			}, 2500);
		}, 5000);
	},
	{ once: true }
);
