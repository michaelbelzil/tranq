var dayToggle = document.getElementById("toggle-day");
var nightToggle = document.getElementById("toggle-night");
var overlay = document.getElementById("overlay");
var showWrapper = document.querySelector(".show-wrapper");

nightToggle.addEventListener("click", function() {
    time = "day";

    showWrapper.classList.remove("tucked-true");
    showWrapper.classList.add("tucked-false");

    nightToggle.classList.add("d-none");
    dayToggle.classList.remove("d-none");

})

dayToggle.addEventListener("click", function() {
    time = "night";

    showWrapper.classList.remove("tucked-false");
    showWrapper.classList.add("tucked-true");

    dayToggle.classList.add("d-none");
    nightToggle.classList.remove("d-none");

})
