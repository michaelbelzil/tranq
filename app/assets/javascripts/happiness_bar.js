let timeCounter = 0;

setInterval(() => {
  timeCounter++;

  if (timeCounter % 10 == 0 || time === "day") {
    const oldHealth = parseInt(health.style.width.replace("%", ""));
    const newHealth = oldHealth - 1;
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
    }
  }
}, 10000)



// function healthLogic() {
//  if (event.currentTarget.id === "toggle-day")

// }
