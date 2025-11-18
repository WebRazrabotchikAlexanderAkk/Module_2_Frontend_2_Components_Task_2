import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	// Можно задать 2 состояния — steps и activeIndex
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала. Внутри обработчиков обновляйть состояние activeIndex.
	const handleClickBack = () => {
		setActiveIndex((activeIndex) => activeIndex - 1);
	};
	const handleClickNext = () => {
		setActiveIndex((activeIndex) => activeIndex + 1);
	};
	const handleClickStart = () => {
		setActiveIndex(0);
	};

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
	const isFirstStep = activeIndex === 0;
	const isLastStep = steps.length === activeIndex + 1;

	// Используя их в JSX разметке, можно выводить соответствующий контент в зависимости от этих двух условий. Например, блокировать кнопку Назад на первом шаге. Для определения значений этих переменных можно использовать массив steps и активный индекс activeIndex.

	// Вывод списка шагов. Шаги необходимо вывести циклично с помощью массива steps. CSS-класс styles['steps-item'] должен быть у всех шагов. Класс styles.active только у текущего активного шага, а styles.done у всех тех, которые были выполнены и также у активного. Для налядности можете взглянуть, как добавлены эти классы сейчас в компоненте App. Вам нужно будет сделать так, чтобы эти классы добавлялись автоматически в зависимости от текущего активного шага. Добавьте соответствующую проверку, когда будете выводить массив шагов. Для сравнения вам потребуется активный индекс (activeIndex) и индекс итерируемого шага (второй параметр в методе map()).

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps[activeIndex].content}</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
							<li
								className={
									styles['steps-item'] +
									(index < activeIndex ? ' ' + styles.done : '') +
									(index === activeIndex ? ' ' + styles.active : '')
								}
								key={step.id}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>
								{step.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={isFirstStep}
							onClick={handleClickBack}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={isLastStep ? handleClickStart : handleClickNext}
						>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
