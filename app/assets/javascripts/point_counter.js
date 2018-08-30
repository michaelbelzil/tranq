function pointCounter(begin) {
    $('.points__house').each(function () {
      $(this).prop('Counter',begin).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
}
