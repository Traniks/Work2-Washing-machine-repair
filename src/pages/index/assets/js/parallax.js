document.addEventListener('DOMContentLoaded', () => {
	const items = document.querySelectorAll('.head__item')

	// Функция для обработки движения мыши
	function handleMouseMove(event) {
		const { clientX: mouseX, clientY: mouseY } = event
		const { innerWidth: windowWidth, innerHeight: windowHeight } = window

		const offsetX = (mouseX - windowWidth / 2) / windowWidth
		const offsetY = (mouseY - windowHeight / 2) / windowHeight

		items.forEach((item, index) => {
			const speed = (index + 20) / 10 // Чем больше индекс, тем больше смещение
			const moveX = offsetX * 20 * speed
			const moveY = offsetY * 20 * speed

			item.style.transform = `translate(${moveX}px, ${moveY}px)`
		})
	}

	// Добавляем обработчик событий
	window.addEventListener('mousemove', handleMouseMove)
})
