//= require rails-ujs


//= require_tree .

const showWrapper2 = document.querySelector(".show-wrapper");

let time;

if (showWrapper2.classList.contains("tucked-true")) {
  time = "night";
} else {
  time = "day";
}

$(document).ready(function() {
  setTimeout(function() {
    $('.alert').slideUp()
  }, 10000)
})
