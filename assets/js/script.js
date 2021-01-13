// Coding Quiz

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var scoreKeep = document.querySelector(".score");
// var startButton = document.querySelector(".start-button");

var timer;
var timerCount = 5
var score = 0


// function startQuiz() {
//   timerCount = 60
// }




function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    console.log(timerCount)
    timerElement.innerHTML = timerCount;
      if (timerCount === 0) {
      clearInterval(timer);
      wrongAnswer();
    }
  }, 1000);
}


function wrongAnswer() {
  score--;
  setScore();
}



function setScore() {
  scoreKeep.textContent = score;
}

function resetGame() {

}



document.getElementById("start-button").addEventListener("click", startTimer);
// document.getElementById("reset-button").addEventListener("click", startTimer);

