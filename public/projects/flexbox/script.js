$(document).ready(main);

function main(){
    console.log("script.js is running");

/* click listeners*/

    $("body").on("click", ".flexbox-direction-option", function(){
        var direction = this.value;
        $("#content").css("flex-direction", direction);
    });

    $("body").on("click", ".column-width-option", function(){
        var width = this.value + "%";
        $("#content p").css("width", width);  
    });

    $("body").on("click", ".flex-wrap-option", function(){
        var value = this.value;
        $("#content").css("flex-wrap", value);     
    });

    $("body").on("click", ".justify-content-option", function(){
        var value = this.value;
        $("#content").css("justify-content", value);     
    });

    $("body").on("click", ".align-items-option", function(){
        var value = this.value;
        $("#content").css("align-items", value);     
    });





}










