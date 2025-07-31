
document.addEventListener("DOMContentLoaded", function () {


	document.addEventListener("click", function (e) {
		const targetElement = e.target;
		if (targetElement.closest('.menu-icon')) {
			document.documentElement.classList.toggle('menu-open');
			e.preventDefault();
		}
	});


	document.querySelectorAll('.room__item').forEach(item => {
		item.addEventListener('click', () => {
			item.classList.toggle('active');
		});
	});

	// Swiper
	const reviewsSwiper = document.querySelector('.swiper-review');
	if (reviewsSwiper) {
		new Swiper('.swiper-review', {
			autoHeight: true,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
		});
	}

	// up
	const btn = document.querySelector('.scroll-to-top');
	if (btn) {
		window.addEventListener('scroll', () => {
			const footer = document.getElementById('footer');
			if (footer) {
				btn.style.display = footer.getBoundingClientRect().top <= window.innerHeight ? 'block' : 'none';
			}
		});

		btn.addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}

	// animation
	const images = document.querySelectorAll(".about__picture img, .activities__picture img, .item__image img, .item__row");

	if (images.length > 0) {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.3 });

		images.forEach((img) => observer.observe(img));
	}
});
