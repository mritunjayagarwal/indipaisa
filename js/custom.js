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

(function ($) {
	// Preloader
	// $(window).on('load', function () {
	//     if ($('.loader').length) {
	//       $('.loader').delay(100).fadeOut('slow', function () {
	//         $(this).remove();
	//       });
	//     }
	// });
	$('.owl-carousel-community').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:10,
		smartSpeed: 2000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: false,
		nav: false,
		responsiveClass:true,
		responsive:{
			1366:{
				items:1.5,
			},
			1024:{
				items:1.5,
                dots: true,
			},
			768:{
				items:1.5,
                dots: true,
			},
			0:{
				items:1,
                dots: true,
			}
		}
	})
})(jQuery);

(function ($) {
	// Preloader
	// $(window).on('load', function () {
	//     if ($('.loader').length) {
	//       $('.loader').delay(100).fadeOut('slow', function () {
	//         $(this).remove();
	//       });
	//     }
	// });
	$('.owl-carousel-blog').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:10,
		paginationSpeed: 400,
		dots: false,
		touchDrag  : true,
		mouseDrag  : true,
		nav: false,
		responsiveClass:true,
		responsive:{
			1366:{
				items:1,
			},
			1024:{
				items:1,
                dots: true,
			},
			768:{
				items:1,
                dots: true,
			},
			0:{
				items:1,
                dots: true,
			}
		}
	})
})(jQuery);

/* Become partners success stories */

(function ($) {
	// Preloader
	// $(window).on('load', function () {
	//     if ($('.loader').length) {
	//       $('.loader').delay(100).fadeOut('slow', function () {
	//         $(this).remove();
	//       });
	//     }
	// });
	$('.owl-carousel-stories').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:10,
		paginationSpeed: 400,
		dots: true,
		touchDrag  : true,
		mouseDrag  : true,
		nav: false,
		responsiveClass:true,
		responsive:{
			1366:{
				items:2,
			},
			1024:{
				items:2,
                dots: true,
			},
			768:{
				items:2,
                dots: true,
			},
			0:{
				items:1,
                dots: true,
			}
		}
	})
})(jQuery);

(function ($) {
	// Preloader
	// $(window).on('load', function () {
	//     if ($('.loader').length) {
	//       $('.loader').delay(100).fadeOut('slow', function () {
	//         $(this).remove();
	//       });
	//     }
	// });
	$('.owl-carousel-new').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:10,
		paginationSpeed: 400,
		autoplay: true,
        autoplayTimeout: 5000,
		smartSpeed: 1000,
		dots: true,
		touchDrag  : true,
		mouseDrag  : true,
		nav: false,
		responsiveClass:true,
		responsive:{
			1366:{
				items:1,
			},
			1024:{
				items:1,
                dots: true,
			},
			768:{
				items:1,
                dots: true,
			},
			0:{
				items:1,
                dots: true,
			}
		}
	})
})(jQuery);

(function ($) {

$('.owl-carousel-comm').owlCarousel({
	loop:true,
	lazyLoad:true,
	margin:10,
	paginationSpeed: 400,
	autoplay: true,
	autoplayTimeout: 5000,
	smartSpeed: 1000,
	dots: false,
	touchDrag  : true,
	mouseDrag  : true,
	nav: false,
	responsiveClass:true,
	responsive:{
		1366:{
			items:4,
		},
		1024:{
			items:4,
			dots: true,
		},
		768:{
			items:1,
			dots: true,
		},
		0:{
			items:1,
			dots: true,
		}
	}
})
})(jQuery);

/**
   * Initiate  glightbox 
   */
 const glightbox = GLightbox({
    selector: '.glightbox'
  });

