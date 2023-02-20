var canvas = document.getElementById("canvas");
var ctx;

var cars = [];
var tempArray = [];                         // temporary array used to create cars

var WIDTH = canvas.width;
var HEIGHT = canvas.height;
console.log("Canvas dimensions: " + HEIGHT + ", " + WIDTH);

var numLanes = 5;
var numberOfCars = 15;

var maxFrustration = 90;                            // frustration dictates merges

var laneWidth = (WIDTH-20)/numLanes;
var borderWidth = 10;

var carCounter = 0;                                 // keep track of how many cars we have
var animationSpeed = 20;


additionalInfo = false;                                     // show collision info



// a few listeners...

if($('#additional').is(":checked")){
        console.log("checked!")
        additionalInfo = true;
}

$('#additional').change(function(){
    if($('#additional').is(":checked")){
        console.log("checked!")
        additionalInfo = true;
    } else {
        additionalInfo = false;
    }
});

$('#speed').change(function(){
    var newSpeed = this.value;  
    console.log("new speed: " + (8-newSpeed)*5 + "ms/loop");    
    animationSpeed = (8-newSpeed)*5;
});




init();                                                 // launch

function init(){
    ctx = canvas.getContext("2d");
//    setInterval(draw, animationSpeed);

    setTimeout(draw, animationSpeed);
}


// test car:

    for(var i = 0; i < numberOfCars; i++){
        var newCar = new Car(1, Math.floor(Math.random()*2.5)+0.5, (Math.floor(Math.random()*numLanes)+1));
        tempArray.push(newCar);
    }

    placeCars();
    console.log(cars);

function draw(){



/* 
    1. draw the highway
    2. draw the lanes
    3. draw the dividers
    4. draw the borders
    5. draw the cars 
*/

    /* draw the track */


    rect(0, 0, borderWidth, HEIGHT, "black");

    for(var i = 0; i < numLanes; i ++){
        rect((borderWidth+laneWidth*i), 0, laneWidth, HEIGHT, "gray");
    }

    rect((borderWidth+(laneWidth*numLanes)), 0, borderWidth, HEIGHT, "black");




    /* draw cars: */

    cars.forEach(function(car){


        var carColor = "orange";
        var lightColor = "white";

        /* check for collision against every other car */
        if(!car.collided && car.checkForCollision()){
            car.collided = true;
        }
        
        if(car.collided){
            carColor = "red";
        } 

        if(car.lookAhead()){
            car.slowingDown = true;
            lightColor = "red";
        } else {
            car.slowingDown = false;
        }


         /* DRAW THE CAR */

        rect(car.x, car.y, car.width, car.height, carColor);
        circle((car.x + 0.25*car.width ), (car.y + 0.8*car.height), laneWidth/22, lightColor);
        circle((car.x + 0.75*car.width), (car.y + 0.8*car.height), laneWidth/22, lightColor);   

        if(additionalInfo){ text(car.id, (car.x+car.width/2) , car.y + 15) }
        


        /* Draw the frustration indicator bar */
        if(car.frustration <= (maxFrustration/3)){
            rect(car.x, car.y, car.width*(car.frustration/(maxFrustration/3)), car.height/15, "#d61515");
        } else {
            rect(car.x, car.y, car.width*(car.frustration/maxFrustration), car.height/15, "#14ccd6");
        }

        // if we're off the top of the canvas, reposition to bottom of canvas


        if((car.y + car.height) <= 0){
            car.y = (HEIGHT-car.height);
        }

        if(car.y <= 0){                 // this creates a dummy car visual
            var tempY = HEIGHT + car.y;
            rect(car.x, tempY, car.width, car.height, carColor);

            circle((car.x + 0.25*car.width ), (tempY + 0.8*car.height), laneWidth/22, lightColor);
            circle((car.x + 0.75*car.width), (tempY + 0.8*car.height), laneWidth/22, lightColor);


            if(additionalInfo){ text(car.id, (car.x+car.width/2) , tempY + 15) }

            /* Draw a frustration bar */
            if(car.frustration <= (maxFrustration/3)){
                rect(car.x, tempY, car.width*(car.frustration/(maxFrustration/3)), car.height/15, "#d61515");
            } else {
                rect(car.x, tempY, car.width*(car.frustration/maxFrustration), car.height/15, "#14ccd6");
            }
        }

        /* MOVE */

        // check if this car is colliding with anyone (by cycling through every other car - wildly inefficient)
        
        /* make a decision about speed */

        /* later, we'll need to control for this based on the skill setting                                                                             
        that is - can this driver hold speed? */

        if(car.collided){
            car.speed = 0;
        } else { 

            if(car.slowingDown && car.speed > 0){
                if(car.lane != car.desiredLane){
                    car.speed *= 0.2;
                } else {
                    car.speed *= 0.5;
                }
                
                if(car.frustration < maxFrustration){
                    car.frustration++;
                }
            } else if(car.speed < 0.5){ 
                car.speed += 0.25;
            } else if(car.speed <= (0.95 * car.desiredSpeed)){
                car.speed *= (1 + 0.05/car.skill);                              // the lower the skill, the faster we speed up (0.05/0.8 = 0.0625 )
            } else {
                car.speed *= (1 + randBetween(-0.05, 0.05)/car.skill);
                if(car.frustration > 0){
                    car.frustration -= 0.01;
                }
            }

            if(car.speed > 3){
                car.speed = 3;
            }

            /*
                MERGING:
                1. if we're not already merging, check frustration
                    a. if frustration > 30, merge left (if safe)
                    b. if frustration > 90, merge right (if safe)
                2. if we are merging..
                   a. check if we've finishbed merging (in which case, stop)
                   b. check new collision points
                      i. if safe, check if slowing down
                      ii. if not slowing down, move & merge
            */


            if(car.lane == car.desiredLane){
                if(car.lane > 1 && car.frustration > maxFrustration/3*car.skill && car.safeToMerge("left")){          // always try to pass on the left first
                    car.desiredLane--; 
                } else if (car.lane < numLanes && car.frustration == maxFrustration && car.safeToMerge("right")){    // if we're  really pissed, pass on the right
                    car.desiredLane++;
                } else {
                    car.y -= car.speed;                                                   // if we don't need to merge, move car forward
                }
            } else {
                /* if this car is currently merging */
                var doneMerging = false;
                // check if we're done merging 
                if(car.desiredLane > car.lane){                                 // if we're merging right
                    if((car.x + car.width/2) >= (borderWidth + (car.desiredLane-1)*laneWidth + laneWidth/2)){
                        car.lane = car.desiredLane;
                        car.frustration = 0;                                    // reset frustration;
                        doneMerging = true;
                    }     
                } else if(car.desiredLane < car.lane){
                    if((car.x + car.width/2) <= (borderWidth + (car.desiredLane-1)*laneWidth + laneWidth/2)){
                        car.lane = car.desiredLane;
                        car.frustration = 0;                                        // reset frustration;
                        doneMerging = true;
                    }
                }

                if(!doneMerging){

                    var dir;
                    if(car.desiredLane > car.lane){ dir = "right" }
                    if(car.desiredLane < car.lane){ dir = "left" }

                    if(car.speed < 1){car.speed += 0.5}                  // if the car is super slow, speed up on merge

                    
                    if(car.safeToMerge(dir)){                   // only move in the direction of the desired lane if the car isn't going to hit anything
                        car.x -= car.width/(20 *(1/car.skill))*(car.lane - car.desiredLane);        // merge based on skill (less skill - more abrupt merge);
                    }
                    
                    car.y -= car.speed;                                                         
                    
                } else {
                    car.y -= car.speed;
                }
            }
        }

    })

    setTimeout(draw, animationSpeed);

}

function placeCars(){

    cars.push(tempArray[0]);
    tempArray[0].y = HEIGHT - Math.random()*HEIGHT;                     // place the first car randomly

    /* place second car until it doesn't collide */
    if(tempArray.length > 1){
        for(var i = 1; i < tempArray.length; i++){
            var carPlaced = false;
            while(!carPlaced){  
                cars.push(tempArray[i]);
                cars[cars.length-1].y = HEIGHT - Math.random()*HEIGHT;                // cars[cars.length-1] is the last element in the array
                var collided = cars[cars.length-1].checkForCollision();
                console.log("collided at placement: " + collided);
                if(!collided){
                    carPlaced = true;
                    console.log("Car " + cars[cars.length-1].id + " has been placed!");
                } else {
                    cars.pop();                                      // remove last element (the colliding car);
                }
            }
        }
    }

    ///
}

    
function Car(skill, speed, lane){
    


    this.id = carCounter;
    carCounter++;
//    this.id = Math.floor(Math.random()*1000)*Math.floor(Math.random()*1000);
    this.height = laneWidth/1.8;
    this.width = this.height*1.8/3;

    this.speed = speed;
    this.desiredSpeed = speed;

    this.lane = lane;
    this.desiredLane = lane;

    this.x = (borderWidth + laneWidth*(lane-1) + (laneWidth - this.width)/2);
    this.y = HEIGHT - Math.random()*1000;

    this.collided = false;
    this.slowingDown
    this.skill = skill;                 // fow now, this'll control things like breaking
    this.frustration = 0;               // this will measure how many turns the car has spent driving slow;


    this.checkForCollision = function(){

        var self = this;
        var colliding = false;

        tempX = this.x;
        tempY = this.y

        if(tempY - this.height < 0){                                   // need to account for going off the top of the map
            tempY = HEIGHT + (tempY);
        }


        if(this.checkForSpecificCollision(tempX, tempY)){
            colliding = true;
        }  
        if(this.checkForSpecificCollision(tempX + this.width, tempY)){
            colliding = true;
        }  
        if(this.checkForSpecificCollision(tempX, tempY + this.height)){
            colliding = true;
        }  
        if(this.checkForSpecificCollision(tempX + this.width, tempY + this.height)){
            colliding = true;
        }  

        return colliding;

    }

    this.checkForSpecificCollision = function(x, y){                // checks a coordinate for collision

        var specificCollision = false;
        var self = this;

        if(y < 0) { y = HEIGHT+y }                                  // checks for out of bound collisions

        cars.forEach(function(otherCar){

            if(self.id != otherCar.id){       
                if(x >= otherCar.x && x <= (otherCar.x + otherCar.width) && y >= otherCar.y && y <= (otherCar.y + otherCar.height)){
                    specificCollision = true;
                }
            }

        });

        return specificCollision;
    }

    this.lookAhead = function(){                                    // looks a few cars ahead (based on skills) for collisions

        var futureCollision = false;

        var signalCircleRadius = laneWidth/30;

        tempX = this.x;
        tempY = this.y

        if(tempY - this.height < 0){                                   // need to account for going off the top of the map
            tempY = HEIGHT + (tempY);
        }

        if(this.checkForSpecificCollision(tempX, (tempY-this.height*skill))){
            futureCollision = true;
        }
        // front right
        if(this.checkForSpecificCollision(tempX+this.width, (tempY-this.height*skill))){
            futureCollision = true;
        }

        if(this.checkForSpecificCollision(tempX, (tempY-this.height*2*skill))){
            futureCollision = true;
        }
        // front right
        if(this.checkForSpecificCollision(tempX+this.width, (tempY-this.height*2*skill)*skill)){
            futureCollision = true;
        }

        if(!this.collided && additionalInfo){
            circle(tempX, (tempY-this.height*skill), signalCircleRadius, "black");
            circle((tempX+this.width), (tempY-this.height*skill), signalCircleRadius, "black");
            circle(tempX, (tempY-this.height*2*skill), signalCircleRadius, "black");
            circle((tempX+this.width), (tempY-this.height*2*skill), signalCircleRadius, "black");
        }


        return futureCollision;

    }

    this.safeToMerge = function(dir) {

        // check 8 points for merge:

        /*
            __
            __  |    |
            __  | [] |
            __  |    |
        */

        var safeToChangeLanes = true;
        var left;
        var right;

    
        if(dir == "right"){                                   // merge right  
            left = this.x + laneWidth;
            right = this.x + laneWidth + this.width;
        } else if (dir == "left"){                            // merge left
            left = this.x - laneWidth;
            right = this.x - laneWidth + this.width;
        }
        

        if(this.lane == this.desiredLane){

            // if we're getting ready to merge

            /* draw the testing circles */
            if(additionalInfo){
                if(this.frustration > (maxFrustration/3)){
                    var signalCircleRadius = laneWidth/22;
                    circle(left, this.y, signalCircleRadius, "black");
                    circle(right, this.y, signalCircleRadius, "black");
                    circle(left, this.y+this.height, signalCircleRadius, "black");
                    circle(right, this.y+this.height, signalCircleRadius, "black");
                    circle(left, this.y-this.height, signalCircleRadius, "black");
                    circle(right, this.y-this.height, signalCircleRadius, "black");
                    circle(left, this.y+this.height*2, signalCircleRadius, "black");
                    circle(right, this.y+this.height*2, signalCircleRadius, "black");

                    line(this.x, (this.y + (this.y + this.height))/2, right,  (this.y + (this.y + this.height))/2);

                    line(left, this.y - this.height, left, this.y + this.height*2);
                    line(right, this.y - this.height, right, this.y + this.height*2);
                    line(left, this.y - this.height, right, this.y - this.height);
                    line(left, this.y + this.height*2, right, this.y + this.height*2);
                }
            }

            // front left
            if(this.checkForSpecificCollision(left, this.y)){
                safeToChangeLanes = false;
            }
            // front right
            if(this.checkForSpecificCollision(right, this.y)){
                safeToChangeLanes = false;
            }

            // back left
            if(this.checkForSpecificCollision(left, this.y+this.height)){
                safeToChangeLanes = false;
            }
            // back right
            if(this.checkForSpecificCollision(right, this.y+this.height)){
                safeToChangeLanes = false;
            }

            // one this ahead left
            if(this.checkForSpecificCollision(left, this.y - this.height)){
                safeToChangeLanes = false;
            }
            // one this ahead right
            if(this.checkForSpecificCollision(right, this.y - this.height)){
                safeToChangeLanes = false;
            }

            // one this behind left
            if(this.checkForSpecificCollision(left, this.y+this.height*2)){
                safeToChangeLanes = false;
            }
            // one this behind right
            if(this.checkForSpecificCollision(right, this.y+this.height*2)){
                safeToChangeLanes = false;
            } 
        } else {
            // if already merging

            if(additionalInfo){
                if(this.frustration > (maxFrustration/3)){
                    var signalCircleRadius = laneWidth/22;
                    circle(10+laneWidth*this.desiredLane-laneWidth/2, this.y, signalCircleRadius, "black");
                    circle(10+laneWidth*this.desiredLane-laneWidth/2, (this.y+this.height), signalCircleRadius, "black");
                    circle(10+laneWidth*this.desiredLane-laneWidth/2, (this.y-this.height/2), signalCircleRadius, "black");
                    line((this.x+this.x+this.width)/2, this.y, 10+laneWidth*this.desiredLane-laneWidth/2, this.y);
                    line(10+laneWidth*this.desiredLane-laneWidth/2, this.y-this.height/2, 10+laneWidth*this.desiredLane-laneWidth/2, this.y+this.height);
                }
            }
            // front left
            if(this.checkForSpecificCollision(10+laneWidth*this.desiredLane-laneWidth/2, this.y)){
                safeToChangeLanes = false;
            }
            // back left
            if(this.checkForSpecificCollision(10+laneWidth*this.desiredLane-laneWidth/2, (this.y+this.height))){
                safeToChangeLanes = false;
            }

            if(this.checkForSpecificCollision(10+laneWidth*this.desiredLane-laneWidth/2, (this.y-this.height/2))){
                safeToChangeLanes = false;
            }
        }

        return safeToChangeLanes;

    }

}



function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);                 // creates a rectangle the size of the entire canvas that clears the area
}


// LIBRARY CODE

function circle(x,y,r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);               // start at 0, end at Math.PI*2
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

function rect(x,y,w,h, color) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();

    ctx.strokeStyle = "black";
    ctx.fillStyle = color;
    ctx.stroke();
    ctx.fill();
}

function text(text, x, y){
    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(text, x, y);
}

function line(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}
 

 


/* other functions */

function randBetween(min, max){
    return Math.random() * (max - min) + min;
}






