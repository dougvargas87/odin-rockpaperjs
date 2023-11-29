let playerScore = 0;
let computerScore = 0;
const choices = ["rock","paper","scissors"]

function getComputerChoice(){

    const randomchoice = Math.floor(Math.random() * choices.length)
    return choices[randomchoice]
}

function playRound(playerChoice, computerChoice){
    document.getElementById('result').textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}.`;

    if (playerChoice === computerChoice) {
        document.getElementById('result').textContent += "Tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        document.getElementById('result').textContent += " You win this round!";
    } else {
        computerScore++;
        document.getElementById('result').textContent += " Computer wins this round!";
    }

    document.getElementById('score').textContent = `Score: Player ${playerScore}, Computer ${computerScore}`;

    if (playerScore === 5) {
        document.getElementById('winnerMessage').textContent = "Player wins the game!";
        resetGame();
        document.getElementById('score').textContent = `Score: Player ${playerScore}, Computer ${computerScore}`;
    } else if (computerScore === 5) {
        document.getElementById('winnerMessage').textContent = "Computer wins the game!";
        resetGame();
        document.getElementById('score').textContent = `Score: Player ${playerScore}, Computer ${computerScore}`;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}

document.getElementById('rock').addEventListener('click', function (){
    playRound('rock', getComputerChoice());
});

document.getElementById('paper').addEventListener('click', function (){
    playRound('paper', getComputerChoice());
});

document.getElementById('scissors').addEventListener('click', function (){
    playRound('scissors', getComputerChoice());
});

