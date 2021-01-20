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
var answers = ["Brendon Eich", "Ryan Dahl", "Hypertext Markup Language", "Boolean", "Submit"]

// variables to display questions and answer choices
var questions = [
  {
    question: "1.) Who invented JavaScript?",
    answers: [
      {
        answer: "Brendon Eich",
        // correct
      },
      {
        answer: "Guido van Rossum",
      },
      {
        answer: "Herb Sutter",
      },
    ]
  },
  {
    question: "2.) Who invented Node?",
    answers: [
      {
        answer: "Sheryl Sandberg",
      },
      {
        answer: "Ryan Dahl",
        // correct
      },
      {
        answer: "Dennis Ritchie",
      },
    ]
  },
  {
    question: "3.) What does HTML stand for?",
    answers: [
      {
        answer: "Hyper Trainer Marking Language",
      },
      {
        answer: "Hypertext Markup Language",
        // correct
      },
      {
        answer: "Hyper Text Markup Leveler",
      }
    ]
  },
  {
    question: "4.) What has a value of two choices, true and false?",
    answers: [
      {
        answer: "String",
      },
      {
        answer: "Array",
      },
      {
        answer: "Boolean",
        // correct
      }
    ]
  },
  {
    // filler question to end the game
    question: "Game Over.",
    answers: [
      {
        answer: "A",
      },
      {
        answer: "B",
      },
      {
        answer: "C",
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
}

// function to show question 2
function showQuestion2() {
  questionBox.innerHTML = questions[1].question;
  answerBoxA.innerHTML = questions[1].answers[0].answer;
  answerBoxB.innerHTML = questions[1].answers[1].answer;
  answerBoxC.innerHTML = questions[1].answers[2].answer;
}

// function to show question 3
function showQuestion3() {
  questionBox.innerHTML = questions[2].question;
  answerBoxA.innerHTML = questions[2].answers[0].answer;
  answerBoxB.innerHTML = questions[2].answers[1].answer;
  answerBoxC.innerHTML = questions[2].answers[2].answer;
}

// function to show question 4
function showQuestion4() {
  questionBox.innerHTML = questions[3].question;
  answerBoxA.innerHTML = questions[3].answers[0].answer;
  answerBoxB.innerHTML = questions[3].answers[1].answer;
  answerBoxC.innerHTML = questions[3].answers[2].answer;
}

// a filler question to end the game
function showFinalQ() {
  questionBox.innerHTML = questions[4].question;
  answerBoxA.innerHTML = questions[4].answers[0].answer;
  answerBoxB.innerHTML = "-";
  answerBoxC.innerHTML = "-";
}

// function to start quiz
function startQuiz() {
  document.getElementById("answerBtn-a").disabled = false;
  document.getElementById("answerBtn-b").disabled = false;
  document.getElementById("answerBtn-c").disabled = false;
  timerCount = 60;
  document.getElementById("start-button").disabled = true;
  startTimer();
  showQuestion1()
}

// Event listener for all three ans buttons with a function 
// to generate the next question when correct ans is selected
ansBox.addEventListener("click", function(event) {
  var element = event.target;
  if (element.innerHTML === answers[0]) {
    scoreKeep.textContent++;
    showQuestion2();
  } else if (element.innerHTML === answers[1]) {
    scoreKeep.textContent++;
    showQuestion3();
  } else if (element.innerHTML === answers[2]) {
    scoreKeep.textContent++;
    showQuestion4();
  } else if (element.innerHTML === answers[3]) {
    scoreKeep.textContent++;
    document.getElementById("answerBtn-a").disabled = true;
    document.getElementById("answerBtn-b").disabled = true;
    document.getElementById("answerBtn-c").disabled = true;
    showFinalQ();
  } else if (element.innerHTML === answers[4]) {
    gameOver();
    timerCount.disabled = true;
    timerElement.innerHTML = "-"
  } else {
    timerCount -= 5;
    scoreKeep.innerHTML--;
  }
  console.log(element)
});

// a function to end the game
function gameOver() {
  // questionBox.innerHTML = "Game Over";
  clearInterval(timer);
  questionBox.innerHTML = "GAME OVER"
  document.getElementById("answerBtn-a").disabled = true;
  document.getElementById("answerBtn-b").disabled = true;
  document.getElementById("answerBtn-c").disabled = true;

}

// a function to gather user input and record the score
function recordScore() {
  var userInput = prompt("Please enter your initials.")
  localStorage.setItem(userInput, scoreKeep.innerHTML);
  clearInterval(timer);
  timerElement.innerHTML = "-"
  document.getElementById("answerBtn-a").disabled = true;
  document.getElementById("answerBtn-b").disabled = true;
  document.getElementById("answerBtn-c").disabled = true;
}


// function to start timer
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.innerHTML = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
      wrongAnswer();
      gameOver();
      recordScore();
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
  document.getElementById("answerBtn-a").disabled = false;
  document.getElementById("answerBtn-b").disabled = false;
  document.getElementById("answerBtn-c").disabled = false;
  timerElement.textContent = 60;
  scoreKeep.textContent = 0;
  document.getElementById("start-button").disabled = false;
  clearInterval(timer);
}

// start and reset buttons
document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("reset-button").addEventListener("click", resetGame);
document.getElementById("submit-button").addEventListener("click", recordScore);
