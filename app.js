// Select all Dom Elements
const computerChoice = document.querySelector(".computer-choice");
const userChoiceDisplay = document.querySelector(".user-choice");
const resultDisplay = document.querySelector(".result");

let result
let randumchoice
let userChoice
// Select buttons

const btns = document.querySelectorAll(".btn");

// Creating and Array 

let game = ["Rock","Paper","Scissors"]

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const className = e.currentTarget.classList;
     if(className.contains("rock-btn")){
         userChoice = game[0]
         userChoiceDisplay.textContent = userChoice;
         systemChoice();
         results();
         
     } else if (className.contains("paper-btn")){
         userChoice = game[1]
         userChoiceDisplay.textContent = userChoice; 
         systemChoice();
         results();
         
     } else {
        userChoice = game[2]
         userChoiceDisplay.textContent = userChoice;
         systemChoice();
         results();         
     }
    })

})

function systemChoice(){
    randumchoice = game[randumnumber()];
    computerChoice.textContent = randumchoice;
}

function randumnumber(){
    return Math.floor(Math.random()*game.length);
}

function results(){ 
  if (randumchoice === userChoice){
      result = "Match tie"
}   
  if (randumchoice === "Rock" && userChoice === "Paper"){
    result = "User win"
}
    if (randumchoice === "Rock" && userChoice === "Scissors"){
    result = "Computer win"
}
    if (randumchoice === "Paper" && userChoice === "Scissors"){
    result = "user win"
}
    if (randumchoice === "Paper" && userChoice === "Rock"){
    result = "computer win"
}
    if (randumchoice === "Scissors" && userChoice === "Rock"){
    result = "user win"
}
    if (randumchoice === "Scissors" && userChoice === "Paper"){
    result = "computer win"
}
    resultDisplay.textContent = result;
}
