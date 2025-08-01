document.addEventListener("DOMContentLoaded", function () {

	document.addEventListener("click", function (e) {
		const targetElement = e.target;
		if (targetElement.closest('.menu-icon')) {
			document.documentElement.classList.toggle('menu-open');
			e.preventDefault();
		}
	});

	const header = document.querySelector('.header');

	window.addEventListener('scroll', function () {
		scrollY > 0 ? header.classList.add('scroll') : header.classList.remove('scroll');
	});


	const reviewsSwiper = document.querySelector('.swiper-reviews');

	if (reviewsSwiper) {
		const swiper = new Swiper('.swiper-reviews', {
			// Optional parameters
			autoHeight: true,
			loop: true,
			// Navigation arrows
			navigation: {
				nextEl: '.swiper-reviews__button-next',
				prevEl: '.swiper-reviews__button-prev',
			},
		});
	}

	const accordionItems = document.querySelectorAll(".accordion__item");

	accordionItems.forEach((item) => {
		const trigger = item.querySelector(".accordion__header");
		const content = item.querySelector(".accordion__text");

		trigger.addEventListener("click", () => {
			const isActive = item.classList.contains("active");

			accordionItems.forEach((el) => {
				el.classList.remove("active");
				const text = el.querySelector(".accordion__text");
				text.style.maxHeight = null;
				text.classList.remove("active");
			});

			if (!isActive) {
				item.classList.add("active");
				content.classList.add("active");
				content.style.maxHeight = content.scrollHeight + "px";
			}
		});
	});

	const firstItem = accordionItems[0];
	if (firstItem) {
		const content = firstItem.querySelector(".accordion__text");
		firstItem.classList.add("active");
		content.classList.add("active");
		content.style.maxHeight = content.scrollHeight + "px";
	}


});