// Author: Adam Peters
// Date: 6/13/24
// Descr: Rock Paper Scissors Game 
// Coded in JS

// Get Input

// Generate Computer Response
// Needs Random Number between One and Three
function getComputerChoice() {
    response = "";

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

// Compare Results
// Same Choice is Tie
// Rock wins against Scissors
// Scissors against Paper
// Paper against Rock

