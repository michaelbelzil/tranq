const allNavbarParts =  document.querySelectorAll(".navbar__specific > .navbar__specific--decorate");
allNavbarParts.forEach((navbarPart) => {
  navbarPart.addEventListener("mouseenter", (event) => {
    const typeName = event.target.dataset.type;

    const areaOnTranq = document.querySelector(".space .toolbar__item--" + typeName);

    areaOnTranq.classList.add("hover-on-tranq");
  });

  navbarPart.addEventListener("mouseleave", (event) => {
    const typeName = event.target.dataset.type;

    const areaOnTranq = document.querySelector(".space .toolbar__item--" + typeName);

    areaOnTranq.classList.remove("hover-on-tranq");
  });
});
