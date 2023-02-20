$(document).ready(main);


function main(){

    $("#status").append("ready to go!");

    var canvas = $("#canvas");
    var ctx;
    var RADIUS = 25;
    var NUM_CIRCLES = 50;

    var MAP_HEIGHT = 800;
    var MAP_WIDTH = 1400;

    //Canvas fix for mobile:
    
    if($(window).width()<720){
        canvas.attr('width', window.innerWidth);
        canvas.attr('height', window.innerHeight);
        NUM_CIRCLES = 1000;
        $("#status").append("<br>we're on mobile");
    }
    var WIDTH = canvas.width();
    var HEIGHT = canvas.height();    
    var x = WIDTH/2;
    var y = HEIGHT/2;
    var circles = [];
    var visibleCircles = [];
    var LAST_ACTIVE = null;
    var ACTIVE_CIRCLE = null;

    var last_click = [0,0]

    var left_offset = 0;
    var top_offset = 0; 
    var colors = ["#FFEABC", "#D4C3FF", "#FF5050", "#50FFDD"];

    var idCounter = 1;
    var getFive = false;
    var fiveClosestCircles = [];
    
    var animating = false;




    // EVENT LISTENERS:


    var keyState = {};    
    
    window.addEventListener('keydown',function(e){
        keyState[e.which] = true;
    },true);    
    window.addEventListener('keyup',function(e){
        keyState[e.which] = false;
    },true);


    // this gets the location of the click on the canvas:
    canvas.click(function(e) {
        var posX = e.pageX - $(this).offset().left
        var posY = e.pageY - $(this).offset().top;

        last_click = [posX, posY];

        $("#click-xpos").text(posX);
        $("#click-ypos").text(posY);
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
            $("#count").text("Count: " + circles.length);
            idCounter++;
        }   


        $("#count").text("Count: " + circles.length);


        return setInterval(draw, 10)
    }

    function makeCircle(){ 
        c = new Circle(randBetween(RADIUS, MAP_WIDTH-RADIUS), randBetween(RADIUS, MAP_HEIGHT-RADIUS), RADIUS);
        return c;
    }

    function draw(){

        $("#animating").text(animating);

        visibleCircles = [];
        clear();
        moveLoop();

        $("#x-pos").text(Math.round(left_offset,2));
        $("#y-pos").text(Math.round(top_offset,2));

        for(i = 0; i < circles.length; i++){

            // only draw circles actually visible on screen!
      
            if(!((circles[i].xPos + circles[i].radius - left_offset) < 0 || (circles[i].xPos - circles[i].radius - left_offset) > WIDTH || (circles[i].yPos + circles[i].radius - top_offset) < 0 || (circles[i].yPos - circles[i].radius - top_offset) > HEIGHT)){  
                visibleCircles.push(circles[i]);                        // keep track of which circles are visible
                $("#visible").text(visibleCircles.length);              // update the screen counter
                drawCircle(circles[i]);                                 // actually draw the circle

            }

            if(!(ACTIVE_CIRCLE == null)){
                drawConnectors(ACTIVE_CIRCLE);
            }
        }

        
    
    }

    function drawCircle(circle){


        if(circle.relevant || circle.active || ACTIVE_CIRCLE == null){
            ctx.globalAlpha = 1;
        } else {
            ctx.globalAlpha = 0.2
        }

        if(circle.id == 0){
            console.log("getting!")
            getFiveClosest(circle);
        }


        //create a circle at last click and test for collision:
        if(!(last_click[0] == 0 && last_click[1] == 0) && !animating){
            d = Math.sqrt(Math.pow(((circle.xPos - left_offset) - last_click[0]), 2) + Math.pow(((circle.yPos - top_offset) - last_click[1]),2));

            // if the distance between the two is smaller than the circle's radius, then we have a collision!
            
            if(circle.relevant || ACTIVE_CIRCLE == null){
                if((d < circle.radius)){
                
                    console.log("Ya clicked on a circle, you goof!");

                    animating = true;
                    getFive = true;

                    for(var j = 0; j < circles.length; j++){
                        if(circles[j].active){
                            circles[j].active = false;
                            circles[j].color = colors[Math.floor(randBetween(0,3))];
                            circles[j].radius = RADIUS; 
                        }
                    }


                    last_click = [0,0]
                    circle.radius += 5;
                    circle.color = "green";
                    circle.active = true;

                    if(ACTIVE_CIRCLE){
                        LAST_ACTIVE = ACTIVE_CIRCLE;
                    }
                    
                    ACTIVE_CIRCLE = circle;

                    // THIS IS WHERE THE MAGIC HAPPENS!
                    // if we click on a circle, we re-center around that cicle.
                   
                    target_left_offset = (circle.xPos - WIDTH/2);
                    target_top_offset = (circle.yPos - HEIGHT/2);

                    animateMove(target_left_offset, target_top_offset);

                }
            }
        }


        // ACTUALLY DRAW THE CIRCLE ON THE CANVAS!

        ctx.fillStyle = circle.color;
        
        ctx.beginPath();
        ctx.arc(circle.xPos - left_offset, circle.yPos - top_offset, circle.radius, 0, Math.PI*2, true);         // start at 0, end at Math.PI*2
        ctx.closePath();
        ctx.fill();

        // ctx.stroke();

        
    }

    function animateMove(new_left_offset, new_top_offset){

        console.log("animating!");

        var animY = (new_top_offset - top_offset)/100;
        var animX = (new_left_offset - left_offset)/100;
        var counter = 0;


        var moveIt = setInterval(function(){

            animating = true;

            top_offset += animY;
            left_offset += animX;

            counter++;

            if(counter >= 100){
                console.log("moved!");
                animating = false;
                clearInterval(moveIt);
            }


        }, 10)

        
    }

    function drawConnectors(circle) {

        ctx.strokeStyle = "rgba(214,224,240,1)";
        ctx.lineWidth = 2;
        ctx.globalCompositeOperation = 'destination-over';
        

        //leave the guiding line present if there's a last active circle:

        if(LAST_ACTIVE){


            ctx.globalCompositeOperation = 'destination-over';


            ctx.beginPath();
            ctx.moveTo((LAST_ACTIVE.xPos-left_offset), (LAST_ACTIVE.yPos-top_offset));
            ctx.lineTo((ACTIVE_CIRCLE.xPos-left_offset), (ACTIVE_CIRCLE.yPos-top_offset));
            ctx.stroke();

            ctx.globalCompositeOperation = 'source-over';
        }



        if(animating == false){
        //but we only want the top 5 closest circles
                
            if(getFive){
                fiveClosestCircles = getFiveClosest(circle);
            }
            //=====================

            
            for(var k = 0; k < fiveClosestCircles.length; k++){
                ctx.globalCompositeOperation = 'destination-over';
                ctx.beginPath();
                ctx.moveTo((circle.xPos-left_offset), (circle.yPos-top_offset));
                ctx.lineTo((fiveClosestCircles[k].xPos-left_offset), (fiveClosestCircles[k].yPos-top_offset));
                ctx.stroke();
            }

            ctx.globalCompositeOperation = 'source-over';
        }
    }

    function Circle(x, y, radius){
        
        this.xPos = x;
        this.yPos = y;
        this.radius = radius;
        this.color = colors[Math.floor(randBetween(0,3))];
        this.active = false;
        this.relevant = false;
        this.id = idCounter;
    }


    function getFiveClosest(circle){


        visibleCircles = [];

        // get only the visible circles

        for(var i = 0; i < circles.length; i++){
            if(!((circles[i].xPos + circles[i].radius - left_offset) < 0 || (circles[i].xPos - circles[i].radius - left_offset) > WIDTH || (circles[i].yPos + circles[i].radius - top_offset) < 0 || (circles[i].yPos - circles[i].radius - top_offset) > HEIGHT)){  
                visibleCircles.push(circles[i]);                        // keep track of which circles are visible
                $("#visible").text(visibleCircles.length);              // update the screen counter
            }
        }

        var tempArray = visibleCircles.slice();
        var fiveArray = [];

        //first, we run this 5 times
        for(var a = 0; a < 5; a++){

            console.log("running for time " + a)

            var minVal = 9999;
            var minID = -1;
            

            // cycle through our temp array
            for(var b = 0; b < tempArray.length; b++){
                console.log("running B");

                var d = getDistance(tempArray[b], circle);

                if (d < minVal && tempArray[b].id != circle.id){
                    minVal = d;
                    minID = tempArray[b].id;
                }
            }

            for(var c = 0; c < tempArray.length; c++){
                
                if(!(tempArray[c].id == circle.id)){
                    tempArray[c].relevant = false;
                }

                if (tempArray[c].id == minID){
                    tempArray[c].relevant = true;
                    fiveArray.push(tempArray[c]);
                    tempArray.splice(c, 1);
                    console.log("REMOVED ID: " + minID);
                }
            } 
            // console.log("Temp array: " + tempArray);   
        }

        getFive = false;
        console.log(fiveArray.length)
        return fiveArray;
    }

    function getDistance(a, b){

        d = Math.sqrt(Math.pow((b.xPos - a.xPos), 2) + Math.pow((b.yPos - a.yPos),2));   
        return d;
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

    // listen to button events:
    // this is way smoother than mouse events - need to understand why!


    var timeout;

    $("#move-left").mousedown(function(){
        timeout = setInterval(function(){
            move("left");
        }, 10);
        return false;
    });

    $("#move-up").mousedown(function(){
        timeout = setInterval(function(){
            move("up");
        }, 10);
        return false;
    });

    $("#move-right").mousedown(function(){
        timeout = setInterval(function(){
            move("right");
        }, 10);
        return false;
    });

    $("#move-down").mousedown(function(){
        timeout = setInterval(function(){
            move("down");
        }, 10);
        return false;
    });

    $(document).mouseup(function(){
        clearInterval(timeout);
        return false;
    });

    // listen to keyboard events:

    function moveLoop() {
  
            if (keyState[37]){
                move("left"); 
            }
                
            if(keyState[38]){
                move("up"); 
            }

            if(keyState[39]){
                move("right");
            }

            if(keyState[40]){
                move("down"); 
            }
    }

    function move(dir){
        switch(dir) {
            case "left":

                if(left_offset > 0){
                    $("#x-pos").css("color", "black");
                    $("#canvas").css("border-right", "3px solid #201E28");
                    $("#canvas").css("border-left", "3px solid #201E28");
                    left_offset -= 2;
                } else {
                    console.log("nowehere to go, left_offset is " + left_offset);
                    $("#x-pos").css("color", "red");
                    $("#canvas").css("border-left", "3px solid #8971FF");

                } 
                break;


            case "up":
                if(top_offset > 0){
                    $("#y-pos").css("color", "black");
                    $("#canvas").css("border-top", "3px solid #201E28");
                    $("#canvas").css("border-bottom", "3px solid #201E28");
                    top_offset -= 2;
                } else {
                    console.log("nowehere to go, top_offset is " + left_offset);
                    $("#y-pos").css("color", "red");
                    $("#canvas").css("border-top", "3px solid #8971FF");

                } 

                break;


            case "right":
                if(left_offset < (MAP_WIDTH-WIDTH)){
                    $("#x-pos").css("color", "black");
                    $("#canvas").css("border-right", "3px solid #201E28");
                    $("#canvas").css("border-left", "3px solid #201E28");
                    left_offset += 2;
                } else {
                    console.log("nowehere to go, left_offset is " + left_offset);
                    $("#x-pos").css("color", "red");
                    $("#canvas").css("border-right", "3px solid #8971FF");
                } 

                break;


            case "down":
                if(top_offset < (MAP_HEIGHT-HEIGHT)){
                    $("#y-pos").css("color", "black");
                    $("#canvas").css("border-top", "3px solid #201E28");
                    $("#canvas").css("border-bottom", "3px solid #201E28");
                    top_offset += 2;
                } else {
                    console.log("nowehere to go, top_offset is " + left_offset);
                    $("#y-pos").css("color", "red");
                    $("#canvas").css("border-bottom", "3px solid #8971FF");

                } 
                break;

            default:
                console.log("something broke :( ");
        }
    }


// END LIBRARY CODE

    function randBetween(min, max){
        return Math.random() * (max - min) + min;
    }


}