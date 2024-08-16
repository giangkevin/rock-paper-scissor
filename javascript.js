let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    let answer = prompt("Rock, paper or scissor ?");
    return answer.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log("You lose! " + humanChoice + " lose to " + computerChoice); 
            computerScore += 1;
        } else if (computerChoice === 'scissor') {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore += 1;
        }else if (humanChoice === computerChoice){
            console.log("You both picked " + humanChoice);
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissor') {
            console.log("You lose! " + humanChoice + " lose to " + computerChoice); 
            computerScore += 1;
        } else if (computerChoice === 'rock') {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore += 1;
        }else if (humanChoice === computerChoice){
            console.log("You both picked " + humanChoice);
        }
    } else if (humanChoice === 'scissor') {
        if (computerChoice === 'rock') {
            console.log("You lose! " + humanChoice + " lose to " + computerChoice); 
            computerScore += 1;
        } else if (computerChoice === 'paper') {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore += 1;
        }else if (humanChoice === computerChoice){
            console.log("You both picked " + humanChoice);
        }
    }
}

playRound(getHumanChoice(), getComputerChoice());