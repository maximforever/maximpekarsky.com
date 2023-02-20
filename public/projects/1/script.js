var run = true;


$(document).ready(main);


function main(){


    console.log("ready to go");

    myWord = $("#word");

    myWord.text("pickles");

    moveWord(myWord);

};


function moveWord(word){

    var top = myWord.position().top;
    var left = myWord.position().left;
    var bottom = myWord.position().top - myWord.height();
    var right = myWord.position().left + myWord.width();


    setInterval(function(changeX, changeY){
        var changeX = (Math.random()-0.5)*50;
        var changeY = (Math.random()-0.5)*50;

        console.log("current positions:");
        console.log("X: " + word.position().left);
        console.log("Y: " + word.position().top);
        console.log("--------------");


        // Add that value to existing X & Y positions

        var new_top = word.position().top + changeY;
        var new_left = myWord.position().left  + changeX;
        var new_bottom = new_top - myWord.height();
        var new_right = new_left + myWord.width();

        console.log("New position X: " + new_left);
        console.log("New position Y: " + new_top); 

        // check if this'll take us off screen

        while(overlap(new_top, new_left, new_bottom, new_right)){
            changeX = (Math.random()-0.5)*500;
            changeY = (Math.random()-0.5)*500;
            new_top = word.position().top + changeY;
            new_left = myWord.position().left  + changeX;
            new_bottom = new_top - myWord.height();
            new_right = new_left + myWord.width();
        }  
         word.animate({left: new_left,top: new_top}, 500);

/*        word.css("top", new_top);
        word.css("left", new_left);
*/
    }, 1000); 
}


function overlap(top, left, bottom, right){
    if(top <= 0 || left <= 0 || bottom >= $(window).height() || right >= $(window).width()){
        console.log("About to go off screen!");
        return true;
    } else {
        console.log("not overlapping");
        return false;
    }

}