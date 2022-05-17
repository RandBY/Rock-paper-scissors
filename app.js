
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice // selected choice from pressing on any of the rock, paper and scissors button
let computerChoice // random choice generated 
let result // returned fron function "getResult"




possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
// whenever you click on any of the buttons, all of the below axctions will be called 
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult() 
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) // Generation of computer choices ( we overall have 3 possible choices meaning that the length of var "possibleChoices" is 3)

    //you can assign numbers as you wish ( from 0-2)
    if (randomNumber === 0) {
        computerChoice = "Rock"
    }
    if (randomNumber === 1) {
        computerChoice = "Paper"
    }
    if (randomNumber === 2) {
        computerChoice = "Scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice

}

//Function to generat thr game result

function getResult(){
    if (computerChoice === userChoice){
        result = 'it is a draw!'
    }
    else if (computerChoice ===  'Rock' && userChoice === 'Scissors'){
        result = 'You lost :( '
    }
    else if (computerChoice === 'Paper' && userChoice === "Rock"){
    
        result = 'You lost :( '
    }
    else if (computerChoice === 'Scissors' && userChoice === "Paper"){
    
        result = 'You lost :( '
    }
    else {
        result= 'Wohoo, you won *-* '
    }

    resultDisplay.innerHTML = result
}


