function gift() {
  var $item = $('.choose-dish .item');
  fcz = false;
  $item.on('click', function() {
    if ( !$(this).hasClass('disabled') ) {
      var $eq = $(this).index();
      var $dishSubmit = $('.submit-dish');
      $item.removeClass('is-current');
      $(this).addClass('is-current');

      $('.final-dish .title').html($(this).attr('data-gift-final-title'));

      if ( fcz == true ) {
        $dishSubmit.fadeOut('300', function(){
          $dishSubmit.find('.desc div').hide();
          $dishSubmit.fadeIn('300');
          $dishSubmit.find('.desc div').eq($eq).fadeIn('0');
        });
      } else {
        $dishSubmit.fadeIn('300');
        $dishSubmit.find('.desc div').eq($eq).fadeIn('0', function() {
          fcz = true;
        });
      }
    } else {
      return false;
    }
  });

  $('.submit-dish .action a').on('click', function() {
    if ( $(this).hasClass('disabled') ) {
      return false;
    } else {
      $('.submit-dish, .submit-dish .action a, .choose-dish, .choose-dish .item').addClass('disabled');
      $('.final-dish').fadeIn('300');
    }
  });
}
gift();