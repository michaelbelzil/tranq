//Main tools
me = $(".navbar").data( "me");
friend = $(".navbar").data( "friend");

if (me === friend) {
  home = $('#home_option');
  console.log(home);
  home.parent().remove();
} else {
  couch = $('#decoration_option');
  couch.parent().remove();
}

$( "#feed_option" ).click(function() {
  $(".navbar__specific__item").each(function(){
    if($(this).hasClass("navbar__specific--feed")){
      $(this).css('display', 'flex');
    }else{
      $(this).hide()
    }
  });
});
$( "#decoration_option" ).click(function() {
  $(".navbar__specific__item").each(function(){
    if($(this).hasClass("navbar__specific__item--generic")){
      $(this).css('display', 'flex');
    }else{
      $(this).hide()
    }
  });
});
$( "#friend_option" ).click(function() {
  $(".navbar__specific__item").each(function(){
    if($(this).hasClass("navbar__specific--friend")){
      $(this).css('display', 'flex');
    }else{
      $(this).hide()
    }
  });
});
$( "#setting_option" ).click(function() {
  $(".navbar__specific__item").each(function(){
    if($(this).hasClass("navbar__specific--setting")){
      $(this).css('display', 'flex');
    }else{
      $(this).hide()
    }
  });
});

//Select inside decorate
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
