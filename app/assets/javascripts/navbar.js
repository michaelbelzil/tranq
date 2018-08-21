$( "#feed_option" ).click(function() {
  $(".navbar__specific__item").each(function(){
    if($(this).hasClass("navbar__specific--feed")){
      $(this).show();
    }else{
      $(this).hide()
    }
  });
});
$( "#decoration_option" ).click(function() {
  $(".navbar__specific__item").each(function(){
    if($(this).hasClass("navbar__specific--decorate")){
      $(this).show();
    }else{
      $(this).hide()
    }
  });
});
$( "#friend_option" ).click(function() {
  $(".navbar__specific__item").each(function(){
    if($(this).hasClass("navbar__specific--friend")){
      $(this).show();
    }else{
      $(this).hide()
    }
  });
});
$( "#setting_option" ).click(function() {
  $(".navbar__specific__item").each(function(){
    if($(this).hasClass("navbar__specific--setting")){
      $(this).show();
    }else{
      $(this).hide()
    }
  });
});
