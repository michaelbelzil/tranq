var xhrObject = new XMLHttpRequest();

xhrObject.onreadystatechange = function() {
  if (xhrObject.readyState === 4) {
    if (xhrObject.status === 200 || xhrObject.status === 304) {

      // Success! Do stuff with data.
      console.log(xhrObject.responseText);

    }
  }
};

xhrObject.open(
  "GET",
  "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=11d5e7a550fcaae59fb10ddf7480530a",
  true
);
xhrObject.send();
