var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.id = selElmnt.options[j].id
    c.addEventListener("click", function(e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          changeCanvas(this);
          fillForm(this);
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

function changeCanvas(elmnt) {
  /*a function that change background and size of canvas*/
  var canvasJSON = [
    {
      "id": "option-head",
      "url": "https://res.cloudinary.com/sarneijim/image/upload/v1535063532/Template%20tranq/lxjtsjfsw5vdmy3hnlkz.png",
      "width": 300,
      "height": 300
    },
    {
      "id": "option-face",
      "url": "https://res.cloudinary.com/sarneijim/image/upload/v1535063334/Template%20tranq/ruy0b8cg0rfkbxz2x4zg.png",
      "width": 300,
      "height": 300
    },
    {
      "id": "option-neck",
      "url": "https://res.cloudinary.com/sarneijim/image/upload/v1535063554/Template%20tranq/elxadqhevdx4hijblkbe.png",
      "width": 400,
      "height": 250
    },
    {
      "id": "option-body",
      "url": "https://res.cloudinary.com/sarneijim/image/upload/v1535063288/Template%20tranq/h12vjh3rydctjxd0nah1.png",
      "width": 400,
      "height": 400
    },
    {
      "id": "option-couch",
      "url": "https://res.cloudinary.com/sarneijim/image/upload/v1535063312/Template%20tranq/ct5zcrslbqxbta0hxlbo.png",
      "width": 1000,
      "height": 500
    },
    {
      "id": "option-table",
      "url": "https://res.cloudinary.com/sarneijim/image/upload/v1535063622/Template%20tranq/jhpddmonipcqcq72tvif.png",
      "width": 700,
      "height": 350
    },
    {
      "id": "option-side_table",
      "url": "https://res.cloudinary.com/sarneijim/image/upload/v1535063597/Template%20tranq/aiyjqptug69oh6lpwu49.png",
      "width": 350,
      "height": 350
    },
    {
      "id": "option-window",
      "url": "https://res.cloudinary.com/sarneijim/image/upload/v1535063697/Template%20tranq/qocjyshrkpyruihprypw.png",
      "width": 1000,
      "height": 400
    },
    {
      "id": "option-plant",
      "url": "https://res.cloudinary.com/sarneijim/image/upload/v1535063578/Template%20tranq/ponr8h6y6t5llft2w5zg.png",
      "width": 500,
      "height": 700
    },
     {
      "id": "option-floor",
      "url": "https://res.cloudinary.com/sarneijim/image/upload/v1535063481/Template%20tranq/voym9esnppatif4vmbuc.png",
      "width": 500,
      "height": 250
    },
    {
      "id": "option-wall",
      "url": "https://res.cloudinary.com/sarneijim/image/upload/v1535063650/Template%20tranq/he2zjfqkmqohkat0gw4y.png",
      "width": 500,
      "height": 600
    }

  ];
  item = canvasJSON.filter(
    function(canvasJSON){ return canvasJSON.id == elmnt.id }
  );
  canvas = document.getElementById("canvas");
  background = canvas.parentElement;
  canvas.width  = item[0].width;
  canvas.height  = item[0].height;
  background.style.backgroundImage = 'url(' + item[0].url + ')';

}
function fillForm(elmnt){
  category = elmnt.id.slice(7);
  document.getElementById('category').value = category;
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
