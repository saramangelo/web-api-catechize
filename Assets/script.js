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


// VARIABLES
var timer;
var timerCount;
var score;
var questionIndex = 0;
var timeLeft = 60;

// ARRAY OF OBJECTS WITH QUESTIONS, CHOICES, CORRECT ANSWER
var quiz = [
  {
    question: "What is the web browser?",
    choices: [
      "A program used to access information on the World Wide Web",
      "A place where spiders meet up",
      "Google",
      "None of the above",
    ],
    answer: "A program used to access information on the World Wide Web",
  },

  {
    question: "What does 'URL' stand for?",
    choices: [
      "U R Lazy",
      "Ugly Robot Language",
      "Uninformed Relatable Lists",
      "Uniform Resource Locator",
    ],
    answer: "Uniform Resource Locator",
  },
  {
    question: "Where do EvenListeners belong on the JavaScript file?",
    choices: [
      "At the top",
      "Only inside for loops",
      "At the bottom",
      "They don't belong on the JavaScript file",
    ],
    answer: "At the bottom",
  },
  {
    question: "We can manipulate the HTML elements on the page via what?",
    choices: ["The DOT", "The DOM", "The DON", "The MOD"],
    answer: "The DOM",
  },
];

// dynamically add game rules to welcome container div
var gameRules = document.createElement("p");
gameRules.textContent =
  "This quiz is 4 questions long. You have 60 seconds. Once you select an answer, the next question will prompt. If a wrong answer is selected, 10 seconds is deducted from your timer. Your score is equal to the time left on the timer. Good luck!";
document.body.appendChild(gameRules);
welcomeContainer.appendChild(gameRules);
// gameRules.style.backgroundColor =

// FUNCTIONS

// after clicking start button, timer starts, welcome container is hidden, function render question is called
function startQuiz() {
  countdown();
  welcomeContainer.setAttribute("class", "hidden");
  renderQuestion(questionIndex);
}

// timer
function countdown() {
  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft--;
    if (timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timeInterval);
    }
  }, 1000);
}

// render question function displays each question and set of choices

function renderQuestion(questionIndex) {
  console.log(questionIndex);
  questionEl.textContent = quiz[questionIndex].question;
  questionContainer.appendChild(questionEl);
  // create for loop that creates lis, appends them to ul
  // create element in for loop, update text content, append to answer container
  answerEl.innerHTML = "";
  for (var i = 0; i < quiz[questionIndex].choices.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.textContent = quiz[questionIndex].choices[i];
    answerEl.appendChild(answerButton);
    questionContainer.appendChild(answerEl);
  }
}

// take value of the button (elementClicked) and compare it to quiz[questionIndex].answer then subtract time, move on to next question
function checkAnswer(event) {
  console.log(answerEl);
  var elementClicked = event.target;

  if (elementClicked.matches("button"))
    var answerText = elementClicked.textContent;
  console.log(answerText);
  if (answerText === quiz[questionIndex].answer) {
    // alert("Correct!");
  } else {
    // alert("Incorrect!");
    timeLeft -= 10;
  }
  questionIndex++;
  if (questionIndex > quiz.length-1) {
    questionContainer.setAttribute("class", "hidden");
    formEl.classList.remove("hidden");
    endgame();
  } else {
    renderQuestion(questionIndex);
  }
  console.log(quiz.length, "quiz length")

  //  quiz over, out of questions, want to display score, have user enter initials

}

// STYLING

// in endgame function, remove class hidden on initials form

function endgame(){
  event.preventDefault()
  console.log("got clicked");
  var initials = inputEl.value;
// FUNCTION TO STORE, GET, RENDER HIGH SCORE ON PAGE

var highScores = localStorage.getItem("") || '[]';
highScores = JSON.parse(highScores);

// declare and add new high scores
var newScore = {
  score: timeLeft,
  initials: initials
}
console.log(newScore)

highScores.push(newScore)

localStorage.setItem("high scores", JSON.stringify(newScore))
}

formEl.addEventListener("submit", endgame)
// function saveHighScores(){
//   var highScores = []
// ; localStorage.setItem("highScores", JSON.stringify(highScores));}
// function renderHighScores() {
//   // Use JSON.parse() to convert text to JavaScript object
//   var highScores = JSON.parse(localStorage.getItem("highScore"));
//   // Check if data is returned, if not exit out of the function
//   if (highScore !== null) {
//  var highScores = document.querySelector(".high-scores").innerHTML
//   } else {
//     return;
//   }
// }

// saveButton.addEventListener("click", function(event) {
// event.preventDefault();
// saveHighScores();
// renderHighScores();
// });

// // The init() function fires when the page is loaded
// function init() {
//   // When the init function is executed, the code inside renderHighScores function will also execute
//   renderHighScores();
// }
// init();

// EVENT LISTENER - START BUTTON, CHECK ANSWER

startButton.addEventListener("click", startQuiz);
answerEl.addEventListener("click", checkAnswer);
