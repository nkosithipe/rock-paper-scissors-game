const options = ['rock', 'paper', 'scissors'];

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
        return `You Win! ${playerSelection} beats ${computerSelection} `;
        
    }else if (( computerSelection== 'rock' &&  playerSelection== 'scissors') || (computerSelection == 'scissors' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'rock')){
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
        
    }else{
        return 'It\'s a Tie!';
        
    }
}

// Function for getting the player's choice with a case-insensitive parameter.    
function getPlayerChoice(){
    let playerChoice = prompt('Rock, Paper or Scissors.').toLowerCase();
    return playerChoice;
}
//Test for playRound() function
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));