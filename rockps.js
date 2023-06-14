let playerScore = 0;
let computerScore = 0;
const choices = ["rock","paper","scissors"]

function getComputerChoice(){

    const randomchoice = Math.floor(Math.random() * choices.length)
    return choices[randomchoice]
}

function playRound(playerChoice, computerChoice){
    if (playerChoice.toLowerCase() == computerChoice.toLowerCase()){
        return "Tie on this round!"
    } 
    else if (playerChoice.toLowerCase() == 'rock' && computerChoice == 'paper'){
        computerScore++;
        return "Computer Wins this round!"
    }
    else if (playerChoice.toLowerCase() == 'paper' && computerChoice == 'scissors'){
        computerScore++;
        return "Computer Wins this round!"
    }
    else if (playerChoice.toLowerCase() == 'scissors' && computerChoice == 'rock'){
        computerScore++;
        return "Computer Wins this round!"
    }
    else {
        playerScore++;
        return "Player wins this round!"
    }
}

function game(){
    for (i = 0; i < 5; i++){
        
        let choice = prompt('Choose rock, paper or scissors!');
        while (!choices.includes(choice)){
            choice = prompt('Choose rock, paper or scissors!');
        }
        
        let computerChoice = getComputerChoice();
        console.log("You choose ", choice)
        console.log("Computer chose ", computerChoice);
        console.log(playRound(choice, computerChoice));
        console.log("Score: Player ", playerScore, " Computer ", computerScore)

    }

    if (playerScore > computerScore) {
        console.log("Player wins the game!");
    }
    else if (playerScore < computerScore){
        console.log("Computer wins the game!");
    }
    else {
        console.log("Game ties!")
    }
}

game();
