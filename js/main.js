$(document).ready(function () {

  $('.testimonials__container').on('click', '.slick-slide', function (e) {
    e.stopPropagation();
    var index = $(this).data("slick-index");
    if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
      $('.slick-slider').slick('slickGoTo', index);
    }
  });

  var $testimonials__slider = $('.testimonials__container');
  var timeout;

  if ( $testimonials__slider.length ) {
    $testimonials__slider.slick({
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
  }

  $('.testimonials__nav .slick__prev').on('click', function(){
    $testimonials__slider.slick('slickPrev');
  });

  $('.testimonials__nav .slick__next').on('click', function(){
    $testimonials__slider.slick('slickNext');
  });

  /**
   * This fixes the fact that the slide will move after resizing the viewport. (https://github.com/kenwheeler/slick/issues/429)
   * Usually resizing doesn't happen, but if the user does it he will not the slide has moved towards a side. This centers the slide
   *
   */
  $(window).resize(function() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function() {
      $testimonials__slider.slick('slickGoTo', 0);
    }, 50);
  });

  $('.researchers').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    if ( nextSlide === 0 ) {
      $(".map__map").attr('src', "/img/map__us-mexico.svg").removeClass().addClass('map__map map__us-mexico');
    }
    if ( nextSlide === 3 ) {
      $(".map__map").attr('src', "/img/map__eastern-europe.svg").removeClass().addClass('map__map map__eastern-europe');
    }
    if ( nextSlide === 6 ) {
      $(".map__map").attr('src', "/img/map__us-mexico.svg").removeClass().addClass('map__map map__us-mexico');
    }
    if ( nextSlide === 9 ) {
      $(".map__map").attr('src', "/img/map__western-europe.svg").removeClass().addClass('map__map map__western-europe');
    }
    if ( nextSlide === 12 ) {
      $(".map__map").attr('src', "/img/map__british.svg").removeClass().addClass('map__map map__british');
    }
    if ( nextSlide === 15 ) {
      $(".map__map").attr('src', "/img/map__canada.svg").removeClass().addClass('map__map map__canada');
    }
  });

  var $researchers__slider = $('.researchers');

  if ( $researchers__slider.length ) {
    $researchers__slider.slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,  // We approach the configuration as it was for the smallest screen
      appendArrows: ".researchers__nav",
      appendDots: ".researchers__nav",
      responsive: [
        { // Incrementally apply different configurations for other higher screen sizes
          breakpoint: 992,
          settings: {
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
      ]
    });
  }

  $('.researchers__nav .slick__prev').on('click', function(){
    $researchers__slider.slick('slickPrev');
  });

  $('.researchers__nav .slick__next').on('click', function(){
    $researchers__slider.slick('slickNext');
  });

  $('#toggle-mobile-menu').on('click', function(){
    $('#mobile-menu').toggleClass('in');
    $('.menu__image').toggleClass('in');
  });

});

