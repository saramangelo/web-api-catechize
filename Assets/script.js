// query selectors
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
// variables
var timer;
var timerCount;
var score;
// var questions
// var answers


// arrays

// Object with properties for questions and answers


// timer (setInterval function), eventListener for button click


// reference this to save data:

function startQuiz() {
    timerCount = 60;
    startTimer();
}



// function(event) {
//     event.preventDefault();
    
//       // TODO: Create user object from submission
  
//     var userObject = {
//       firstName: firstNameInput.value.trim(),
//       lastName: lastNameInput.value.trim(),
//       email: emailInput.value.trim(),
//       password: passwordInput.value.trim()
//     };

//     // TODO: Set new submission to local storage 
  
//   localStorage.setItem("userObject", JSON.stringify(userObject));
  
//   });


// init(); // needed to display high scores 
startButton.addEventListener("click", startQuiz);
function startTimer() {

    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
    //     if (timerCount >= 0) {
    //         if (score && timerCount > 0) {
           
    //             clearInterval(timer);
    //         }
    //     }
    //     if (timerCount === 0) {
         
    //         clearInterval(timer);
    //     }
    }, 1000);
}


function startQuiz(){

}

startButton.addEventListener("click", startQuiz);

// PSUEDOCODE
// 1. click start button, everything disappears
// 2. click start button, question pops up
// 3. click start button, timer starts
// in terms of counter, every second, I want to remove 1 from some count variable. 
// first function - startQuiz, first thing inside should be fx hide welcome message and fx show questions ()
// fx check answer,
// make as many fx as possible, separates code