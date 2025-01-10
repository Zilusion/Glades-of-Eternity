document.querySelectorAll('.burial-page__switcher-item').forEach((radio) => {
	radio.addEventListener('change', () => {
		var options = document.getElementsByName('switcher');
		var optionValue;
		for (var i = 0; i < options.length; i++) {
			if (options[i].checked) {
				optionValue = options[i].value;
				break;
			}
		}

		const image = document.querySelector('.burial-page__image-wrapper ');
		const map = document.querySelector('.burial-page__map-wrapper');
		if (optionValue == 'image') {
			image.style.display = 'block';
			map.style.display = 'none';
		}
		if (optionValue == 'map') {
			image.style.display = 'none';
			map.style.display = 'block';
		}
	});
});
