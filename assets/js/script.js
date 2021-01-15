// Coding Quiz

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#start-button");
var resetButton = document.querySelector("#reset-button");
var scoreKeep = document.querySelector(".score");

var timer;
var timerCount;
var score;



function startQuiz() {
  timerCount = 60;
  document.getElementById("start-button").disabled = true;
  startTimer();
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
  scoreKeep.textContent--;
}


function resetGame() {
  timerElement.textContent = 60;
  scoreKeep.textContent = 0;
  document.getElementById("start-button").disabled = false;
  clearInterval(timer);
}



document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("reset-button").addEventListener("click", resetGame);

