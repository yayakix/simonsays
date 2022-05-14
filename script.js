let gameOn = false;
var level = 0;
let userPattern = [];
let gamePattern = [];
let testPattern = [...gamePattern];
let colors = ["purple", "pink", "blue", "green"];

$(document).keypress(function () {
  if (gameOn === false) {
    $("h1").text("Level: " + level);
    gameOn = true;
    gameSequence();

    $(".box").click(function (e) {
      let clickedColor = e.target.id;
      userPattern.push(clickedColor);
      //  push user pattern to array

      buttonPress(clickedColor);

      checkAns();
    });
    //
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
  $("body").addClass("gameover");
  setTimeout(function () {
    $("body").removeClass("gameover");
  }, 300);

  $("h1").text("Press Any Key to Start");
  console.log("game over");
  level = 0;
  gamePattern = [];
  userPattern = [];
  gameOn = false;
}

function checkAns() {
  console.log("--------------");
  console.log("game pattern: " + gamePattern);
  console.log("user pattern: " + userPattern);
  console.log("user length is" + userPattern.length);
  console.log("level is " + level);

  if (userPattern.length == level) {
    let testArea =[]
    console.log("checking answer");
    for (let i = 0; i < userPattern.length; i++) {
      if (userPattern[i] === gamePattern[i]) {
      testArea.push(true)
        //  how to end loop if it catches an error

        console.log("correct?");
      } else {
        console.log("wrong?");
        testArea.push(false)
      }
    }
    if(testArea.includes(false)){
      console.log("somethign wrong was found")
      gameOver()
    }else{
      console.log("running next round")
      userPattern = []
      gameSequence()
    }
  } else {
    console.log("waiting for more clicks");
  }
  // gameSequence()
  //  testPattern.shift();
}
