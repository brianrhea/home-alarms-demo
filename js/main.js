$(document).ready(function () {

  $('.researchers').on('swipe', function(event, slick, direction){
    console.log(event);
    console.log(slick);
  });

  $('.researchers').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    if ( nextSlide === 0 ) {
      $(".map__map").attr('src', "/img/map__us-mexico.svg").css({'top': '170px', 'right': '-1120px', 'transform': 'scale(2.5)'});
    }
    if ( nextSlide === 3 ) {
      $(".map__map").attr('src', "/img/map__eastern-europe.svg").css({'top': '410px', 'right': '100px', 'transform': 'scale(3.5)'});
    }
    if ( nextSlide === 6 ) {
      $(".map__map").attr('src', "/img/map__us-mexico.svg").css({'top': '170px', 'right': '-1120px', 'transform': 'scale(2.5)'});
    }
    if ( nextSlide === 9 ) {
      $(".map__map").attr('src', "/img/map__western-europe.svg").css({'top': '370px', 'right': '-50px', 'transform': 'scale(3.5)'});
    }
    if ( nextSlide === 12 ) {
      $(".map__map").attr('src', "/img/map__british.svg").css({'top': '730px', 'right': '-320px', 'transform': 'scale(5)'});
    }
    if ( nextSlide === 15 ) {
      $(".map__map").attr('src', "/img/map__canada.svg").css({'top': '420px', 'right': '-800px', 'transform': 'scale(2)'});
    }
  });

  $('.researchers').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  var $slider = $('.testimonials__container');
  var timeout;

  $slider.slick({
    dots: true,
    centerMode: false,
    variableWidth: true,
    slidesToShow: 1,
    mobileFirst: true,  // We approach the configuration as it was for the smallest screen
    respondTo: 'slider',
    responsive: [
      { // Incrementally apply different configurations for other higher screen sizes
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1
        }
      },
    ]
  });

  /**
   * This fixes the fact that the slide will move after resizing the viewport. (https://github.com/kenwheeler/slick/issues/429)
   * Usually resizing doesn't happen, but if the user does it he will not the slide has moved towards a side. This centers the slide
   *
   */
  $(window).resize(function() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function() {
      $slider.slick('slickGoTo', 0);
    }, 50);
  });
});

