var triggerEvent = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? "touchstart" : "click";

init();

var TEST_TIME;
var test = false;

var previousTime = {};
var animation = null;
var currentLightCounter = 0;


// start the interval
function init(){
    enableButtons();
    setInterval(updateTime, 200);
    //test();
}
