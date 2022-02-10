(function ($) {
	// Preloader
	// $(window).on('load', function () {
	//     if ($('.loader').length) {
	//       $('.loader').delay(100).fadeOut('slow', function () {
	//         $(this).remove();
	//       });
	//     }
	// });
	$('.owl-carousel-partners').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed: 2000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: false,
		nav: false,
		responsiveClass:true,
		responsive:{
			1366:{
				items:11,
			},
			1024:{
				items:8,
                dots: true,
			},
			768:{
				items:6,
                dots: true,
			},
			0:{
				items:4,
                dots: true,
			}
		}
	})
})(jQuery);