$('#draw_tool').on('click', function (e) {
    setTimeout(function(){

      //primary variables
      var container = document.getElementById("container_div");
      var sliderTrack = document.getElementById("slider_track");
      var slider = document.getElementById("slider");
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      var currentlyDrawing;
      var currentlySliding;

      //prep slider
      var mouseX;
      var sliderLeft = 9;

      var sliderLeftMin = 9;
      var sliderLeftMax = 9 + $("#slider_track").width();

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
        markerWidth = (sliderLeft-sliderLeftMin)*50/(sliderLeftMax-sliderLeftMin-sliderLeftMin)+2;
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
        var canvasX = e.clientX - this.offsetLeft - $(".modal-dialog").offset().left;
        var canvasY = e.clientY - this.offsetTop - $(".modal-dialog").offset().top;
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, markerWidth/2, 0, Math.PI * 2);
        ctx.fillStyle = currentColor;
        ctx.fill();
        ctx.beginPath();
      }

      function draw(e) {
        var canvasX = e.clientX - this.offsetLeft - $(".modal-dialog").offset().left;
        var canvasY = e.clientY - this.offsetTop - $(".modal-dialog").offset().top;
        if(currentlyDrawing) {
          ctx.strokeStyle = currentColor;
          ctx.fillStyle = currentColor;
          ctx.lineTo(canvasX, canvasY);
          ctx.stroke();

          ctx.arc(canvasX, canvasY, markerWidth/2, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(canvasX, canvasY);
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      function uploadImage() {
        var image = canvas.toDataURL("image/png");
        var download = document.getElementById("download");
        download.href = image;
        download.download = 'drawing.png';
      }


      function saveCanvas() {
        var url = canvas.toDataURL();
        $('#photo').val(url);
        $("#submit_modal").trigger('click');
      }

      // Upload image
      function readURL() {
        if (this.files && this.files[0]) {
          var oImg = document.createElement("img");
          var reader = new FileReader();
          reader.onload = function (e) {
            oImg.setAttribute('src', e.target.result);

          };
          reader.readAsDataURL(this.files[0]);
        }
        setTimeout(function(){ convertImageToCanvas(oImg); }, 100);

      }


      // Create canvas
      function convertImageToCanvas(image) {
        var originalCanvas = document.getElementById('canvas');
        var canvas = document.createElement("canvas");
        canvas.width = originalCanvas.width;
        canvas.height = originalCanvas.height;

        canvas.getContext("2d").drawImage($(image)[0], 0, 0);
        var destCtx =  originalCanvas.getContext('2d');

        //call its drawImage() function passing it the source canvas directly
        destCtx.drawImage(canvas, 0, 0);
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

      // Upload image

      document.getElementById("upload-photo").addEventListener("change", readURL);

    }, 300);
});
