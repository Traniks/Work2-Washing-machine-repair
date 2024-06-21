document.addEventListener('DOMContentLoaded', () => {

	const accordions = document.querySelectorAll('.question__accordeon')
	
	accordions.forEach(accordion => {
		const head = accordion.querySelector('.question__acc-head')
		const body = accordion.querySelector('.question__acc-body')
	
		const arrow = accordion.querySelector('.arrow__box')
	
		accordion.addEventListener('click', () => {
			body.classList.toggle('question__acc-body_active')
			arrow.classList.toggle('arrow__box_active')
		})
	})
})