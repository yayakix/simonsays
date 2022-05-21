let gameOn = false;
var level = 0;
let userPattern = [];
let gamePattern = [];
let testPattern = [...gamePattern];
let colors = ["purple", "pink", "blue", "green"];

$(document).keypress(function () {
  console.log("a key has been pressed")
  if (gameOn === false) {

    // $("h1").text("Levell: " + level);
    gameOn = true;
    console.log("the game is now true")

  gamePattern = [];
  userPattern = [];
    gameSequence();

    $(".box").click(function (e) {
      let clickedColor = e.target.id;
      userPattern.push(clickedColor);
      //  push user pattern to array

      buttonPress(clickedColor);
        console.log("-------After color click-------");
        console.log("game pattern: " + gamePattern);
        console.log("user pattern: " + userPattern);
        console.log("user length is" + userPattern.length);
        console.log("level is " + level);

        setTimeout(function () {
          console.log("After 5 seconds!");
        }, 2000);
      checkAns2();
    });
    //
  }
});

function gameSequence() {
  
  level++;
  $("h1").html("Level: " + level);
  let nextColor = colors[Math.floor(Math.random() * 4)];
  gamePattern.push(nextColor);
  console.log(
    "level: " + level + " user: " + userPattern + " game: " + gamePattern
  );
  makeFlash(nextColor);
}

function makeFlash(nextColor) {
  $("#" + nextColor)
    .fadeOut(250)
    .fadeIn(150)
    .fadeOut(250)
    .fadeIn(250);
  // makes color by id flash
}

function buttonPress(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function () {
    $("#" + color).removeClass("pressed");
  }, 300);
}

function gameOver() {
  level = 0;
  gamePattern = [];
  userPattern = [];
  gameOn = false;
  $("body").addClass("gameover");
  setTimeout(function () {
    $("body").removeClass("gameover");
  }, 300);

  $("h1").text("Press Any Key to Start");
  console.log("-----game over---");

   console.log("------gameoversection--------");
   console.log("game pattern: " + gamePattern);
   console.log("user pattern: " + userPattern);
   console.log("user length is" + userPattern.length);
   console.log("level is " + level);
}

// function checkAns() {
//   console.log("--------------");
//   console.log("game pattern: " + gamePattern);
//   console.log("user pattern: " + userPattern);
//   console.log("user length is" + userPattern.length);
//   console.log("level is " + level);

//   if (userPattern.length == level) {
//     let testArea = [];
//     console.log("checking answer");
//     for (let i = 0; i < userPattern.length; i++) {
//       if (userPattern[i] === gamePattern[i]) {
//         testArea.push(true);
//         //  how to end loop if it catches an error

//         console.log("correct?");
//       } else {
//         console.log("wrong?");
//         testArea.push(false);
//       }
//     }
//     if (testArea.includes(false)) {
//       console.log("somethign wrong was found");
//       gameOver();
//     } else {
//       console.log("running next round");
//       userPattern = [];
//       gameSequence();
//     }
//   } else {
//     console.log("waiting for more clicks");
//   }
//   // gameSequence()
//   //  testPattern.shift();
// }

//  make a check answer function after each click and check every user pattern until it matches game pattern length
function checkAns2() {
  console.log("got here");
  let wrong = 0;
  if (userPattern.length < gamePattern.length) {
    for (let i = 0; i < userPattern.length; i++) {
      if (userPattern[i] !== gamePattern[i]) {
        wrong += 1;
        console.log("wrong answer while still below gp");
      } else {
        console.log("not wrong ans while below gp");
        // i want to keep the game going, aka wait for more choices
      }
    }
    if (wrong > 0) {
      console.log("restart game");
      gameOver();
    } else {
      console.log("continue listening for clicks");
    }
      if (wrong > 0) {
        gameOver();
        console.log("restart game");
      } else {
        console.log("continue game pattern");
        userPattern = [];
        gameSequence();
      }


    //
  } else if (userPattern.length === gamePattern.length) {
    // else if user pattern is equal to game pattern, this will be the check that causes the round to move on
    // empty user pattern for them to try again'
    for (let i = 0; i < userPattern.length; i++) {
      if (userPattern[length - 1] !== gamePattern[length - 1]) {
        console.log("user lenth: " + userPattern[length - 1]);
        wrong += 1;
        // just testing last position instead of looping
        console.log("wrong answer chosen on final check");

      } else {
        // length is undefined
        console.log(
          "user lenth: " +
            userPattern[userPattern.length - 1] +
            "gam length: " +
            gamePattern[userPattern.length - 1]
        );
        // userPattern = [];
        console.log("not wrong ans at final check");
        // i want to keep the game going, aka wait for more choices
      }
    }
      if (wrong > 0) {
        gameOver();
        console.log("restart game");
      } else {
        console.log("continue game pattern");
        userPattern = [];
        gameSequence();
      }


  
    }
      // if (wrong > 0) {
      //   gameOver();
      //   console.log("restart game");
      // } else {
      //   console.log("continue game pattern");
      //   userPattern = [];
      //   gameSequence();
      // }


  }
  