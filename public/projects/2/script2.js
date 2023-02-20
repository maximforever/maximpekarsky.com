$(document).ready(main);


vector = [0, 0];
run = true;

$("#stop").click(function(){
    run = false;
    $(this).hide();
    $("#restart").show();
});

$("#restart").click(function(){
    console.log("restarting!");
    $(this).hide();
    $("#stop").show();
    run = true;
    $('.rect').css("top", "45vh");
    $('.rect').css("left", "45vw");
    initial_vector = [Math.round(randBetween(-10,10)*100)/100, Math.round(randBetween(-10,10)*100)/100];

    move($('.rect'), initial_vector);
});


function main(){
    console.log("ready to go!");
    rect = $('.rect');
    initial_vector = [Math.round(randBetween(-10,10)*100)/100, Math.round(randBetween(-10,10)*100)/100];
    move(rect, initial_vector);             // initial call
}

function move(obj, vector){

    if(run){

        pos = getLocation(obj);

        // CHECK IF OFFSCREEN

        leaving = offscreen(obj);

        if(leaving[0]){                                   // if we're offscreen, adjust the vector    
            vector = bounce(vector, leaving[1]);
        }

        // PERFORM THE MOVE:

        obj.css("top", pos[0]-vector[1]+'px');
        obj.css("left", pos[1]+vector[0]+'px');

        // UPDATE THE ON-SCREEN VECTORS:

        $("#y").text(vector[1]);
        $("#x").text(vector[0]);
        $("#pos").text(pos[1] + ", " + pos[0]);             //(x, y)

        setTimeout(function(){
            move(obj, vector);
        }, 20); // call move() in 20 msec
    }
}

function randBetween(min, max){
    return Math.random() * (max - min) + min;
}

function getLocation(obj){

    var top = obj.offset().top;
    var left = obj.offset().left;
    var bottom = top + obj.outerHeight();
    var right = left + obj.outerWidth(); 

    return [top, left, bottom, right];

}

function offscreen(obj){

    pos =  getLocation(obj);
    off = false;                // are we off screen?


    if(pos[0] <= 5){
        off = true;
        dir = "top";
    } else if (pos[1] <= 5){
        off = true;
        dir = "left";
    } else if (pos[2] >= ($(window).height()-5)){       //adding a bit of additional padding at the right and bottom.
        off = true;
        dir = "bottom";
    } else if (pos[3] >= ($(window).width()-5)){        
        off = true;
        dir = "right";
    } else {
        off = false
    }

    if(off){
        console.log("offscreen: " + dir);
        $(".thin-border").css("border", "5px solid orange");
        setTimeout(function(){
            $(".thin-border").css("border", "5px solid black");
        }, 100);
        $("#pos").css("color", "red");
        return [true, dir];
    } else {
        $("#pos").css("color", "black");
        return [false, null];
    }

}


function bounce(vector, dir){

    
    other_change = 1;
    change = -1;

    ping = (Math.floor(Math.random()*4))+1;

    new Audio("../assets/pings/ping" + ping + ".mp3").play();  

    if(dir == "top" || dir == "bottom"){
        return [vector[0]*other_change, vector[1]*change];
    } else if(dir == "left" || dir == "right"){
        return [vector[0]*change, vector[1]*other_change];
    } else {
        console.log("This option should never happen");
    }


}