
document.addEventListener("DOMContentLoaded", () => {
	const elementsToObserve = [
		...document.querySelectorAll('.hero__title, .header-block__title'),
		...document.querySelectorAll('.section-amenities__item'),
		...document.querySelectorAll('.atraction__item'),
		...document.querySelectorAll('.hero__logo'),
		...document.querySelectorAll('.footer__logo')
	];

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	});

	elementsToObserve.forEach(element => observer.observe(element));
});
