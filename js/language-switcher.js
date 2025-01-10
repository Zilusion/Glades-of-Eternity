let languageSwitcher = document.querySelector('.header__language-switcher');
const searchLinksLink = document.querySelectorAll('.search-link a');
const aboutUsLinksLink = document.querySelectorAll('.about-us-link a');
const feedbackLinksLink = document.querySelectorAll('.feedback-link a');
const contactsLinksLink = document.querySelectorAll('.contacts-link a');
const heroText = document.querySelector('.hero__text');
const searchTitle = document.querySelector('.search__title');
const searchText = document.querySelector('.search__text');
const searchStepTitles = document.querySelectorAll('.search__legend');
const searchStepInputName = document.querySelectorAll('.search__placeholder');
const previousButton = document.querySelector('.search__previous-button');
const nextButton = document.querySelector('.search__next-button');
const submitButton = document.querySelector('.search__submit-button');
const aboutUsTitle = document.querySelector('.about-us__title');
const aboutUsTexts = document.querySelectorAll('.about-us__text');
const supportersTitle = document.querySelector('.supporters__title');
const supportersText = document.querySelector('.supporters__text');
const feedbackTitle = document.querySelector('.feedback__title');
const feedbackName = document.querySelector(
	'.feedback__leave-feedback-form-input'
);
const feedbackText = document.querySelector(
	'.feedback__leave-feedback__form-textarea'
);
const feedbackImage = document.querySelector(
	'.feedback__leave-feedback-form-input-label'
);
const contactsTitle = document.querySelector('.contacts__title');
const seance = document.querySelector('#seance');
const footerText = document.querySelector('.footer__text');

const feedbackButtonNormalRu = 'Оставить отзыв';
const feedbackButtonActiveRu = 'Отправить отзыв';
const feedbackButtonNormalEn = 'Leave feedback';
const feedbackButtonActiveEn = 'Send feedback';

languageSwitcher.addEventListener('change', () => {
	if (feedback.classList.contains('active')) {
		if (languageSwitcher.value == 'russian') {
			feedbackButton.innerHTML = feedbackButtonActiveRu;
		} else if (
			languageSwitcher.value == 'english-UK' ||
			languageSwitcher.value == 'english-AU'
		) {
			feedbackButton.innerHTML = feedbackButtonActiveEn;
		}
	} else {
		if (languageSwitcher.value == 'russian') {
			feedbackButton.innerHTML = feedbackButtonNormalRu;
		} else if (
			languageSwitcher.value == 'english-UK' ||
			languageSwitcher.value == 'english-AU'
		) {
			feedbackButton.innerHTML = feedbackButtonNormalEn;
		}
	}

	if (languageSwitcher.value == 'russian') {
		document.body.classList.remove('australian-mode');
		heroText.innerHTML = 'Поиск захоронений';
		heroText.style.width = '17ch';
		for (let i = 0; i < searchLinksLink.length; i++) {
			searchLinksLink[i].innerHTML = 'Поиск';
		}
		for (let i = 0; i < aboutUsLinksLink.length; i++) {
			aboutUsLinksLink[i].innerHTML = 'О проекте';
		}
		for (let i = 0; i < feedbackLinksLink.length; i++) {
			feedbackLinksLink[i].innerHTML = 'Отзывы';
		}
		for (let i = 0; i < contactsLinksLink.length; i++) {
			contactsLinksLink[i].innerHTML = 'Контакты';
		}
		searchTitle.innerHTML = 'Поиск места захоронения';
		searchText.innerHTML =
			'Получите подробную информацию о месте захоронения, включая местоположение на территории кладбища, а также сведения по кладбищу, на котором захоронение находится. ';
		searchStepTitles[0].innerHTML = 'Шаг 1: ФИО';
		searchStepTitles[1].innerHTML = 'Шаг 2: Местоположение';
		searchStepTitles[2].innerHTML = 'Шаг 3: Даты рождения и смерти';
		searchStepInputName[0].innerHTML = 'Фамилия';
		searchStepInputName[1].innerHTML = 'Имя';
		searchStepInputName[2].innerHTML = 'Отчество';
		searchStepInputName[3].innerHTML = 'Страна';
		searchStepInputName[4].innerHTML = 'Область';
		searchStepInputName[5].innerHTML = 'Город';
		searchStepInputName[6].innerHTML = 'Дата рождения';
		searchStepInputName[7].innerHTML = 'Дата смерти';
		nextButton.value = 'Вперёд';
		previousButton.value = 'Назад';
		submitButton.value = 'Найти';
		aboutUsTitle.innerHTML = 'О проекте';
		aboutUsTexts[0].innerHTML =
			'Мы — социальный проект по поиску захоронений. С помощью нашего сервиса Вы можете удаленно найти захоронения людей. ';
		aboutUsTexts[1].innerHTML =
			'Наша цель заключается в сохранении и передаче памяти о людях и их прошлом. Мы считаем, что каждая жизнь имеет значение и заслуживает вечной памяти. Поэтому, мы предоставляем возможность просмотра фотографий места захоронения и их точное месторасположение. ';
		aboutUsTexts[2].innerHTML =
			'Благодаря нашему сервису вы сможете узнать больше о людях, которые ушли из нашей жизни, и почтить их память. Безграничное количество историй скрыто в этих захоронениях, и мы верим, что каждая из них заслуживает быть рассказанной и запечатлена для будущих поколений. Мы храним память о людях и нашем прошлом! ';
		supportersTitle.innerHTML = 'Нас поддерживают';
		supportersText.innerHTML =
			'"Нас поддерживают" – это не только слова, но и наше сердечное признание благодарности перед нашими партнерами и сторонниками. Мы гордимся тем, что наш поиск мест захоронения людей поддерживается различными организациями. Их доверие и сотрудничество вдохновляют нас продолжать наше дело, помогая людям в трудные моменты.';
		feedbackTitle.innerHTML = 'Отзывы';
		feedbackName.placeholder = 'Введите имя...';
		feedbackText.placeholder = 'Введите отзыв...';
		feedbackImage.innerHTML = 'Загрузите фото';
		contactsTitle.innerHTML = 'Как с нами связаться и где нас найти';
		seance.innerHTML = 'спиритический сеанс';
		footerText.innerHTML = 'Все права защищены © 2024 "Glades of Eternity"';
	}

	if (
		languageSwitcher.value == 'english-UK' ||
		languageSwitcher.value == 'english-US'
	) {
		document.body.classList.remove('australian-mode');
		heroText.innerHTML = 'Find the burial place';
		heroText.style.width = '24ch';
		for (let i = 0; i < searchLinksLink.length; i++) {
			searchLinksLink[i].innerHTML = 'Find';
		}
		for (let i = 0; i < aboutUsLinksLink.length; i++) {
			aboutUsLinksLink[i].innerHTML = 'About us';
		}
		for (let i = 0; i < feedbackLinksLink.length; i++) {
			feedbackLinksLink[i].innerHTML = 'Feedback';
		}
		for (let i = 0; i < contactsLinksLink.length; i++) {
			contactsLinksLink[i].innerHTML = 'Contacts';
		}
		searchTitle.innerHTML = 'Find the burial place';
		searchText.innerHTML =
			'Get detailed information about the burial site, including location within the cemetery, as well as information about the cemetery where the burial is located.';
		searchStepTitles[0].innerHTML = 'Step 1: Full name';
		searchStepTitles[1].innerHTML = 'Step 2: Location';
		searchStepTitles[2].innerHTML = 'Step 3: Dates of birth and death';
		searchStepInputName[0].innerHTML = 'Surname';
		searchStepInputName[1].innerHTML = 'Name';
		searchStepInputName[2].innerHTML = 'Patronymic';
		searchStepInputName[3].innerHTML = 'Country';
		searchStepInputName[4].innerHTML = 'Region';
		searchStepInputName[5].innerHTML = 'City';
		searchStepInputName[6].innerHTML = 'Date of birth';
		searchStepInputName[7].innerHTML = 'Date of death';
		nextButton.value = 'Next';
		previousButton.value = 'Back';
		submitButton.value = 'Find';
		aboutUsTitle.innerHTML = 'About the project';
		aboutUsTexts[0].innerHTML =
			'We are a social project for searching for graves. Using our service, you can remotely find human burials.';
		aboutUsTexts[1].innerHTML =
			'Our goal is to preserve and transmit the memory of people and their past. We believe that every life matters and deserves to be remembered forever. Therefore, we provide the opportunity to view photographs of the burial site and their exact location.';
		aboutUsTexts[2].innerHTML =
			'Thanks to our service, you can learn more about the people who have passed away from our lives and honor their memory. There are countless stories hidden within these burial sites, and we believe each one deserves to be told and recorded for future generations. We preserve the memory of people and our past!';
		supportersTitle.innerHTML = 'They support us';
		supportersText.innerHTML =
			'“They support us” is not only words, but also our heartfelt declaration of gratitude to our partners and supporters. We are proud that our search for burial sites is supported by various organizations. Their trust and cooperation inspire us to continue our work, helping people in difficult times.';
		feedbackTitle.innerHTML = 'Feedback';
		feedbackName.placeholder = 'Enter your name...';
		feedbackText.placeholder = 'Enter your feedback...';
		feedbackImage.innerHTML = 'Upload photo';
		contactsTitle.innerHTML = 'How to contact us and where to find us';
		seance.innerHTML = 'seance';
		footerText.innerHTML =
			'All rights reserved © 2024 "Glades of Eternity"';
	}
	if (languageSwitcher.value == 'english-AU') {
		document.body.classList.add('australian-mode');
		heroText.innerHTML = 'Find the burial place';
		heroText.style.width = '24ch';
		for (let i = 0; i < searchLinksLink.length; i++) {
			searchLinksLink[i].innerHTML = 'Find';
		}
		for (let i = 0; i < aboutUsLinksLink.length; i++) {
			aboutUsLinksLink[i].innerHTML = 'About us';
		}
		for (let i = 0; i < feedbackLinksLink.length; i++) {
			feedbackLinksLink[i].innerHTML = 'Feedback';
		}
		for (let i = 0; i < contactsLinksLink.length; i++) {
			contactsLinksLink[i].innerHTML = 'Contacts';
		}
		searchTitle.innerHTML = 'Find the burial place';
		searchText.innerHTML =
			'Get detailed information about the burial site, including location within the cemetery, as well as information about the cemetery where the burial is located.';
		searchStepTitles[0].innerHTML = 'Step 1: Full name';
		searchStepTitles[1].innerHTML = 'Step 2: Location';
		searchStepTitles[2].innerHTML = 'Step 3: Dates of birth and death';
		searchStepInputName[0].innerHTML = 'Surname';
		searchStepInputName[1].innerHTML = 'Name';
		searchStepInputName[2].innerHTML = 'Patronymic';
		searchStepInputName[3].innerHTML = 'Country';
		searchStepInputName[4].innerHTML = 'Region';
		searchStepInputName[5].innerHTML = 'City';
		searchStepInputName[6].innerHTML = 'Date of birth';
		searchStepInputName[7].innerHTML = 'Date of death';
		nextButton.value = 'Next';
		previousButton.value = 'Back';
		submitButton.value = 'Find';
		aboutUsTitle.innerHTML = 'About the project';
		aboutUsTexts[0].innerHTML =
			'We are a social project for searching for graves. Using our service, you can remotely find human burials.';
		aboutUsTexts[1].innerHTML =
			'Our goal is to preserve and transmit the memory of people and their past. We believe that every life matters and deserves to be remembered forever. Therefore, we provide the opportunity to view photographs of the burial site and their exact location.';
		aboutUsTexts[2].innerHTML =
			'Thanks to our service, you can learn more about the people who have passed away from our lives and honor their memory. There are countless stories hidden within these burial sites, and we believe each one deserves to be told and recorded for future generations. We preserve the memory of people and our past!';
		supportersTitle.innerHTML = 'They support us';
		supportersText.innerHTML =
			'“They support us” is not only words, but also our heartfelt declaration of gratitude to our partners and supporters. We are proud that our search for burial sites is supported by various organizations. Their trust and cooperation inspire us to continue our work, helping people in difficult times.';
		feedbackTitle.innerHTML = 'Feedback';
		feedbackName.placeholder = 'Enter your name...';
		feedbackText.placeholder = 'Enter your feedback...';
		feedbackImage.innerHTML = 'Upload photo';
		contactsTitle.innerHTML = 'How to contact us and where to find us';
		seance.innerHTML = 'seance';
		footerText.innerHTML =
			'All rights reserved © 2024 "Glades of Eternity"';
	}
});
