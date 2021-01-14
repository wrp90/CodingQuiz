// Coding Quiz

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#start-button");
var resetButton = document.querySelector("#reset-button");
var scoreKeep = document.querySelector(".score");

var timer;
var timerCount = 5
var score = 0


function startQuiz() {
  timerCount = 60;
  // hideButton();
  startButton.disable = true;
  startTimer();
}




function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    // hideButton()
    timerElement.innerHTML = timerCount;
      if (timerCount === 0) {
      clearInterval(timer);
      wrongAnswer();
    }
  }, 1000);
}

function hideButton() {
  // startButton.style.display = "block";
  startButton.style.display = "none";
}

function showButton() {
  startButton.style.display = "block";
}


function wrongAnswer() {
  score--;
  setScore();
}



function setScore() {
  scoreKeep.textContent = score;
}

function resetGame() {
  scoreKeep.textContent = score;
  timerCount.textContent = 60;
  setScore();
  showButton();
  clearInterval(timer);
}



document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("reset-button").addEventListener("click", resetGame);

