let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function changeImage() {
    const image = document.getElementById('computer-choice');
    const computerChoice = getComputerChoice();
    if (computerChoice === 'rock') {
        image.src = './images/stone-svgrepo-com.svg';
        image.alt = 'rock';
    } else if (computerChoice === 'paper') {
        image.src = './images/leaf-svgrepo-com.svg';
        image.alt = 'paper';
    } else if (computerChoice === 'scissor'){
        image.src = './images/scissor-hand-drawn-opened-tool-svgrepo-com.svg';
        image.alt = 'scissor';
    }
}

function playRound(humanChoice, computerChoice) {
    const header = document.querySelector('header');
    const heading = document.querySelector('h3');

    if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            heading.textContent = "You lose! " + humanChoice + " lose to " + computerChoice;
            computerScore += 1;
        } else if (computerChoice === 'scissor') {
            heading.textContent = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore += 1;
        } else if (humanChoice === computerChoice) {
            heading.textContent = "You both picked " + humanChoice;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissor') {
            heading.textContent = "You lose! " + humanChoice + " lose to " + computerChoice;
            computerScore += 1;
        } else if (computerChoice === 'rock') {
            heading.textContent = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore += 1;
        } else if (humanChoice === computerChoice) {
            heading.textContent = "You both picked " + humanChoice;
        }
    } else if (humanChoice === 'scissor') {
        if (computerChoice === 'rock') {
            heading.textContent = "You lose! " + humanChoice + " lose to " + computerChoice;
            computerScore += 1;
        } else if (computerChoice === 'paper') {
           heading.textContent = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore += 1;
        } else if (humanChoice === computerChoice) {
            heading.textContent = "You both picked " + humanChoice;
        }
    }
    header.appendChild(heading);
}

const humanChoice = document.querySelectorAll("button");
humanChoice.forEach((button) => {
    button.addEventListener('click', () => {
        if (computerScore == 5 || humanScore == 5) {
            return;
        }
        playRound(button.id, getComputerChoice());
        changeImage();
        updateScore();
    });
});

function updateScore(){
    const playersScore = document.querySelector('.players-score');
    const computersScore = document.querySelector('.computers-score');
    playersScore.textContent = humanScore;
    computersScore.textContent = computerScore;
    const winner = document.querySelector(".winner");

if (humanScore == 5){
    winner.textContent = "You won!";
} else if (computerScore == 5){
    winner.textContent = "The computer won!";
}
}