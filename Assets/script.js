// query selectors
var timerEl = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var welcomeContainer = document.querySelector("#welcome-container");
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answer-container");
// variables
var timer;
var timerCount;
var score;

// Object with properties for questions and answers
var quiz = [
  {
    question: "What is the web browser?",
    choices: [
      "A program used to access information on the World Wide Web",
      "A place where spiders meet up",
      "Google",
      "None of the above",
    ],
    answer: 0,
  },

  {
    question: "What does 'URL' stand for?",
    choices: [
      "U R Lazy",
      "Ugly Robot Language",
      "Uninformed Relatable Lists",
      "Uniform Resource Locator",
    ],
    answer: 3,
  },
  {
    question: "Where do EvenListeners belong on the JavaScript file?",
    choices: [
      "At the top",
      "Only inside for loops",
      "At the bottom",
      "They don't belong on the JavaScript file",
    ],
    answer: 2,
  },
  {
    question: "We can manipulate the HTML elements on the page via what?",
    choices: ["The DOT", "The DOM", "The DON", "The MOD"],
    answer: 1,
  },
];

// timer (setInterval function)
function countdown() {
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft--;
    startButton.disabled = true;
    if (timeLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timeInterval);
    }
  }, 1000);
}

function renderNextQuestion() {
  questionEl.textContent = quiz[0].question;
  // create for loop that creates lis, appends them to ul
  // create element in for loop, update text content, append to answer container
}

function startQuiz() {
  countdown();
  welcomeContainer.setAttribute("class", "hidden");
  renderNextQuestion();


}



// start button (clear page function)

// reference this to save data:

// function(event) {
//     event.preventDefault();

// init(); // needed to display high scores

// eventListener - start button
startButton.addEventListener("click", startQuiz);

// PSUEDOCODE
// 1. click start button, everything disappears (css display none)
// 2. click start button, question pops up
// 3. click start button, timer starts
// in terms of counter, every second, I want to remove 1 from some count variable.
// first function - startQuiz, first thing inside should be fx hide welcome message and fx show questions ()
// fx check answer,
// make as many fx as possible, separates code
