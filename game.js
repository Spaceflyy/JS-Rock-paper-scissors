
let playerScore = 0;
let computerScore = 0;

game();
function game()
{


    for (let i = 0; i < 5;i ++)
    {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Choose your weapon. Rock, paper or Scissors!");
        console.log(playRound(playerChoice, computerChoice));
        console.log("Player Score: " + playerScore +"\nComputer Score: " +computerScore );
    }

}
function playRound(playerSelection, computerSelection)
{
    let winner;
    //converts choices to lowercase so user can input any case
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //determines winner
    if (playerSelection === computerSelection)
    {
        winner = "Its a draw!";

    }   
    else if (playerSelection === "rock") 
    {
        if (computerSelection === "paper")
        {
            winner ="You lose! Paper covers Rock!";
            computerScore++;
        }   
        else 
        {
            winner ="You win! Paper covers Rock!";
            playerScore++;
        }
    }
    else if(playerSelection === "paper")
    {
        if (computerSelection ==="scissors")
        {
            winner ="You lose! Scissors cuts Paper!";
            computerScore++;
        } 
        else
        {
            winner ="You Win! Scissors cuts Paper!";
            playerScore++;
        }   
    } 
    else if(playerSelection === "scissors")
    {
        if (computerSelection === "rock")
        {
            winner = "You Lose! Rock smashes Scissors!";
            computerScore++;
        }
        else
        {
            winner = "You win! Rock smashes Sciccors!";
            playerScore++;
        }
    }
    //returns winner
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