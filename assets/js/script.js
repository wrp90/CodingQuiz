// Coding Quiz


// Global variables
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#start-button");
var resetButton = document.querySelector("#reset-button");
var scoreKeep = document.querySelector(".score");
var questionBox = document.querySelector(".question-box")
var headerBox = document.querySelector(".header-box")
var answerBoxA = document.querySelector(".answer-box-a")
var answerBoxB = document.querySelector(".answer-box-b")
var answerBoxC = document.querySelector(".answer-box-c")
var timer;
var timerCount;

// question variables
var questions = [
  {
    question: "1.) Who invented JavaScript?",
    answers: [
      {
        answer: "Brendon Eich",
        isCorrect: true
      },
      {
        answer: "Guido van Rossum",
        isCorrect: false
      },
      {
        answer: "Ryan Dahl",
        isCorrect: false
      },
    ]
  },
  {
    question: "Who invented Node?",
    answers: [
      {
        answer: "Brendon Eich",
        isCorrect: false
      },
      {
        answer: "Sheryl Sandberg",
        isCorrect: false
      },
      {
        answer: "Ryan Dahl",
        isCorrect: true
      },
    ]
  }
]

// function to show question 1
function showQuestion1() {
  questionBox.innerHTML = questions[0].question;
  answerBoxA.innerHTML = questions[0].answers[0].answer;
  answerBoxB.innerHTML = questions[0].answers[1].answer;
  answerBoxC.innerHTML = questions[0].answers[2].answer;
}

// function to show question 2
function showQuestion2() {
  questionBox.innerHTML = questions[1].question;
  answerBoxA.innerHTML = questions[1].answers[0].answer;
  answerBoxB.innerHTML = questions[1].answers[1].answer;
  answerBoxC.innerHTML = questions[1].answers[2].answer;
}



// function to start quiz
function startQuiz() {
  timerCount = 5;
  document.getElementById("start-button").disabled = true;
  startTimer();
  showQuestion1()
}



// function to start timer
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.innerHTML = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
      wrongAnswer();
    }
  }, 1000);
}


// wrong answer function
function wrongAnswer() {
  scoreKeep.textContent--;
  questionBox.innerHTML = "You Lose."
}

// function to reset game and display default prompt //
function resetGame() {
  questionBox.innerHTML = "Try to answer the following questions before the timer runs out.";
  answerBoxA.innerHTML = "A";
  answerBoxB.innerHTML = "B";
  answerBoxC.innerHTML = "C";
  timerElement.textContent = 60;
  scoreKeep.textContent = 0;
  document.getElementById("start-button").disabled = false;
  clearInterval(timer);
}


// start and reset buttons
document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("reset-button").addEventListener("click", resetGame);

