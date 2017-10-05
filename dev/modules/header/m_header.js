function mobileMenu() {
  $('.btn-mobile-menu').on('click', function(){
    $(this).toggleClass('is-open');
    $('.menu').toggleClass('is-open');
  });
}
mobileMenu();