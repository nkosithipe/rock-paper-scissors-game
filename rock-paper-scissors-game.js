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
        console.log(`You Win! ${playerSelection} beats ${computerSelection} `);
        playerScore++;
    }else if (( computerSelection== 'rock' &&  playerSelection== 'scissors') || (computerSelection == 'scissors' && playerSelection == 'paper') ||
    (computerSelection == 'paper' && playerSelection == 'rock')){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
        computerScore++;
    }else{
        console.log('It\'s a Tie!');
        return 'Tie';
    }
}