let gameOn = false;
let level = 0;
let userPattern = [];
let gamePattern = [];
let colors = ["purple", "pink", "blue", "green"];

$(document).keypress(function () {
  if (gameOn === false) {
    $("h1").text("Level: " + level);
    gameOn = true;
    gameSequence();
  }
});


 $(".box").click(function (e) {
   
     let clickedColor = e.target.id;
     userPattern.push(clickedColor);
    //  push user pattern to array
     
     buttonPress(clickedColor);
    // gets users pattern
     if (userPattern.length === level) {
       let testPattern = [...gamePattern];
       for (let i = 0; i < level; i++) {
         if (testPattern[i] === userPattern[i]) {
           gameSequence();
           console.log("correct");
         } else {
           console.log("wrong");
         }
       }
     }

 });


function gameSequence() {
  level++;
  $("h1").html("Level: " + level);
  let nextColor = colors[Math.floor(Math.random() * 4)];
  gamePattern.push(nextColor);
  makeFlash(nextColor);
}

function makeFlash(nextColor) {
  $("#" + nextColor)
    .fadeOut(150)
    .fadeIn(150)
    .fadeOut(150)
    .fadeIn(150);
  // makes color by id flash
}

function buttonPress(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 300);
}


function gameOver() {
   $('body').addClass("gameover");
   setTimeout(function () {
      
     $('body').removeClass("gameover");
   }, 300);

  $("h1").text("Press Any Key to Start");
  level = 0;
  gamePattern = [];
  gameOn = false;
}
