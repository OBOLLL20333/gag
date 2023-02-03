$(function () {
	$('.header__btn').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu--close');
	});
	$('.rightside-menu__close').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu--close');
	});

	$('.header__btn-menu').on('click', function () {
		$('.menu').toggleClass('menu--open');
	});

	if ($(window).width() < 651) {
		$('.works-path__item--measuring').appendTo($('.works-path__items-box'));
	};

	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
	});

	$('.contact-slider').slick({
		slidesToShow: 10,
		slidesToScroll: 10,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 8,
				}
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 585,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
				}
			},
			{
				breakpoint: 455,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	$('.article-slider__box').slick({
		prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="images/arrow-right.svg" alt=""></button>',
	});

	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living'
		}
	});
})

