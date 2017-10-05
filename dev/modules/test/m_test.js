function parallaxImages() {
  $('.step-test.is-current, .m_intro').hover(
      function(){
          $(this).parallaxify({
            horizontalParallax: true,
            verticalParallax: true,
            parallaxBackgrounds: false,
            parallaxElements: true,
            positionProperty: 'transform',
            responsive: true,
            useMouseMove: true,
            useGyroscope: true,
            alphaFilter: 0.9,
            motionAngleX: 45,
            motionAngleY: 45,
            motionType: 'natural',
            mouseMotionType: 'performance'
          });
      },
      function(){
          $(this).parallaxify('destroy');
          var $this = $(this);
          $(this).addClass('background-anim-out');
          setTimeout(function() {
            $this.removeClass('background-anim-out');
          },400);
          $(this).find('.backgrounds > div').css({"transform": "translate3d(0px, 0px, 0px)"});
      }
  );
};

parallaxImages();

function parallaxIntro() {
  $('.m_intro').parallaxify({
    horizontalParallax: true,
    verticalParallax: true,
    parallaxBackgrounds: false,
    parallaxElements: true,
    positionProperty: 'transform',
    responsive: true,
    useMouseMove: true,
    useGyroscope: true,
    alphaFilter: 0.9,
    motionAngleX: 45,
    motionAngleY: 45,
    motionType: 'natural',
    mouseMotionType: 'performance'
  });
};

parallaxIntro();

$('img.for-result').fadeOut();

function stepHover() {
  $('.step-question-variant').hover(
    function(){
      var $this = $(this);
      var $value = $this.attr('data-step-variant');
      $('.variant span').each(function(){
        if ( $(this).attr('id') == $value ) {
          $(this).addClass('hovered');
        }
      });
    },
    function(){
      $('.variant span').removeClass('hovered');
    }
  );
}
stepHover();

function mainTest() {
  totalPoints = 0;
  currentQuestion = 1;

  // Начало теста
  $('.m_intro .action a').on('click', function(){
    $('.first-test-blank').show();
    $('.m_intro').fadeOut('slow', function(){
      $('.m_test').fadeIn(900);
      $('.m_intro').parallaxify('destroy');
    });
  });

  $('.step-test .action a').on('click', function(){
    var $thisImages = $(this).parents('.step-test').find('.images img');
    var $thisImagesAnswer = $(this).parents('.step-test').find('.images .answer-images img');
    if ( $(this).attr('data-status-answer') == 'true' ) {
      // Добавляем очки, если ответ правильный
      totalPoints++;
      // $.playSound('correct.mp3');
      $(this).parents('.step-test').addClass('is-correct');
    } else {
      // $.playSound('wrong.mp3');
      $(this).parents('.step-test').addClass('is-wrong');
    }
    // Показываем ответ
    $('.steps').addClass('is-open-result');
    $('.step-counter').fadeOut('600');
    $thisImages.fadeOut('200', function() {
      // $thisImages.show(0);
      // $thisImages.parent().hide();
      // $thisImages.delay(1000).fadeIn(600);
    });
    setTimeout(function(){
      $thisImagesAnswer.fadeIn(600);
    },1300);
    $(this).parents('.step-test').addClass('is-opened');

    $(this).parents('.step-test').find('.title .answer').fadeIn(900);
    $(this).parents('.step-test').find('.choose-variants').animate({'opacity':'0'},300);
    $(this).parents('.step-test').find('.choose-variants').slideUp('slow', function(){
      $(this).parents('.step-test').find('.correct-variant').delay(300).slideDown(600);
    });
  });

  // Кнопка Далее. К следующему вопросу
  $('.correct-variant .next a').on('click', function(){
    currentQuestion++;
    $('#current-step').text(currentQuestion);

    $('.first-test-blank').hide();

    if ( $(this).hasClass('done-result') ) {
      $('body').addClass('result');
      $('.m_test').fadeOut('900', function(){
        $('.m_result').fadeIn(900);
        $('.steps').removeClass('is-open-result');
        $('.step-counter').fadeIn(600);
        $('.m_result').parallaxify({
          horizontalParallax: true,
          verticalParallax: true,
          parallaxBackgrounds: false,
          parallaxElements: true,
          positionProperty: 'transform',
          responsive: true,
          useMouseMove: true,
          useGyroscope: true,
          alphaFilter: 0.9,
          motionAngleX: 45,
          motionAngleY: 45,
          motionType: 'natural',
          mouseMotionType: 'performance'
        });
        $('#total-correct-answers').text(totalPoints);
        $('.levels > div').removeClass('is-active');

        $('.submit-dish, .submit-dish .action a, .choose-dish, .choose-dish .item').removeClass('disabled');
        $('.final-dish, .submit-dish').hide();
        $('.m_gift .choose-dish.disabled .list .item').removeClass('is-current');
        if ( totalPoints <= 2) {
          $('.levels .level-0').addClass('is-active');
        } else if ( totalPoints > 2 && totalPoints <=5 ) {
          $('.levels .level-1').addClass('is-active');
        } else if ( totalPoints > 5 && totalPoints <=7 ) {
          $('.levels .level-2').addClass('is-active');
        } else if ( totalPoints > 8) {
          $('.levels .level-3').addClass('is-active');
        }
      });
    } else {
      $(this).parents('.question').fadeOut(600);
      $(this).parents('.question').prev('.images').fadeOut('600', function(){
        var $nextSection = $(this).parents('.step-test').next();
        var $thisSection = $(this).parents('.step-test');
        $(this).parents('.step-test').addClass('anim-out');
        $nextSection.addClass('is-current');
        $('.step-counter').fadeIn(600);
        $thisSection.parallaxify('destroy');
        $nextSection.parallaxify({
          horizontalParallax: true,
          verticalParallax: true,
          parallaxBackgrounds: false,
          parallaxElements: true,
          positionProperty: 'transform',
          responsive: true,
          useMouseMove: true,
          useGyroscope: true,
          alphaFilter: 0.9,
          motionAngleX: 45,
          motionAngleY: 45,
          motionType: 'natural',
          mouseMotionType: 'performance'
        });
        $('.steps').removeClass('is-open-result');
        $(this).parents('.step-test').slideUp('600', function(){
          $('.step-test').removeClass('anim-out');
          $thisSection.removeClass('is-current is-wrong is-correct is-opened');
        });
      });
    }
  });

  $('.get-gift a').on('click', function(){
    $('.m_result').fadeOut('900', function(){ $('.m_result').parallaxify('destroy'); $('.m_gift').fadeIn('900'); } )
  });

  $('.retry a').on('click', function(){
    $('.m_result, .m_gift').fadeOut('900', function() {
      $('.m_intro').fadeIn('900');
      $('.steps').removeClass('is-open-result');
      totalPoints = 0;
      currentQuestion = 1;
      $('#current-step').text(currentQuestion);
      $('.step-test').removeClass('is-current is-wrong is-correct is-opened');
      $('.step-test').eq(0).addClass('is-current');
      $('.step-test').removeAttr('style');
      $('.step-test .question, .step-test .images, .choose-variants').show();
      $('.choose-variants').animate({'opacity':'1'});
      $('.correct-variant, .step-test .question .title .answer').hide();
      $('.levels > div').removeClass('is-active');
      parallaxIntro();
    });
  });
}
mainTest();