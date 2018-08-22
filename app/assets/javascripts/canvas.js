function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
          $('#blah')
              .attr('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
  }
  convertImageToCanvas($('#blah'));
}


function convertImageToCanvas(image) {
  var canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  canvas[0].getContext("2d").drawImage($(image)[0], 0, 0);
  var myimg = document.getElementById('canvas');
  myimg.insertAdjacentHTML("afterend", canvas);
}

$("#myModal").on('show', function(){
  console.log("I want this to appear after the modal has opened!");
});
  var el = document.getElementById('canvas');
  var ctx = el.getContext('2d');
  var isDrawing;

  el.onmousedown = function(e) {
    isDrawing = true;
    ctx.lineWidth = 10;
    ctx.lineJoin = ctx.lineCap = 'round';

    var mouseX = e.clientX - this.offsetLeft - $(".modal-dialog").offset().left;
    var mouseY = e.clientY - this.offsetTop - $(".modal-dialog").offset().top - $(".modal-header").outerHeight();
    ctx.moveTo(mouseX, mouseY);
  };
  el.onmousemove = function(e) {
    if (isDrawing) {
      var mouseX = e.clientX - this.offsetLeft - $(".modal-dialog").offset().left;
      var mouseY = e.clientY - this.offsetTop - $(".modal-dialog").offset().top - $(".modal-header").outerHeight();
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
    }
  };
  el.onmouseup = function() {
    isDrawing = false;
  };

  /////////////////////////////////////////////
  ///      SCALABLE CANVAS DRAWING APP      ///
  /////////////////////////////////////////////


  ///---INITIATION---///

  //primary variables



  var container = document.getElementById("container_div");
  var sliderTrack = document.getElementById("slider_track");
  var slider = document.getElementById("slider");
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  //prep slider
  var mouseX;
  var sliderLeft = $("#slider").position().left;
  var sliderLeftMin = sliderLeft;
  var sliderLeftMax = sliderLeft + $("#slider_track").width()*.965;
  var currentlySliding = false;

  //prep canvas for downloads with a white background
  clearCanvas();

  //prep markers
  var markerWidth = 2;  // min = 2, max = 100
  ctx.lineWidth = markerWidth;

  //colors
  var colors = document.getElementsByClassName("color");  //an HTMLCollection of .class elements
  var currentColor = "black";

  //prep drawing
  var currentlyDrawing = false;



  ///---FUNCTIONS---///


  //slider
  function grab_slider(e) {
    mouseX = e.pageX;
    currentlySliding = true;
  }

  function drag_slider(e) {
    if (currentlySliding) {
      var mouseXChange = e.pageX - mouseX;
      if (sliderLeft + mouseXChange < sliderLeftMin) {
        slider.style.left = sliderLeftMin + "px";
      } else if (sliderLeft + mouseXChange > sliderLeftMax) {
        slider.style.left = sliderLeftMax + "px";
      } else {
        slider.style.left = (sliderLeft + mouseXChange) + "px";
      };
    }
  }

  function drop_slider(e) {
    sliderLeft = $("#slider").position().left;
    updateMarker();
    currentlySliding = false;
  }

  function updateMarker() {
    //converts slider position to a proportional marker width of 2px-100px
    markerWidth = (sliderLeft-sliderLeftMin)*98/(sliderLeftMax-sliderLeftMin-sliderLeftMin)+2;
    ctx.lineWidth = markerWidth;
  }

  //colors
  function bindColors() {
    for (i = 0; i < colors.length; i++) {
      colors[i].addEventListener('click', selectColor);
    }
  }

  function selectColor(e) {
    currentColor = e.target.style.background;
  }

  //drawing
  function markerDown(e) {
    currentlyDrawing = true;
    ctx.beginPath();
    ctx.fillStyle = currentColor;
    ctx.fill();
    ctx.beginPath();
  }

  function draw(e) {
    if(currentlyDrawing) {
      ctx.strokeStyle = currentColor;
      ctx.fillStyle = currentColor;
      ctx.stroke();
      ctx.beginPath();
      ctx.fill();
      ctx.beginPath();
    }
  }

  function markerUp(e) {
    currentlyDrawing = false;
  }

  //image actions
  function downloadImage() {
    var image = canvas.toDataURL("image/png");
    var download = document.getElementById("download");
    download.href = image;
    download.download = 'drawing.png';
  }

  function clearCanvas() {
    ctx.fillStyle = "transparent";
    ctx.fillRect(0,0,canvas.width, canvas.height);
  }
  function uploadImage() {
    var image = canvas.toDataURL("image/png");
    var download = document.getElementById("download");
    download.href = image;
    download.download = 'drawing.png';
  }


  function saveCanvas() {
    ctx.fillStyle = "transparent";
    ctx.fillRect(0,0,canvas.width, canvas.height);
  }


  ///---EVENTS---///

  //slider
  slider.addEventListener("mousedown", grab_slider);
  document.addEventListener("mousemove", drag_slider);
  document.addEventListener("mouseup", drop_slider);

  slider.addEventListener("touchstart", grab_slider);
  document.addEventListener("touchmove", drag_slider);
  document.addEventListener("touchend", drop_slider);

  //color selection
  bindColors();

  //drawing
  canvas.addEventListener("mousedown", markerDown);
  canvas.addEventListener("mousemove", draw);
  document.addEventListener("mouseup", markerUp);

  canvas.addEventListener("touchstart", markerDown);
  canvas.addEventListener("touchmove", draw);
  document.addEventListener("touchend", markerUp);

  //image actions
  document.getElementById("download").addEventListener('click', downloadImage);
  document.getElementById("clear").addEventListener('click', clearCanvas);
  document.getElementById("upload").addEventListener('click', uploadImage);
  document.getElementById("save").addEventListener('click', saveCanvas);
