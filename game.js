getComputerChoice();

function getComputerChoice()
{
    //declare computerchoice variable
    let computerChoice;
    let randomNum;
    randomNum = Math.floor((Math.random()* 3) + 1);
    // generate random number between 1 and 3
    if (randomNum === 1)
    {
        computerChoice = "Rock";
    } else if (randomNum === 2)
    {
        computerChoice = "Paper";

    } else 
    {
        computerChoice = "Scissors";
    }

    console.log(computerChoice);
    
    // if 1 then rock if 2 paper if 3 scissors
    // assign result to variable 
    // return computer choice
}