document.addEventListener("DOMContentLoaded", function() {

//------------------------slider-hero-----------------------------------
	var swiper = new Swiper('.hero', {
		slidesPerView: 1,
		spaceBetween: 30,
		effect: 'fade',
		// autoplay: {
		// 	delay: 5500,
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: '.hero__button_next',
			prevEl: '.hero__button_prev',
		},
	});

//------------------------slider-hero-----------------------------------
	var swiper = new Swiper('.partners__slider', {
		slidesPerView: 1,
		spaceBetween: 30,
		navigation: {
			nextEl: '.partners__button_next',
			prevEl: '.partners__button_prev',
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 1,
				spaceBetween: 20
			},
		}
	});

//-------------------------------попандер---------------------------------------
	// $('.modal').popup({transition: 'all 0.3s'});

//------------------------------гамбургер-----------------------------
	$('.hamburger').click(function() {
	  $(this).toggleClass('hamburger--active');
	  $('.nav').toggleClass('nav--active');
	  $('body').toggleClass('no-scroll');
	});


});
