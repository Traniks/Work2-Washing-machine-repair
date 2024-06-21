document.addEventListener('DOMContentLoaded', () => {
    const Items = document.querySelectorAll('.get__price-popup')
	const modal = document.getElementById('modal-prise')
	const modalTitle = modal.querySelector('#modal-prise .modalbox__intro h1')

    console.log(modalTitle)

    const titles = [
		"Won't Turn On",
		'Leaking',
		"Won't Spin",
		'Vibration or Noise',
		'Error on Display',
		'Not Draining',
		"Door Won't Lock/Unlock",
		'Overheating',
		'Smell or Smoke',
	]

	Items.forEach(item => {
		item.addEventListener('click', () => {
			const position = item.getAttribute('data-position')
			modalTitle.textContent = titles[position - 1]
		})
	})
});