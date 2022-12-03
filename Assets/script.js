// PSUEDOCODE
// Below is from Module 4 Challenge on BCS:
// WHEN I click the start button
    // add event listener button click
// THEN a timer starts and I am presented with a question
    // function renderNextQuestion()
// WHEN I answer a question
    // make answer choices buttons
// THEN I am presented with another question
    // function renderNextQuestion()
// WHEN I answer a question incorrectly
    // compare answers selected to answers in var array
// THEN time is subtracted from the clock
    // function time--
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// 1. click start button, everything disappears (css display none)
// a. click start button, question pops up
// b. click start button, timer starts
// in terms of counter, every second, I want to remove 1 from some count variable. remove 10 seconds from incorrect answer.
// 2. 
// first function - startQuiz, first thing inside should be fx hide welcome message and fx show questions ()
// fx check answer,
// make as many fx as possible, separates code

// timerCountDown -= 10

// start button (clear page function)

// reference this to save data:

// function(event) {
//     event.preventDefault();

// init(); // needed to display high scores




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

// array of objects with properties for questions and answers
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
  for (var i = 0; i < quiz[0].choices.length; i++) {
    console.log(quiz[i].choices)
    var liElement = document.createElement("li");
    liElement.textContent = quiz[0].choices[i];
    liElement.setAttribute("data-index", i);
    answerEl.appendChild(liElement);
    console.log(liElement);

    var button = document.createElement("button");
    button.textContent = quiz[0].choices[i];
    liElement.appendChild(button);
    answerEl.appendChild(liElement);
    console.log(button);

    }
}


// start quiz, start countdown, clear welcome page, render questions
function startQuiz() {
  countdown();
  welcomeContainer.setAttribute("class", "hidden");
  renderNextQuestion();
}



// eventListener - start button
startButton.addEventListener("click", startQuiz);
