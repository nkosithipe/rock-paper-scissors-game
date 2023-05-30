const options = ['rock', 'paper', 'scissors'];

//Function that Randomly picks an option as a computer choice/selection.
function getComputerChoice(){
    const computerOptions = Math.floor(Math.random() * options.length);
    const computerChoice = options[computerOptions];
    return computerChoice;
}
console.log(getComputerChoice());