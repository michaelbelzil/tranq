function play(){
  var audio = document.getElementById("audio");

  if (audio.ended) {
    audio.currentTime = 0
    audio.play();
  }
  else if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

