
const computerChoice = getComputerChoice();

function playRound(playerSelection, computerSelection)
{
    let winner;

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection)
    {
        winner = "Its a draw!";

    }   
    else if (playerSelection === "rock") 
    {
        if (computerSelection === "paper")
        {
            winner ="You lose! Paper covers Rock!";
        }   
        else 
        {
            winner ="You win! Paper covers Rock!";
        }
    }
    else if(playerSelection === "paper")
    {
        if (computerSelection ==="scissors")
        {
            winner ="You lose! Scissors cuts Paper!";
        } 
        else
        {
            winner ="You Win! Scissors cuts Paper!";
        }   
    } 
    else if(playerSelection === "scissors")
    {
        if (computerSelection === "rock")
        {
            winner = "You Lose! Rock smashes Scissors!";
        }
        else
        {
            winner = "You win! Rock smashes Sciccors!";
        }
    }
    return winner;
}


function getComputerChoice()
{
    //declare computerchoice variable
    let choice;
    let randomNum;
    // generate random number between 1 and 3
    randomNum = Math.floor((Math.random()* 3) + 1);
 
    // if 1 then rock if 2 paper if 3 scissors
    if (randomNum === 1)
    {
        choice = "Rock";
    } else if (randomNum === 2)
    {
        choice = "Paper";

    } else 
    {
        choice = "Scissors";
    }
    return choice;
}