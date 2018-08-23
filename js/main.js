$(document).ready(function () {

                  $('.researchers').slick({
                                          centerMode: true,
                                          centerPadding: '60px',
                                          slidesToShow: 3
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

