let timeCounter = 0;

setInterval(() => {
  timeCounter++;

  if (timeCounter % 100 == 0 || time === "day") {
    var oldHealth = parseInt(health.style.width.replace("%", ""));
    var newHealth = oldHealth - 1;
    health.style.width = `${newHealth}%`;
    if (newHealth >= 75) {
      health.classList.remove(health.classList[1])
      health.classList.add("progress-bar-success")
    } else if (newHealth >= 50) {
      health.classList.remove(health.classList[1])
      health.classList.add("progress-bar-info")
    } else if (newHealth >= 25) {
      health.classList.remove(health.classList[1])
      health.classList.add("progress-bar-warning")
    } else if (newHealth < 25) {
      health.classList.remove(health.classList[1])
      health.classList.add("progress-bar-danger")
      if(newHealth == 0) {
        $(".points__house").html() = Number($(".points__house").html())*0.8;
      }
    }
  }
}, 10000)
