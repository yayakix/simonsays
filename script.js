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
  console.log("color is " + clickedColor);
  buttonPress(clickedColor);
  let checkArray = [...gamePattern];
  checkUserChoices(checkArray);
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

function checkUserChoices(array) {
//   while(array > 0){
 if (array[0] === userPattern[0]) {
   array.shift();
   userPattern = [];
   
 } else {
   console.log("did not run");
   $("body").addClass("gameover");
   setTimeout(function () {
     $("body").removeClass("gameover");
   }, 300);
   // } while loop
   gameSequence();
   //   let checkUser = [...userPattern];
   console.log("in the checkchoices:" + array);
   // console.log("color is " + color)
   // while array length is not 0, check
   
 }
  //     while (checkArray.length > 0) {
  //         console.log(checkArray)
  //         userPattern = [];

  //       console.log("user clicks: " + userPattern);
  //       console.log("check array: " + checkArray);

  //       if (checkArray[0] == userPattern[0]) {
  //         userPattern = [];
  //         checkArray.shift();
  //         console.log(checkArray)
  //         score += 1;
  //         $("h1").text("Score: " + score);

  //         console.log("correct");
  //       } else {
  //         console.log("wrong af and perform end game");
  //         gameOn = false;
  //       }
  //     }
  //     getRandomColor();

  //   while check array >0
}
function gameOver() {
  level = 0;
  gamePattern = [];
  gameOn = false;
}
