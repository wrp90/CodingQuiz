// Coding Quiz

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
var defaultAnswers = ["A","B","C","D"]

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


function showQuestions() {
  questionBox.innerHTML = questions[0].question;
  // reach into the html
  // grab a place to put an answer
  // put the answer in that place
  answerBoxA.innerHTML = questions[0].answers[0].answer;
  answerBoxB.innerHTML = questions[0].answers[1].answer;
  answerBoxC.innerHTML = questions[0].answers[2].answer;
  console.log(questionBox.textcontent)
}




function startQuiz() {
  timerCount = 5;
  document.getElementById("start-button").disabled = true;
  startTimer();
  showQuestions();
}




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



function wrongAnswer() {
  scoreKeep.textContent--;
}


function resetGame() {
  // ------------ reset the questions
  // grab your first question from questions array
  // put that question and answrers in html
  questionBox.innerHTML = "Try to answer the following questions before the timer runs out.";
  answerBoxA.innerHTML = "A";
  answerBoxB.innerHTML = "B";
  answerBoxC.innerHTML = "C";





  timerElement.textContent = 60;
  scoreKeep.textContent = 0;
  document.getElementById("start-button").disabled = false;
  clearInterval(timer);
}



document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("reset-button").addEventListener("click", resetGame);

