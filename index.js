

const display = document.querySelector('h2');
const ps = document.querySelector('#pscore');
const cs = document.querySelector('#cscore');
const msg = document.querySelector('#msg');

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
    if (playerSelection === computerSelection){
        display.innerHTML = '<span style="color: #000">Tied</span>';
    }
    else if (playerSelection === "rock"){
        if (computerSelection == "paper"){
            display.innerHTML = '<span style="color: red">You lost..</span>';
            cs.innerHTML++;
            game(ps.innerText, cs.innerText);
        }
        else {
            display.innerHTML = '<span style="color: blue">You Win!</span>';
            ps.innerHTML++;
            game(ps.innerText, cs.innerText);
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection == "paper"){
            display.innerHTML = '<span style="color: blue">You Win!</span>';
            ps.innerHTML++;
            game(ps.innerText, cs.innerText);
        }
        else {
            display.innerHTML = '<span style="color: red">You lost..</span>';
            cs.innerHTML++;
            game(ps.innerText, cs.innerText);
        }
    }
    else {
        if (computerSelection == "rock"){
            display.innerHTML = '<span style="color: blue">You Win!</span>';
            ps.innerHTML++;
            game(ps.innerText, cs.innerText);
            
        }
        else {
            display.innerHTML = '<span style="color: red">You lost!</span>';
            cs.innerHTML++;
            game(ps.innerText, cs.innerText);
        }
    }
}

function game(player, computer){
    if (player == 5){
        msg.textContent = "You won the game!";
        openPopup();
    }
    else if (computer == 5) {
        msg.textContent = "You lost..";
        openPopup();
    }
}

const btnRock = document.querySelector(".rock");
btnRock.addEventListener('click', () => {
  playRound("rock", getComputerChoice());
});

const btnPaper = document.querySelector(".paper");
btnPaper.addEventListener('click', () => {
  playRound("paper", getComputerChoice());
});

const btnScissors = document.querySelector(".scissors");
btnScissors.addEventListener('click', () => {
  playRound("scissors", getComputerChoice());
});

const popup = document.getElementById("popup");
const popContainer = document.getElementById("pop-container");

function openPopup(){
    popup.classList.add("open-popup");
    popContainer.classList.add("open-pop-container");
}

const reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    popup.classList.remove("open-popup");
    popContainer.classList.remove("open-pop-container");
    display.innerText = "Score 5 times to win!";
    ps.innerHTML = 0;
    cs.innerHTML = 0;
});

const img = Array.from(document.querySelectorAll('img'));
img.forEach(img => img.addEventListener('click', () => {
    img.classList.add("onclick");
}));
img.forEach(img => img.addEventListener('transitionend', () => {
    img.classList.remove("onclick");
}));

