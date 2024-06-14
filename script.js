// Author: Adam Peters
// Date: 6/13/24
// Descr: Rock Paper Scissors Game 
// Coded in JS

// Game Variables
let humanScore = 0;
let computerScore = 0;

// Get Input
// Validate Choice
function getHumanChoice() {

    let validInput = false;
    let userInput;

    while(!validInput) {
        userInput = prompt("Enter your Choice: ").toLowerCase();

        if(userInput === "scissors" || userInput === "rock" || userInput === "paper") {
            validInput = true;
        } else {
            prompt("Invalid Input!, Your choice need to be Rock, Paper, or Scissors");
        }
    }

    return userInput;
}

// Generate Computer Response
// Needs Random Number between One and Three
// Assign Different Choice based on Number
function getComputerChoice() {
    let response = "";

    num = parseInt(Math.random() * 3 + 1);

    switch(num) {
        case 1:
            response="rock";
            break;
        case 2:
            response="scissors";
            break;
        case 3:
            response="paper";
            break;
    }

    return response;
}

// Compare Results
// Same Choice is Tie
// Rock wins against Scissors
// Scissors against Paper
// Paper against Rock
function playRound(humanChoice, computerChoice) {

    // Check Tie First
    if(humanChoice === computerChoice) {
        
    } else {

        // Check Who Wins 
        if(humanChoice === "rock") {
            computerChoice != "paper" ? humanScore++ : computerScore++;
        } else if (humanChoice === "paper") {
            computerChoice != "scissors" ? humanScore++ : computerScore++;
        } else if (humanChoice === "scissors") {
            computerChoice != "rock" ? humanScore++ : computerScore++;
        }
    }  
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("You chose: " + humanSelection);
console.log("The Computer chose: " + computerSelection);
playRound(humanSelection, computerSelection);

console.log("Your Score: " + humanScore);
console.log("Computer's Score: " + computerScore);

