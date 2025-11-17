import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала. Внутри обработчиков обновляйть состояние activeIndex.
	const handleClickBack = () => {
		if (activeIndex === 1) {
			// блокирую кнопку назад
		}
		setActiveIndex((activeIndex) => activeIndex - 1);
	};
	const handleClickNext = () => {
		if (steps.length === activeIndex + 1) {
			// меняем название кнопки (Начать сначала) и обработчик (handleClickStart)
		}
		setActiveIndex((activeIndex) => activeIndex + 1);
	};
	const handleClickStart = () => {
		setActiveIndex(0);
	};

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	// 	(Флаги. Также для удобства рекомендуем создать 2 переменных логического типа:
	// Находимся ли мы на первом шаге.
	// Находимся ли мы на последнем шаге.)

	// Как мне обозвать/записать на английском эти переменные?

	// Используя их в JSX разметке, можно выводить соответствующий контент в зависимости от этих двух условий. Например, блокировать кнопку Назад на первом шаге. Для определения значений этих переменных можно использовать массив steps и активный индекс activeIndex.

	// Вывод списка шагов. Шаги необходимо вывести циклично с помощью массива steps. CSS-класс styles['steps-item'] должен быть у всех шагов. Класс styles.active только у текущего активного шага, а styles.done у всех тех, которые были выполнены и также у активного. Для налядности можете взглянуть, как добавлены эти классы сейчас в компоненте App. Вам нужно будет сделать так, чтобы эти классы добавлялись автоматически в зависимости от текущего активного шага. Добавьте соответствующую проверку, когда будете выводить массив шагов. Для сравнения вам потребуется активный индекс (activeIndex) и индекс итерируемого шага (второй параметр в методе map()).

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{/* Для получения активного контента использйте steps и activeIndex */}
						Контент соответственный шагу. Сейчас активен шаг 3
					</div>
					<ul className={styles['steps-list']}>
						{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
						<li className={styles['steps-item'] + ' ' + styles.done}>
							{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
							<button className={styles['steps-item-button']}>1</button>
							{/* При клике на кнопку установка выбранного шага в качестве активного */}
							Шаг 1
						</li>
						<li className={styles['steps-item'] + ' ' + styles.done}>
							<button className={styles['steps-item-button']}>2</button>
							Шаг 2
						</li>
						<li
							className={
								styles['steps-item'] +
								' ' +
								styles.done +
								' ' +
								styles.active
							}
						>
							<button className={styles['steps-item-button']}>3</button>
							Шаг 3
						</li>
						<li className={styles['steps-item']}>
							<button className={styles['steps-item-button']}>4</button>
							Шаг 4
						</li>
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button}>Назад</button>
						<button className={styles.button}>
							Далее
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
