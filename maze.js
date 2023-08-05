let gameStatus = 0; // 0: not started, 1: started, 2: lost, 3: win

$(function() {
    $(".boundary").on("mouseenter", function() {
        if(gameStatus == 1) {
            $(".boundary").css("background-color", "red");
            $("#status").addClass("youlose");
            $(".youlose").text("You lost:[ !");
            gameStatus = 2;
        }
    });

    $("#start").on("click", function() {
        $(".boundary").removeAttr("style");
        $("#status").text("Game started!");
        gameStatus = 1;
    });

    $("#end").on("mouseenter", function() {
        if(gameStatus == 1) {
            $(".youlose").text("You are the winner :) !");
            gameStatus = 3;
        }
    });
    $('body').addClass("outofthemazearea");
    
  

});


// let gameStatus = 0; // 0: not started, 1: started, 2: lost, 3: win

// $(function() {
//     $(".boundary").on("mouseenter", function() {
//         if(gameStatus == 1) {
//             $(".boundary").css("background-color", "red");
//             $("#status").text("You lose!");
//             gameStatus = 2;
//         }
//     });

//     $("#start").on("click", function() {
//         $(".boundary").removeAttr("style");
//         $("#status").text("Game started!");
//         gameStatus = 1;
//     });

//     $("#end").on("mouseenter", function() {
//         if(gameStatus == 1) {
//             $("#status").text("You win!");
//             gameStatus = 3;
//         }
//     });
// });