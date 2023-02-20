// attach click listeners to change color buttons
function enableButtons(){
    var buttons = document.getElementsByClassName("change-color");

    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener(triggerEvent, function(e){
            document.getElementById("app").className = e.target.id;

            if(e.target.id == "christmas"){
                startChristmasAnimation();
            } else {
                clearInterval(animation);

                // remove any christmas colors from selected words
                previousTime = null;
                updateTime();   
            }
        });
    }

}