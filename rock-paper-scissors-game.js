const options = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;

//Function that Randomly picks an option as a computer choice/selection.
function getComputerChoice(){
    const computerOptions = Math.floor(Math.random() * options.length);
    const computerChoice = options[computerOptions];
    return computerChoice;
}

//Function for playing a single round which takes 2 parameters.
function playRound(playerSelection, computerSelection){
        
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||(playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')){
        console.log(`You Win! ${playerSelection} beats ${computerSelection} `);
        playerScore++;
        
    }else if (( computerSelection== 'rock' &&  playerSelection== 'scissors') || (computerSelection == 'scissors' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'rock')){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        computerScore++;
        
    }else{
        console.log('This Round has No winner!')
        return 'It\'s a Tie!';
        
    }
}

// Function for getting the player's choice with a case-insensitive parameter.    
function getPlayerChoice(){
    let playerChoice = prompt('Rock, Paper or Scissors.').toLowerCase();
    return playerChoice;
}
 