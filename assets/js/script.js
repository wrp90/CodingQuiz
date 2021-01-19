// Coding Quiz


// Global variables
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#start-button");
var resetButton = document.querySelector("#reset-button");
var scoreKeep = document.querySelector(".score");
var questionBox = document.querySelector(".question-box");
var ansBox = document.querySelector(".ans-container")
var headerBox = document.querySelector(".header-box");
var answerBoxA = document.querySelector("#answerBtn-a");
var answerBoxB = document.querySelector("#answerBtn-b");
var answerBoxC = document.querySelector("#answerBtn-c");
var timer;
var timerCount;



// question variables with answers
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
    question: "2.) Who invented Node?",
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
  },
  {
    question: "3.) What does HTML stand for?",
    answers: [
      {
        answer: "Hyper Trainer Marking Language",
        isCorrect: false
      },
      {
        answer: "Hypertext Markup Language",
        isCorrect: true
      },
      {
        answer: "Hyper Text Markup Leveler",
        isCorrect: false
      }
    ]
  },
  {
    question: "4.) What has a value of two choices, true and false?",
    answers: [
      {
        answer: "String",
        isCorrect: false
      },
      {
        answer: "Array",
        isCorrect: false
      },
      {
        answer: "Boolean",
        isCorrect: true
      }
    ]
  }
]

// function to show question 1
function showQuestion1() {
  questionBox.innerHTML = questions[0].question;
  answerBoxA.innerHTML = questions[0].answers[0].answer;
  answerBoxB.innerHTML = questions[0].answers[1].answer;
  answerBoxC.innerHTML = questions[0].answers[2].answer;
  console.log(questions)
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
  timerCount = 60;
  document.getElementById("start-button").disabled = true;
  startTimer();
  showQuestion1()
}

// function to check answer conditions
function checkAns() {
  if (questions[0].answers[0].isCorrect == true) {
    scoreKeep.textContent++;
    showQuestion2();
  } 
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
  questionBox.innerHTML = "GAME OVER"
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


// answer buttons
document.getElementById("answerBtn-a").addEventListener("click", checkAns);
// document.getElementById("answerBtn-b").addEventListener("click", checkAns);
// document.getElementById("answerBtn-c").addEventListener("click", checkAns);

// start and reset buttons
document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("reset-button").addEventListener("click", resetGame);

