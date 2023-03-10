const buttons = document.querySelectorAll('button');
const result = document.querySelector(".results");
const outcome = document.createElement("div");
const score = document.createElement("p");
const selection =document.createElement("div");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {button.addEventListener('click', (e) => {
    if((playerScore !==5) && (computerScore !==5))
    {
    let computerChoice = getComputerChoice();

    outcome.textContent = playRound(e.target.innerText,computerChoice);
    score.textContent = "Player Score: " + playerScore +"\nComputer Score: " +computerScore;
    selection.textContent = "The computer chose: " + computerChoice;

    if(playerScore ==5 )
    {

        outcome.textContent="Congratulations you won!";

    } 
    else if(computerScore ==5)
    {
        outcome.textContent="Oh no! You Lost!";

    }
    } 
    result.appendChild(selection);
    result.appendChild(outcome);
    result.appendChild(score);

  });
});


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
            winner ="You win! Scissors smashes Rock!";
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
            winner ="You Win! Paper covers Rock!";
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
            winner = "You win! Scissors cuts Paper!";
            playerScore++;
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