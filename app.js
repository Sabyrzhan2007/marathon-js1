const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
	slide.addEventListener('click', () => {
		clearActiveClsses()

		slide.classList.add('active')
	})
}

function clearActiveClsses() {
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}