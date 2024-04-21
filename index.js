function getComputerChoice(){
    return "rock";
}


function playRound(playerSelection, computerSelection) {
    return(`${playerSelection} and ${computerSelection}`);
  }
  
  const playerSelection = "paper";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  