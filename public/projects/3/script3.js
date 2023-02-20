$(document).ready(main);


function main(){

    $("#status").append("ready to go!");
    var canvas = $("#canvas");

    var dx = randBetween(-3.5, 3.5);
    var dy = randBetween(-3.5, 3.5);

    //Canvas fix for mobile:
    
    if($(window).width()<720){
        canvas.attr('width', '300');
        canvas.attr('height', '300');
        dx = randBetween(-3, 3);
        dy = randBetween(-3, 3);
        $("#status").append("<br>we're on mobile");
    }

    
    var ctx;
    var WIDTH = canvas.width();
    var HEIGHT = canvas.height();
    var x = WIDTH/2;
    var y = HEIGHT/2;


    var circle;

    var mute = false;





    $("#mute").click(function(){
        if(mute){
            mute = false;
            $("#mute").text('MUTE');
        } else {
            mute = true;
            $("#mute").text('UNMUTE');
        }

    });


    
    if (canvas[0].getContext){
        var ctx = canvas[0].getContext('2d');
        $("#status").append("<br>width: " + canvas.width());
        $("#status").append("<br>height: " + canvas.height());

        init();

    } else {
      // canvas-unsupported code here ctx.clearRect(0,0,300,300);
      $("#status").append("<br>canvas is broken :( ");
    }

    function init(){
        ctx = $("#canvas")[0].getContext("2d");
        return setInterval(draw, 10)
    }

    function draw(){

        clear();
        circle(x, y, 10);

        if ((x + dx) > (WIDTH - 10) || (x + dx) < 10){
            dx = -dx * randBetween(0.6, 1.4);
            dy = dy * randBetween(0.6, 1.4);
            bouncePing();
        }

        if((y + dy) > (HEIGHT-10) || (y + dy) < 10){
            dy = -dy * randBetween(0.6, 1.4);
            dx = dx * randBetween(0.6, 1.4);
            bouncePing();
        }

        x += dx;
        y += dy;
    }


    function bouncePing(){

        canvas.css("border", "3px solid orange");

        setTimeout(function(){
            canvas.css("border", "3px solid black");
        }, 80);

        if(!mute){
            ping = (Math.floor(Math.random()*4))+1;
            new Audio("../assets/pings/ping" + ping + ".mp3").play(); 
        }  
    }


// LIBRARY CODE

    function circle(x,y,r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI*2, true);         // start at 0, end at Math.PI*2
        ctx.closePath();
        ctx.fill();
    }

    function rect(x,y,w,h) {
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.closePath();
        ctx.fill();
    }
     
    function clear() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
    }

// END LIBRARY CODE

    function randBetween(min, max){
        return Math.random() * (max - min) + min;
    }

}