//Main tools
me = $(".navbar").data( "me");
friend = $(".navbar").data( "friend");

// Couch / House button toggle
if (me === friend) {
  home = $('#home_option');
  home.parent().remove();
} else {
  couch = $('#decoration_option');
  couch.parent().remove();
}

// Filter navbar items according to mode
$( "#feed_option" ).click(function() {
  $(".navbar__specific__item").each(function(){
    if($(this).hasClass("navbar__specific--feed")){
      $(this).css('display', 'flex');
    }else{
      $(this).hide()
    }
  });

  $(".navbar__list").find("a").removeClass("hilite");
  $(this).addClass("hilite");

});
$( "#decoration_option" ).click(function() {
  $(".navbar__specific__item").each(function(){
    if($(this).hasClass("navbar__specific__item--generic")){
      $(this).css('display', 'flex');
    }else{
      $(this).hide()
    }
  });
  $(".navbar__list").find("a").removeClass("hilite");
  $(this).addClass("hilite");
});
$( "#friend_option" ).click(function() {
  $(".navbar__specific__item").each(function(){
    if($(this).hasClass("navbar__specific--friend")){
      $(this).css('display', 'flex');
    }else{
      $(this).hide()
    }
  });
  $(".navbar__list").find("a").removeClass("hilite");
  $(this).addClass("hilite");
});

// This code highlights the pencil icon when the modal is opened
// $( "#draw_option" ).click(function() {
//   $(".navbar__list").children().removeClass("hilite");
//   $(this).parent().addClass("hilite");
// });

//Select items from decorate mode categories
$( ".navbar__specific__item--generic" ).each(function() {
    $(this).on("click", function(){
      str = $(this).attr('class').match(/navbar__specific__item--generic-[\w-][\w-]*\b/)[0].split("--")[2];
      className = ".navbar__specific__item--" + str;
      $(className).each(function(){
        $(this).css('display', 'flex');
      });
      $(".navbar__specific__item--generic").each(function(){
        $(this).hide();
      })
    });
});
