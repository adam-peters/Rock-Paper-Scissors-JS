// Author: Adam Peters
// Date: 6/13/24
// Descr: Rock Paper Scissors Game 
// Coded in JS

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
            response="Rock";
            break;
        case 2:
            response="Scissors";
            break;
        case 3:
            response="Paper";
            break;
    }

    return response;
}

console.log(getComputerChoice());
console.log(getHumanChoice());

// Compare Results
// Same Choice is Tie
// Rock wins against Scissors
// Scissors against Paper
// Paper against Rock

