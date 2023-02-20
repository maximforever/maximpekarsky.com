$(document).ready(main);


function main(){

    $("#status").append("ready to go!");

    var canvas = $("#canvas");
    var SPEED = 3;

    var dx = randBetween(-SPEED, SPEED);
    var dy = randBetween(-SPEED, SPEED);

    var ctx;
    var MINRAD = 25;
    var MAXRAD = 50;
    var NUM_CIRCLES = 5;

    var circles = [];
    var mute = true;

    //Canvas fix for mobile:
    
    if($(window).width()<720){
        canvas.attr('width', '300');
        canvas.attr('height', '168.75');
        dx = randBetween(-SPEED/5, SPEED/5);
        dy = randBetween(-SPEED/5, SPEED/5);
        MINRAD = 5;
        MAXRAD = 15
        SPEED = 1;
        $("#status").append("<br>we're on mobile");
    }

    var x = WIDTH/2;
    var y = HEIGHT/2;
    var WIDTH = canvas.width();
    var HEIGHT = canvas.height();


    // Status display:

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

// ------------------------------
//     START BUILDING CANVAS HERE
// ------------------------------

    function init(){
        ctx = $("#canvas")[0].getContext("2d");

        var placed;

        // This is the bit that makes cicles:

        for(i = 0; i < NUM_CIRCLES; i++){
            
            do {
                var c = makeCircle();  
                placed = true;          

                // let's make sure this circle doesn't overlap with any other circle

                for(i = 0; i < circles.length; i++){
      
                    var d = getDistance(circles[i], c);
                    if(d < (circles[i].radius + c.radius + 10)){
                    
                        placed = false;
                    }
                    
                }
            }while(!placed)

            circles.push(c);

        }

        return setInterval(draw, 10)
    }

    function makeCircle(){
        c = new Circle(randBetween(MAXRAD, WIDTH-MAXRAD), randBetween(MAXRAD, HEIGHT-MAXRAD), randBetween(MINRAD, MAXRAD), randBetween(-SPEED, SPEED), randBetween(-SPEED, SPEED));
        return c;
    }

    function draw(){

        clear();

        checkForBounce();

        for(i = 0; i < circles.length; i++){
            drawCircle(circles[i]);
        }

        
    
    }

    function drawCircle(circle){
        ctx.fillStyle = "rgba(100, 157, 181, 0.7)";
        ctx.stokeStyle = "rgba(30, 75, 94, 1)";
        ctx.beginPath();
        ctx.arc(circle.xPos, circle.yPos, circle.radius, 0, Math.PI*2, true);         // start at 0, end at Math.PI*2
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

/// -------- ???


        if ((circle.xPos + circle.dx) > (WIDTH - circle.radius) || (circle.xPos + circle.dx) <= circle.radius){
            circle.dx = -circle.dx;
            circle.dy *= randBetween(0.5, 1.5);
            bouncePing();
        }

        if((circle.yPos + circle.dy) > (HEIGHT -  circle.radius) || (circle.yPos + circle.dy) <= circle.radius){
            circle.dy = -circle.dy;
            circle.dx *= randBetween(0.5, 1.5);
            bouncePing();
        }



        circle.xPos += circle.dx;
        circle.yPos += circle.dy;
    }


    function bouncePing(){

        canvas.css("border", "3px solid #649DB5");
        
        setTimeout(function(){
            canvas.css("border", "3px solid #0A222D");
        }, 200);

        if(!mute){
            ping = (Math.floor(Math.random()*4))+1;
            new Audio("../assets/pings/ping" + ping + ".mp3").play(); 
        }  
    }


    function Circle(x, y, radius, dx, dy){
        this.xPos = x;
        this.yPos = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;

    }

    function getDistance(a, b){

        d = Math.sqrt(Math.pow((b.xPos - a.xPos), 2) + Math.pow((b.yPos - a.yPos),2));
        return d;
    }

    function checkForBounce(){

        for(i = 0; i < circles.length; i++){
            for(j = 0; j < circles.length; j++){

                d = getDistance(circles[i], circles[j]);

                if(d != 0 ){
                    
                    var future_a = Math.sqrt(Math.pow(circles[i].dx, 2) + Math.pow(circles[i].dy, 2));

                    if((circles[i].radius + future_a + circles[j].radius) >= d){

                        console.log("COLLIDING!");
                        
                        circles[i].dx = -circles[i].dx;
                        circles[i].dy = -circles[i].dy;


                    }
                }  
            }   
        }



    }


// LIBRARY CODE

    function circle(x,y,r) {
        ctx.fillStyle = "rgba(100, 157, 181, 0.7)";
        ctx.stokeStyle = "rgba(30, 75, 94, 1)";
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI*2, true);         // start at 0, end at Math.PI*2
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
     
    function clear() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
    }

// END LIBRARY CODE

    function randBetween(min, max){
        return Math.random() * (max - min) + min;
    }

}