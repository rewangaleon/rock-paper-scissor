function getComputerChoice(){
    let choice = [`rock`, `paper`, `scissor`];
    let randomNumber = Math.floor(Math.random() * 3);
    // console.log(choice[randomNumber]);
    return choice[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = 0;

    if(playerSelection==computerSelection){
        result = "The round is a tie!"
    }

    if(playerSelection==`scissor`){
        if(computerSelection==`rock`) result = "The Player lose!"
        if(computerSelection==`paper`) result = "The Player win!"
    }

    if(playerSelection==`rock`){
        if(computerSelection==`paper`) result = "The Player lose!"
        if(computerSelection==`scissor`) result = "The Player win!"
    }

    if(playerSelection==`paper`){
        if(computerSelection==`scissor`) result = "The Player lose!"
        if(computerSelection==`rock`) result = "The Player win!"
    }

    return(`Player Choice = ${playerSelection}, Computer Choice = ${computerSelection}. ${result}`);
}
  
const playerSelection = prompt("Please enter your choice:");
let computerSelection = 0;
let result = 0;

computerSelection = getComputerChoice();
result = playRound(playerSelection, computerSelection);
console.log(result);

// document.getElementById("result1").innerHTML = result;
let paragraphElement = document.getElementById("result1");
paragraphElement.textContent = result;
  