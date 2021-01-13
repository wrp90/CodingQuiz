// Coding Quiz

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var scoreKeep = document.querySelector(".score");
// var startButton = document.querySelector(".start-button");

var timer;
var timerCount = 60
var score = 0


function startQuiz() {
  timerCount = 60
}




function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.innerHTML = timerCount;
      if (timerCount === 0) {
      clearInterval(timer);
      wrongAnswer();
    }
  }, 1000);
}


function wrongAnswer() {
  score++;
  setScore();
}



function setScore() {
  score.textContent = score;
}



document.getElementById("start-button").addEventListener("click", startTimer);


