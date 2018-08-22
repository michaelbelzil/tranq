$( ".toolbar__item").each(function() {
  $(this).on("click", function(event){
    $(event.target).removeClass(function (index, classNames) {
      var current_classes = classNames.split(" ");

      // console.log(current_classes);

      classes_to_remove = [];
      $.each(current_classes, function (index, class_name) {
        if (/toolbar__item--.*/.test(class_name)) {
          $(".space ." + this).remove();
        }
      });
      // turn the array back into a string
      // console.log(classes_to_remove.join(" "));
      return classes_to_remove.join(" ");
    });

    var $img = $(event.currentTarget).clone();
    console.log($img)
    $(".added__items").append($img);
  });
});
