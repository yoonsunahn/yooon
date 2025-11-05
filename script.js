$(document).ready(function(){
    var num = 0;

    $(".fig1").click(function(){
        num ++;
        if (num == 1) {
            $(".fig1").css("background-color", "red"); 
        }
        console.log("work")
    });
});
