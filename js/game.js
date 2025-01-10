const random = (min, max) => {
	const rand = min + Math.random() * (max - min + 1);
	return Math.floor(rand);
};

function changeText(text) {
	popUpText.innerHTML = text;
}

function changeTitle(title) {
	popUpTitle.innerHTML = title;
}

function changeCounter(number) {
	orangeCounter.innerHTML = number;
}

function changeImage(image) {
	popUpImage.setAttribute('src', image);
}

/* Pop up */
const popUp = document.querySelector('.search__pop-up');
const popUpTitle = document.querySelector('.search__pop-up-title');
const popUpImage = document.querySelector('.search__pop-up-image');
const popUpText = document.querySelector('.search__pop-up-text');
const popUpButton = document.querySelector('.search__pop-up-button');
const popUpIcon = document.querySelector('.search__pop-up-button-icon');
popUpButton.addEventListener('click', function () {
	popUp.classList.toggle('active');
	orangeButton.classList.remove('disabled');
});

/* Orange */
let name = 'Пользователь';
const cemetery = document.querySelector('.search__image');
const imageWrapper = document.querySelector('.search__image-wrapper');
const orangeButton = document.querySelector('.search__orange-button');
const orange = document.querySelector('.search__orange-image');
const orangeCounter = document.querySelector('.search__orange-counter');
let counter = 0;

let fakeOranges = document.querySelectorAll('.search__fake-orange-image');

let reset = true;
if (
	document.documentElement.clientWidth > 992 &&
	document.documentElement.clientHeight > 630
) {
	orangeButton.addEventListener('mouseenter', game);
} else {
	orangeButton.addEventListener('click', game);
}

function game() {
	cemetery.setAttribute('src', './img/index/search/supercemetery.png');
	counter++;
	orangeCounter.innerHTML = counter;
	orange.classList.add('active');
	orange.style.left = `${random(0, 90)}%`;
	orange.style.top = `${random(0, 90)}%`;
	fakeOranges.forEach(function (fakeOrange) {
		fakeOrange.style.left = `${random(0, 90)}%`;
		fakeOrange.style.top = `${random(0, 90)}%`;
	});

	changeTitle('...');

	if (reset) {
		if (counter == 1) {
			let question = prompt('Как вас зовут?');
			if (question === null || question === '') {
				name = 'Незнакомец';
			} else {
				name = question;
			}
		}

		if (counter == 2) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('...');
			changeText(
				`- ${name} навёлся на апельсин, но ничего не произошло, тот просто убежал. Так что ${name} перестал гоняться за ним и пошёл по своим делам.`
			);
		}

		if (counter == 10) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Непонятно почему, но ${name} всё ещё гонялся за апельсином. Он даже не обратил внимание на весь остальной сайт, непонятно почему. Если бы за это что-то давали - было бы ещё понятно.`
			);
		}

		if (counter == 15) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- Но ${name} просто гонялся за апельсином!`);
		}

		if (counter == 40) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Вы... Вы всё гоняетесь за ним? Сидите и просто водите мышку? Зачем?`
			);
		}

		if (counter == 50) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- Пожалуйста объяснитесь - мы вас не понимаем.`);
		}

		if (counter == 60) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Может, для вас это воспринимается смыслом жизни? Вашей обязанностью дойти до конца? Чего вы добиваетесь?`
			);
		}

		if (counter == 70) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Может, вы потом пойдете писать друзьям: "О, А ТЫ ЗНАЕШЬ ЧЕМ Я СЕГОДНЯ ЗАНИМАЛСЯ? ГОНЯЛСЯ ЗА АПЕЛЬСИНОМ! ЭТО ТАК ЗДОРОВО!" Надеюсь после этого друзья о вас забеспокоятся...`
			);
		}

		if (counter == 90) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Возможно, они вас заберут в дурдом или в другую больницу....`
			);
		}

		if (counter == 95) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Составят протокол, мол, зашли на сайт, поскролили его, собирались закрыть, обратили внимание на апельсин среди зелёных деревьев и решили на него навестись. Это отключило вашу мозговую активность...`
			);
		}

		if (counter == 97) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeImage('./../img/game/durka.png');
			changeText(`-  ОП! И вы уже в дурке =)`);
		}

		if (counter == 100) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeImage('');
			changeText(
				`- В такой ситуации ответственным поступком будет сообщить окружающим об этой ситуации, чтобы вас забрали и отвезли домой, пока не стало ещё хуже, ведь вы навелись свои первые (за эту сессию) 100 раз!`
			);
		}

		if (counter == 103) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- Для вас это достижение? Вы достигли смысла жизни?`);
		}

		if (counter == 110) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Обычно у людей смысл жизни ничего не делать и жить в достатке...`
			);
		}

		if (counter == 112) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- Но у вас явно какое-то отклонение... Вы отупели?`);
		}

		if (counter == 130) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- ВНИМАНИЕ! ЕСТЬ КТО РЯДОМ? ЧЕЛОВЕК ЗА ЭТИМ КОМПЬЮТЕРОМ ОТУПЕЛ!`
			);
		}

		if (counter == 156) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- ПОЖАЛУЙСТА, УВЕДИТЕ ЭТО ОТУПЕВШЕЕ СОЗДАНИЕ И ПОПРОСИТЕ ДРУГОГО ЧЕЛОВЕКА ЗАНЯТЬ ЭТО МЕСТО ЗА КОМПЬЮТЕРОМ,
    УБЕДИВШИСЬ, ЧТО ОНИ ПОНИМАЮТ БАЗОВЫЕ МЕХАНИКИ ПОЛЬЗОВАНИЯ САЙТАМИ, И РАССКАЗАВ ИМ ДЛЯ ЧЕГО ЭТОТ САЙТ, ЧТОБЫ ОНИ ПОНИМАЛИ ИРОНИЮ И ГЛУБОКИЕ СМЫСЛЫ ЭТОЙ ЧАСТИ САЙТА!`);
		}

		if (counter == 166) {
			if (reset) {
				counter = 0;
				reset = false;
			}
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- ВЫ НАВЕЛИСЬ УЖЕ 166 РАЗ!!!!! Это пугает... Пожалуй, закончим на этом, пока не стало слишком поздно, возможно, слудующий не будет столь отсталым.`
			);
		}
	}

	if (!reset) {
		if (counter == 2) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Очередной тупой пользователь? Чтож... Добро пожаловать, уверяю, хуже чем прошлый, вы уже не будете. ГЛАВНОЕ - НЕ ПОВТОРЯЙТЕ ЕГО ОШИБОК!`
			);
		}

		if (counter == 15) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Ой, апельсин размножился? Надеюсь это не станет проблемой...`
			);
			fakeOranges[0].classList.add('active');
		}

		if (counter == 25) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- Ой, ещё раз...`);
			fakeOranges[1].classList.add('active');
		}

		if (counter == 35) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- И ещё...`);
			fakeOranges[2].classList.add('active');
		}

		if (counter == 50) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Может, рядом есть какая-то обезьяна, которая может забрать контроль над мышкой и перестать гоняться за апельсинами?`
			);
		}

		if (counter == 72) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Может, рыба? Гриб? Слушайте, нам всё равно кто вы - мы не сильно привередливы`
			);
		}

		if (counter == 90) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Раз вам настолько нечем заняться, не хотите пройти "<a href="https://konstruktortestov.ru/test-56171" target="_blank" class="test">тест</a>?"`
			);
		}

		if (counter == 97) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Если вы прошли, мы в очередной раз убедились в тупости человечества. Если нет, поздравлю, у вас на пару IQ выше чем у ваших сородичей! =)`
			);
		}

		if (counter == 135) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(
				`- Когда блондинка много думает, у нее начинают темнеть корни!`
			);
		}

		if (counter == 166) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- И вот снова на счетчике 166... Аж плакать захотелось от того, насколько смешна ваша тупость.`
			);
		}

		if (counter == 200) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Кстати, если вам обидно, что мы называем вас тупыми - не обижайтесь =)! `
			);
		}

		if (counter == 226) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- На самом деле это не оскорбление, это констатация фактов, выведенных из ваших действий.`
			);
		}

		if (counter == 245) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- Считаете себя выше этого? Решите тест: Что вкуснее, килограмм железа или камаз перьев? <form>
            <label for="test1">Килограмм железа</label>
            <input type="radio" name="test" id="test1">
            <label for="test2">Камаз перьев</label>
            <input type="radio" name="test" id="test2">
        </form>`);
		}

		if (counter == 263) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- Обработка ответа займет время... `);
		}

		if (counter == 308) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- Ещё немного... `);
		}

		if (counter == 342) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- Совсем чуть-чуть осталось... `);
		}

		if (counter == 384) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- ЕЩЁ ЧУТОК...`);
		}

		if (counter == 403) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- FHA:FJHAJCA;fuaFHBFHAL;fhafhsfh;HFHIh67^D906&#5(^(766^%964%^3$97))`
			);
			changeCounter(0);
		}

		if (counter > 400 && counter < 433) {
			changeCounter(random(-9999, 9999));
		}

		if (counter == 434) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- В общем, обдумывание вашего ответа слишком сильно нагрузило систему. Так что, думаю это уже не важно.`
			);
			fakeOranges[0].classList.add('active');
			fakeOranges[1].classList.add('active');
			fakeOranges[2].classList.add('active');
		}

		if (counter == 466) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Несмотря на то, что прошло уже куча времени, вы продолжаете гоняться за апельсинами...`
			);
		}

		if (counter == 500) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- В общем, мы в этом не учавствуем. Мы не будем тебя подбадривать. Мы не будем ничего говорить. Будем молча ждать, пока вы закончите то, что вам тут так нравится делать.`
			);
		}

		if (counter == 502) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- Гоняйтесь сколько хотите.`);
		}

		if (counter == 511) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(`- Купил мужик шляпу, а она ему как раз.`);
		}

		if (counter == 522) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(`- Купил вторую, а она ему как два.`);
		}

		if (counter == 543) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(`- Уходить пораньше с работы — плохая примета. 
                  — Один вот ушёл — и развёлся.`);
		}

		if (counter == 666) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('ПРОКЛЯТЫЙ');
			changeText(
				`- Ну чтож, правом данным мне преисподней, я могу заставить вас пострадать ещё минимум 666 наведений... Но так как сегодня у нас... В принципе неважно... в общем, поздравляю с достижением дна в развитии!`
			);
		}

		if (counter == 777) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- Ну, тут только один вариант... АЗИНО ТРИ ТОПОРА`);
		}

		if (counter == 853) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(
				`- Колобок сделал себе харакири, после чего его стали называть гамбургером.`
			);
		}

		if (counter == 1000) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('1000');
			changeText(
				`- Поздравлем, у вас настолько много свободного времени и лишних нервов, что вы добрались до 1000... И чего вы этим добились?`
			);
		}

		if (counter == 1472) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(
				`- Некрасивая продавщица вино-водочного магазина после 22.00 наслаждалась комплиментами.`
			);
		}

		if (counter == 1814) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(
				`- Когда мужчина сидит с бокалом пива, путь к его сердцу временно недоступен...`
			);
		}

		if (counter == 2437) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(
				`- Пицца — это круговая диаграмма, показывающая сколько у тебя осталось пиццы.`
			);
		}

		if (counter == 2756) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(
				`- В детстве на переменах мы кидались мокрой тряпкой. Уверен, сейчас для этого есть специальная программа для айфона.`
			);
		}

		if (counter == 3000) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('...');
			changeText(`...`);
		}

		if (counter == 3479) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(
				`- Непринципиальный священник начал проповедь словами «Хотите — верьте, хотите — нет».`
			);
		}

		if (counter == 3745) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(
				`- Вася так быстро надевал свой шерстяной свитер, что его убило током.`
			);
		}

		if (counter == 4000) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- чего вы ожидали от этого окна? похвалы? не) просто ... вы ничего этим не добились`
			);
		}

		if (counter == 4534) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(
				`- Черепашки—ниндзя нападали вчетвером на одного, потому что у них тренер был крыса.`
			);
		}

		if (counter == 4864) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(`- Больной пошел на поправку. Но не дошёл.`);
		}

		if (counter == 5000) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Ещё всего лишь половина пути, и вы забьёте счетчик! удачи! =)`
			);
		}

		if (counter == 5456) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(`- — Дочь, ты пила? 
                    — Нет, мама, я топор!`);
		}

		if (counter == 6000) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- Может хватит?`);
		}

		if (counter == 6100) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Сходите покушайте, примите ванну, хватит ловить апельсины...`
			);
		}

		if (counter == 6357) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeTitle('Минутка смеха');
			changeText(`- вы любите розы? А я на них срал...`);
		}

		if (counter == 7000) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- текст`);
		}

		if (counter == 7642) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Зашёл в кафе еврейской кухни "мазл тоф", заказал чай, ну и пошутил: "евреи, не жалейте заварки", ну т.е. сделайте покрепче. Мне ответили, что нальют меньше кипятка.`
			);
		}

		if (counter == 8000) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Прошлый анекдот всё таки полная несмеяка... вот ещё один: Что—то сегодня голова не работает. Не вся, конечно. Есть могу.`
			);
		}

		if (counter == 9000) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(`- ЕЩЁ 1000 И ВЫ У ЦЕЛИ!`);
		}

		if (counter == 9990) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			changeText(
				`- Что вы ожидаете от конца? Уверяю там всё о чем вы мечтали, но ничего того о чём вы думали! =)`
			);
		}

		if (counter == 9999) {
			popUp.classList.toggle('active');
			orangeButton.classList.add('disabled');
			location.reload();
		}
	}
}
