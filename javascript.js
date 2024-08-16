function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(){
    let answer = prompt("Rock, paper or scissor ?");
    console.log(answer);
}

getHumanChoice();