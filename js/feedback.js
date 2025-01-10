const feedbackButton = document.querySelector(
	'.feedback__leave-feedback-button'
);
const feedback = document.querySelector('.feedback__leave-feedback');

feedbackButton.addEventListener('click', function () {
	feedback.classList.toggle('active');
	if (feedback.classList.contains('active')) {
		if (languageSwitcher.value == 'russian') {
			feedbackButton.innerHTML = feedbackButtonActiveRu;
		} else if (
			languageSwitcher.value == 'english-UK' ||
			languageSwitcher.value == 'english-US' ||
			languageSwitcher.value == 'english-AU'
		) {
			feedbackButton.innerHTML = feedbackButtonActiveEn;
		}
	} else {
		if (languageSwitcher.value == 'russian') {
			feedbackButton.innerHTML = feedbackButtonNormalRu;
		} else if (
			languageSwitcher.value == 'english-UK' ||
			languageSwitcher.value == 'english-US' ||
			languageSwitcher.value == 'english-AU'
		) {
			feedbackButton.innerHTML = feedbackButtonNormalEn;
		}
	}
});
