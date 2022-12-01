// query selectors

// variables

// var questions
// var answers


// arrays

// Object with properties for questions and answers


// timer (setInterval function), eventListener for button click

// reference this to save data:

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

var startButton = document.querySelector(".start-button");

function startQuiz(){

}

startButton.addEventListener("click", startQuiz);

// 1. click start button, everything disappears
// 2. click start button, question pops up
// 3. click start button, timer starts
// in terms of counter, every second, I want to remove 1 from some count variable. 
