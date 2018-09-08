var currentColor = "black";

$('#draw_tool').on('click', function (e) {
    document.getElementById("canvas").classList.remove("delete");
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
      sliderLeft = $("#slider").position().left;
        updateMarker();

      //colors
      var colors = document.getElementsByClassName("color");  //an HTMLCollection of .class elements

      //prep drawing
      var currentlyDrawing = false;


      ///---FUNCTIONS---///

      //slider
      function grabSlider(e, laptop) {
        if (laptop === true) {
          mouseX = e.pageX;
        } else { //smartphone
          mouseX = e.touches[0].pageX;
        }
        currentlySliding = true;
      }

      function dragSlider(e, laptop) {
        if (currentlySliding) {
          var mouseXChange;
          if (laptop === true) {
            mouseXChange = e.pageX - mouseX;
          } else { //smartphone
            mouseXChange = e.touches[0].pageX - mouseX;
          }
          if (sliderLeft + mouseXChange < sliderLeftMin) {
            slider.style.left = sliderLeftMin + "px";
          } else if (sliderLeft + mouseXChange > sliderLeftMax) {
            slider.style.left = sliderLeftMax + "px";
          } else {
            slider.style.left = (sliderLeft + mouseXChange) + "px";
          };
        }
      }

      function dropSlider(e) {
        sliderLeft = $("#slider").position().left;
        updateMarker();
        currentlySliding = false;
      }
      function clickSlider(e) {
        if (e.pageX == null) { //smartphone
          console.log("smartphone");
          mouseX = e.touches[0].pageX - $("#slider_track").offset().left + $("#slider_track").position().left;
        } else {
          mouseX = e.pageX - $("#slider_track").offset().left + $("#slider_track").position().left;
        }
        $("#slider").css({left: mouseX});
        sliderLeft = $("#slider").position().left;
        updateMarker();

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

        document.querySelector(".color-selected").classList.remove("color-selected");
        e.target.classList.add("color-selected");

      }

      //drawing

      function markerDown(e, laptop) {
        currentlyDrawing = true;
        var canvasX;
        var canvasY;
        if (laptop === true) {
          canvasX = e.clientX - canvas.offsetLeft - $(".modal-dialog").offset().left;
          canvasY = e.clientY - canvas.offsetTop - $(".modal-dialog").offset().top;
        } else {// Smartphone
          canvasX = e.touches[0].pageX - canvas.offsetLeft - $(".modal-dialog").offset().left;
          canvasY = e.touches[0].pageY - canvas.offsetTop - $(".modal-dialog").offset().top;
          e.preventDefault();
        }
        ctx.beginPath();
        if(mode == "pen"){
          ctx.globalCompositeOperation="source-over";
        } else if (mode == "eraser") {
          ctx.globalCompositeOperation="destination-out";
        }
        ctx.arc(canvasX, canvasY, markerWidth/2, 0, Math.PI * 2);
        ctx.fillStyle = currentColor;
        ctx.fill();
        ctx.beginPath();
      }

      function draw(e,laptop) {
        var canvasX = 0;
        var canvasY = 0;
        if (laptop === true) {
          canvasX = e.clientX - canvas.offsetLeft - $(".modal-dialog").offset().left;
          canvasY = e.clientY - canvas.offsetTop - $(".modal-dialog").offset().top;
        } else {// Smartphone
          canvasX = e.touches[0].pageX - canvas.offsetLeft - $(".modal-dialog").offset().left;
          canvasY = e.touches[0].pageY - canvas.offsetTop - $(".modal-dialog").offset().top;
        }

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
      // function downloadImage() {
      //   var image = canvas.toDataURL("image/png");
      //   var download = document.getElementById("download");
      //   download.href = image;
      //   download.download = 'drawing.png';
      // }

      function clearCanvas() {
        ctx.fillStyle = "transparent";
        ctx.fillRect(0,0,canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      // function uploadImage() {
      //   var image = canvas.toDataURL("image/png");
      //   var download = document.getElementById("download");
      //   download.href = image;
      //   download.download = 'drawing.png';
      // }


      function saveCanvas() {
        var url = canvas.toDataURL();
        $('#photo').val(url);

        var blank = document.createElement('canvas');
        blank.width = canvas.width;
        blank.height = canvas.height;

        if(canvas.toDataURL() != blank.toDataURL()){
          $("#submit_modal").trigger('click');
          $("#myModal .close").trigger('click');
        }

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

      var mode = "pen";
      function changeMode(e, newMode){
        mode = newMode;
        if (mode == "eraser") {
          document.getElementById("canvas").classList.add("delete");
          document.getElementById("pen").style.display = "flex";
          document.getElementById("eraser").style.display = "none";
        } else {
          document.getElementById("canvas").classList.remove("delete");
          document.getElementById("pen").style.display = "none";
          document.getElementById("eraser").style.display = "flex";
        }
      }

      ///---EVENTS---///

      //slider
      slider.addEventListener("mousedown", function(){grabSlider(event, true);});
      document.addEventListener("mousemove", function(){dragSlider(event, true);});
      document.addEventListener("mouseup", dropSlider);

      slider.addEventListener("touchstart", function(){grabSlider(event, false);});
      document.addEventListener("touchmove",  function(){dragSlider(event, false);});
      document.addEventListener("touchend", dropSlider);

      sliderTrack.addEventListener('click', clickSlider);

      //color selection
      bindColors();

      //drawing
      canvas.addEventListener("mousedown", function(){markerDown(event, true);});
      canvas.addEventListener("mousemove", function(){draw(event, true);});
      document.addEventListener("mouseup", markerUp);

      canvas.addEventListener("touchstart", function(){markerDown(event, false);});
      canvas.addEventListener("touchmove", function(){draw(event, false);});
      document.addEventListener("touchend", markerUp);

      // //image actions
      // document.getElementById("download").addEventListener('click', downloadImage);
      document.getElementById("clear").addEventListener('click', clearCanvas);
      // document.getElementById("upload").addEventListener('click', uploadImage);
      document.getElementById("save").addEventListener('click', saveCanvas);

      // modes
      document.getElementById("pen").addEventListener('click', function(){changeMode(event, "pen");});
      document.getElementById("eraser").addEventListener('click', function(){changeMode(event, "eraser");});

      // Upload image

      // document.getElementById("upload-photo").addEventListener("change", readURL);

    }, 300);
});
