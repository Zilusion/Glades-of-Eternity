document.addEventListener('DOMContentLoaded', function () {
	const points = document.querySelectorAll('.progress-bar__input');
	const steps = document.querySelectorAll('.search__step');
	const previousButton = document.querySelector('.search__previous-button');
	const nextButton = document.querySelector('.search__next-button');
	const submitButton = document.querySelector('.search__submit-button');
	const resetButton = document.querySelector('.search__reset-button');
	const form = document.querySelector('.search__form');
	let currentStep = 0; // Индекс текущего активного шага

	// Функция для отображения активного шага и скрытия остальных
	function showStep(stepIndex) {
		steps.forEach((step, index) => {
			if (index === stepIndex) {
				points[index].setAttribute('checked', 'checked');
				points[index].checked = true;
				step.style.display = 'block';
				if (
					!steps[index].children[1].children[0].value.length &&
					stepIndex !== 0
				) {
					steps[index].children[1].children[0].focus();
				}
			} else {
				points[index].removeAttribute('checked');
				points[index].checked = false;
				step.style.display = 'none';
			}
			if (stepIndex === 0) {
				previousButton.style.display = 'none';
				resetButton.style.display = 'block';
			} else {
				previousButton.style.display = 'block';
				resetButton.style.display = 'none';
			}
			if (stepIndex === steps.length - 1) {
				nextButton.style.display = 'none';
				submitButton.style.display = 'block';
			} else {
				submitButton.style.display = 'none';
				nextButton.style.display = 'block';
			}
		});
	}

	// Обработчик нажатия кнопки "Вперёд"
	nextButton.addEventListener('click', function () {
		if (currentStep < steps.length - 1) {
			currentStep++;
			showStep(currentStep);
		}
	});

	// Обработчик нажатия кнопки "Назад"
	previousButton.addEventListener('click', function () {
		if (currentStep > 0) {
			currentStep--;
			showStep(currentStep);
		}
	});

	// Обработчик нажатия кнопки "Найти"
	submitButton.addEventListener('click', function () {
		open('html/search.html', '_self');
	});

	// Обработчик нажатия точек
	for (let i = 0; i < points.length; i++) {
		points[i].addEventListener('click', function () {
			currentStep = i;
			showStep(i);
		});
	}

	// Инициализация формы, начнем с первого шага
	showStep(currentStep);

	// Обработчик отправки формы
	form.addEventListener('submit', function (e) {
		e.preventDefault(); // Предотвращаем стандартное поведение отправки формы
		const formData = new FormData(form);

		// Отправляем данные с использованием Fetch API
		// fetch("http://127.0.0.1:5501/", {
		//   method: "POST", // Может быть POST или другим методом, в зависимости от вашего сервера
		//   body: formData, // Данные формы
		// })
		//   .then((response) => {
		//     if (response.ok) {
		//       // Обработка успешной отправки данных
		//       alert("Данные успешно отправлены");
		//     } else {
		//       // Обработка ошибки при отправке данных
		//       alert("Произошла ошибка при отправке данных");
		//     }
		//   })
		//   .catch((error) => {
		//     // Обработка ошибок сети или других исключительных ситуаций
		//     console.error("Произошла ошибка: " + error.message);
		//   });
	});
});
