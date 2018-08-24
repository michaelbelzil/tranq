$('.sign-in-container').addClass('selected');

(function () {
  $('.sign-up-container').on('click', function() {

    if ( $( ".sign-in-container" ).is( ".selected" ) ) {
    $('.sign-up-container').toggleClass('selected');
    $('.sign-in-container').toggleClass('selected');
    }

  })

})();

(function () {
  $('.sign-in-container').on('click', function() {

    if ( $( ".sign-up-container" ).is( ".selected" ) ) {
    $('.sign-up-container').toggleClass('selected');
    $('.sign-in-container').toggleClass('selected');
    }

  })

})();
