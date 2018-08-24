const dayToggle = document.getElementById("toggle-day");
const nightToggle = document.getElementById("toggle-night");
const overlay = document.getElementById("overlay");

nightToggle.addEventListener("click", function() {
    document.body.classList.remove("night");
    document.body.classList.add("day");
    nightToggle.classList.add("d-none");
    dayToggle.classList.remove("d-none");
    overlay.style.opacity = 0;
})
dayToggle.addEventListener("click", function() {
    document.body.classList.remove("day");
    document.body.classList.add("night");
    dayToggle.classList.add("d-none");
    nightToggle.classList.remove("d-none");
    overlay.style.opacity = 1;
})
