var allNavbarParts =  document.querySelectorAll(".navbar__specific > .navbar__specific--decorate");
allNavbarParts.forEach((navbarPart) => {
  navbarPart.addEventListener("mouseenter", (event) => {
    var typeName = event.target.dataset.type;

    var areaOnTranq = document.querySelector(".space .toolbar__item--" + typeName);

    areaOnTranq.classList.add("hover-on-tranq");
  });

  navbarPart.addEventListener("mouseleave", (event) => {
    var typeName = event.target.dataset.type;

    var areaOnTranq = document.querySelector(".space .toolbar__item--" + typeName);

    areaOnTranq.classList.remove("hover-on-tranq");
  });
});
