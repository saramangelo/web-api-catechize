// PSEUDOCODE
// Below is from Module 4 Challenge on BCS:
// WHEN I click the start button
// add event listener button click
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// (compare answers selected to answers in var array)
// THEN time is subtracted from the clock
// (function time--)
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// 1. click start button, everything disappears (css display none)
// a. click start button, question pops up
// b. click start button, timer starts
// in terms of counter, every second, I want to remove 1 from some count variable. remove 10 seconds from incorrect answer.
// 2. click on answer choice, next question pops up
// a. if question is wrong, alert user, remove 10 seconds
// b. if question is right, alert user
// 3. if timer is up or if user completes 4 questions, quiz ends
// 4. at end of quiz, screen with score and enter initials is viewed
// 5. high scores is a link that stores data and can be retrieved/viewed with score + initials
// CLASS NOTES:
// first function - startQuiz, first thing inside should be fx hide welcome message and fx show questions ()
// fx check answer,
// make as many fx as possible, separates code
// event.target - if matches class name we attribute (p tags - choices), fx render next question
// createElement, appendChild, conditional statements?
// event listener waiting for choices (choices.addEventListener - to run renderQuestion)
// start quiz, start countdown, clear welcome page, render questions
// check if answer selected matches correct answer
// save score
// save initials
// save and print score+initials
// timerCountDown -= 10
// start button (clear page function)
// reference this to save data:
// function(event) {
//     event.preventDefault();
// init(); // needed to display high scores
// SHUFFLE QUESTIONS
// shuffleQuestion = question.sort(() => Math.random() .5 );

// QUERY SELECTORS
var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var welcomeContainer = document.querySelector("#welcome-container");
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answer-container");
var questionContainer = document.querySelector(".question-container");
var formEl = document.querySelector("#initials");
var inputEl = document.querySelector("#input");
var endScreenEl = document.querySelector("#end-screen");
var scoreEl = document.querySelector(".high-scores");

// VARIABLES
var timerCount;
var questionIndex = 0;
var timeLeft = 60;
var scoresArray = JSON.parse(localStorage.getItem("high scores")) || [];

// ARRAY OF OBJECTS WITH QUESTIONS, CHOICES, CORRECT ANSWER
var quiz = [
  {
    question: "What is the web browser?",
    choices: [
      "a. A program used to access information on the World Wide Web",
      "b. A place where spiders meet up",
      "c. Google",
      "d. None of the above",
    ],
    answer: "a. A program used to access information on the World Wide Web",
  },

  {
    question: "What does 'URL' stand for?",
    choices: [
      "a. U R Lazy",
      "b. Ugly Robot Language",
      "c. Uninformed Relatable Lists",
      "d. Uniform Resource Locator",
    ],
    answer: "d. Uniform Resource Locator",
  },
  {
    question: "Where do EvenListeners belong on the JavaScript file?",
    choices: [
      "a. At the top",
      "b. Only inside for loops",
      "c. At the bottom",
      "d. They don't belong on the JavaScript file",
    ],
    answer: "c. At the bottom",
  },
  {
    question: "We can manipulate the HTML elements on the page via what?",
    choices: ["a. The DOT", "b. The DOM", "c. The DON", "d. The MOD"],
    answer: "b. The DOM",
  },
];

// dynamically add game rules to welcome container div
var gameRules = document.createElement("p");
gameRules.textContent =
  "This quiz is 4 questions long. You have 60 seconds. Once you select an answer, the next question will prompt. If a wrong answer is selected, 10 seconds is deducted from your timer. Your score is equal to the time left on the timer. Good luck!";
document.body.appendChild(gameRules);
welcomeContainer.appendChild(gameRules);

// FUNCTIONS

// after clicking start button, timer starts, welcome container is hidden, function render question is called
function startQuiz() {
  countdown();
  welcomeContainer.setAttribute("class", "hidden");
  renderQuestion(questionIndex);
}

// TIMER
var timeInterval;

function countdown() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time left: " + timeLeft;
    if (timeLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timeInterval);
      timeLeft = 0;
      timerEl.innerHTML = "";
      endgame();
      questionContainer.innerHTML = "";
    }
  }, 1000);
}

// render question function displays each question and set of choices
  // create for loop that creates lis, appends them to ul
  // create element in for loop, update text content, append to answer container

function renderQuestion(questionIndex) {

  questionEl.textContent = quiz[questionIndex].question;
  questionContainer.appendChild(questionEl);

  answerEl.innerHTML = "";
  for (var i = 0; i < quiz[questionIndex].choices.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.classList.add("answer-button");
    answerButton.setAttribute("style", "border-radius: 8px");
    answerButton.textContent = quiz[questionIndex].choices[i];
    answerEl.appendChild(answerButton);
    questionContainer.appendChild(answerEl);
  }
}

// take value of the button (elementClicked) and compare it to quiz[questionIndex].answer then subtract time, move on to next question
function checkAnswer(event) {

  var elementClicked = event.target;

  if (elementClicked.matches("button"))
    var answerText = elementClicked.textContent;

  if (answerText === quiz[questionIndex].answer) {
  } else {
    timeLeft -= 10;
  }
  questionIndex++;
  if (questionIndex > quiz.length - 1) {
    questionContainer.setAttribute("class", "hidden");
    formEl.classList.remove("hidden");
    timerEl.setAttribute("class", "hidden");
    clearInterval(timeInterval);
    endgame();
  } else {
    renderQuestion(questionIndex);
  }


  //  quiz over, out of questions, want to display score, have user enter initials

}


// FUNCTION TO GET, SET HIGH SCORE AND INITIALS
  // in endgame function, remove class hidden on initials form
function endgame() {

  endScreenEl.classList.remove("hidden");

  var finalScoreEl = document.querySelector("#final-score");
  finalScoreEl.textContent = " " + timeLeft;
}
endScreenEl.classList.add("hidden");

function saveScore(event) {
  formEl.classList.add("hidden");
  event.preventDefault();
  var initials = inputEl.value;
  var newScore = {
    score: timeLeft,
    initials: initials,
  };


  scoresArray.push(newScore);

  localStorage.setItem("high scores", JSON.stringify(scoresArray));



  for (var i = 0; i < scoresArray.length; i++) {
    var scoresList = document.createElement("p");
    scoresList.textContent =
      scoresArray[i].initials + ": " + scoresArray[i].score;
    endScreenEl.append(scoresList);

  }
}


// EVENT LISTENER - START BUTTON, CHECK ANSWER, END GAME

startButton.addEventListener("click", startQuiz);
answerEl.addEventListener("click", checkAnswer);
formEl.addEventListener("submit", saveScore);
