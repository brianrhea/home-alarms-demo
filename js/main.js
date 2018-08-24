$(document).ready(function () {

  $('.testimonials__container').on('click', '.slick-slide', function (e) {
    e.stopPropagation();
    var index = $(this).data("slick-index");
    if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
      $('.slick-slider').slick('slickGoTo', index);
    }
  });

  var $testimonails__slider = $('.testimonials__container');
  var timeout;

  $testimonails__slider.slick({
    dots: true,
    arrows: true,
    centerMode: false,
    variableWidth: true,
    slidesToShow: 1,
    mobileFirst: true,  // We approach the configuration as it was for the smallest screen
    respondTo: 'slider',
    appendArrows: ".testimonials__nav",
    appendDots: ".testimonials__nav",
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

  $('.slick__prev').on('click', function(){
    $testimonails__slider.slick('slickPrev');
  });

  $('.slick__next').on('click', function(){
    $testimonails__slider.slick('slickNext');
  });

  /**
   * This fixes the fact that the slide will move after resizing the viewport. (https://github.com/kenwheeler/slick/issues/429)
   * Usually resizing doesn't happen, but if the user does it he will not the slide has moved towards a side. This centers the slide
   *
   */
  $(window).resize(function() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function() {
      $testimonails__slider.slick('slickGoTo', 0);
    }, 50);
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

  var $researchers__slider = $('.researchers');

  $researchers__slider.slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

});

