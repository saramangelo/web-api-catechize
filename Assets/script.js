// query selectors
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
// variables
var timer;
var timerCount;
var score;

// Object with properties for questions and answers
var quiz = 
      [
        {
          question: "What is the web browser?",
          choices: ["A program used to access information on the World Wide Web", "A place where spiders meet up", "Google", "None of the above"],
          answer: 0
        },
        
        {
          question: "What does 'URL' stand for?",
          choices: ["U R Lazy", "Ugly Robot Language", "Uninformed Relatable Lists", "Uniform Resource Locator"],
          answer: 3
        },
        {
          question: "Where do EvenListeners belong on the JavaScript file?",
          choices: ["At the top", "Only inside for loops", "At the bottom", "They don't belong on the JavaScript file"],
          answer: 2
        },
        {
          question: "We can manipulate the HTML elements on the page via what?",
          choices: ["The DOT", "The DOM", "The DON", "The MOD"],
          answer: 1
        }
        
      ];


// timer (setInterval function)
function startQuiz() {
    timerCount = 60;
    startTimer();
}

// reference this to save data:





// function(event) {
//     event.preventDefault();
    



// init(); // needed to display high scores 

// eventListener - start button
startButton.addEventListener("click", startQuiz);
console.log(startButton);



// PSUEDOCODE
// 1. click start button, everything disappears
// 2. click start button, question pops up
// 3. click start button, timer starts
// in terms of counter, every second, I want to remove 1 from some count variable. 
// first function - startQuiz, first thing inside should be fx hide welcome message and fx show questions ()
// fx check answer,
// make as many fx as possible, separates code