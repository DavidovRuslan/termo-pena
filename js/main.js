// скролл
setTimeout(function run() {

    $('#arrow').addClass('animated slideInDown');

  setTimeout(function () {

    $('#scroll-arrow').removeClass('animated slideInDown');

  }, 1000);

  setTimeout(run, 2000); // Интервал повторения

}, 2000); // Первый интервал срабатывания
$(document).ready(function(){
    $('a[href*="#"]').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});

// слайдер
$('.material-slider').slick({
	infinite: true,
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 1,
  autoplay: true,
	responsive: [
	    {
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
});


// слайдер портфолио
$('.portfolio-slider').slick({
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});





// отправка форм
