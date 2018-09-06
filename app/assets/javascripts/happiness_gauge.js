// setInterval(() => {
window.feed = function(callback) {
  var oldHealth = parseInt(health.style.width.replace("%", ""));
  var newHealth = oldHealth - 1;

  var tick = {};
  tick.plot0 = newHealth+1;
  callback(JSON.stringify(tick));
};

var myConfig = {
  type: "gauge",
  globals: {
    fontSize: 15,
    backgroundColor: 'transparent'
  },
  plotarea:{
    marginTop:0,
    marginLeft: 0,
    alpha: 0,
  },
  plot:{
    size:'100%',
    valueBox: {
      placement: 'center',
      text:'%v', //default
      fontSize:20,
      rules:[
        {
          rule: '%v >= 75',
          text: '%v<br>Tranq is feeling great'
        },
        {
          rule: '%v < 75 && %v >= 50',
          text: '%v<br>Tranq is content'
        },
        {
          rule: '%v < 50 && %v >= 25',
          text: '%v<br>Tranq is hungry'
        },
        {
          rule: '%v <  25',
          text: '%v<br>Tranq is feeling down'
        }
      ]
    }
  },
  tooltip:{
    borderRadius:5
  },
  scaleR:{
    aperture:180,
    minValue:0,
    maxValue:100,
    step:25,
    center:{
      visible:false
    },
    tick:{
      visible:false
    },
    item:{
      offsetR:0,
      rules:[
        {
          rule:'%i == 9',
          offsetX:15
        }
      ]
    },
    labels:['','','','',''],
    ring:{
      size:10,
      rules:[
        {
          rule:'%v < 25',
          backgroundColor:'#E53935'
        },
        {
          rule:'%v >= 25 && %v < 50',
          backgroundColor:'#FFA726'
        },
        {
          rule:'%v >= 50 && %v < 75',
          backgroundColor:'#DFFF00'
        },
        {
          rule:'%v >= 75',
          backgroundColor:'#41b20c'
        }
      ]
    }
  },
  refresh:{
      type:"feed",
      transport:"js",
      url:"feed()",
      interval:150,
      resetTimeout:100
  },
  series : [
    {
      values : [100], // starting value
      backgroundColor:'#469AE0',
      indicator:[2,2,2,2,0.75],
      animation:{
        effect:2,
        method:1,
        sequence:4,
        speed: 1500
     },
    }
  ]
};

// }, 5000)

