$(function() {
    $('a[href="#"]').click(function(e){
      e.preventDefault();
    });
    $.extend(true, $.magnificPopup.defaults, {
      tClose: 'Закрыть (Esc)', // Alt text on close button
      tLoading: 'Loading...', // Text that is displayed during loading. Can contain %curr% and %total% keys
      gallery: {
        tPrev: 'Previous (Left arrow key)', // Alt text on left arrow
        tNext: 'Next (Right arrow key)', // Alt text on right arrow
        tCounter: '%curr% of %total%' // Markup for "1 of 7" counter
      },
      image: {
        tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
      },
      ajax: {
        tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
      }
    });
    $('.popup-promo').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    $('#send-qr').on('submit', function(){
      $('#popup-send-qr-call').trigger('click');
      return false;
    });

    //=include modules.js
});