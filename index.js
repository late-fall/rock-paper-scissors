function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return "rock";
    }
    else if (choice === 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection){
        console.log("tie!");
        return 0;
    }
    else if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection == "paper"){
            console.log("You lost!");
            return -1;
        }
        else {
            console.log("You win!");
            return 1;
        }
    }
    else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection == "paper"){
            console.log("You win!");
            return 1;
        }
        else {
            console.log("You lost!");
            return -1;
        }
    }
    else {
        if (computerSelection == "rock"){
            console.log("You win!");
            return 1;
        }
        else {
            console.log("You lost!");
            return -1;
        }
    }
}

//game function plays 5 rounds and keep score and report winner
function game(){
    let score = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("What will you play?(rock/paper/scissors)");
        score += playRound(playerSelection, getComputerChoice());
    }

    if (score === 0){
        return "You tied the game";
    }
    else if (score > 0){
        return "You won the game";
    }
    else {
        return "You lost the game";
    }
}

console.log(game());