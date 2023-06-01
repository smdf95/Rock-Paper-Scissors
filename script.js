document.addEventListener("DOMContentLoaded", function() {

    function rockPaperScissors(choice) {
    
        var choices = ["rock", "paper", "scissors"];
    
        if (!choices.includes(choice)) {
            console.log("Invalid Choice!");
            return;
        }
    
        var computerChoice = computerWeapon();
        var outcome = determineOutcome(choice, computerChoice);
    
        displayUserChoice(choice);
        displayComputerChoice(computerChoice);
    
        setTimeout(function() {
            removeChoices();
            displayOutcomeImage(outcome, choice, computerChoice);
        }, 3000);
        
    
        
    }
    
    
    
    function determineOutcome(userChoice, computerChoice) {
        
        
        if (userChoice === computerChoice) {
            return "tie";
        } else if(
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            return "userWin";
        } else {
            return "computerWin";
        }
        
    }
    
    function displayUserChoice(choice) {
        var userChoiceElement = document.createElement("div");
        userChoiceElement.textContent = "You chose " + choice;

        var userChoiceImage = document.createElement("img");
        userChoiceImage.setAttribute("src", choice + ".png");
        userChoiceImage.setAttribute("alt", choice);
        userChoiceImage.setAttribute("height", "100px");
        userChoiceElement.appendChild(userChoiceImage);

        document.getElementById("userChoice").appendChild(userChoiceElement);
    }
    
    
    function displayComputerChoice(choice) {
        var computerChoiceElement = document.createElement("div");
        computerChoiceElement.textContent = "Computer chose " + choice;
    
        var computerChoiceImage = document.createElement("img");
        computerChoiceImage.setAttribute("src", choice + ".png");
        computerChoiceImage.setAttribute("alt", choice);
        computerChoiceImage.setAttribute("height", "100px");
        computerChoiceElement.appendChild(computerChoiceImage);
    
        document.getElementById("computerChoice").appendChild(computerChoiceElement);
      }
    
    function removeChoices() {
        
        var userChoiceElement = document.getElementById("userChoice");
        
        var computerChoiceElement = document.getElementById("computerChoice");
        
        while (userChoiceElement.firstChild) {
            userChoiceElement.firstChild.remove();
        }
    
        while (computerChoiceElement.firstChild) {
            computerChoiceElement.firstChild.remove();
        }
    }
    
    
    function displayOutcomeImage(outcome, userChoice, computerChoice) {
        var imageElement = document.createElement("img");
        var parentElement = document.getElementById("outcomeContainer");
    
        var imageSources = {
            tie: userChoice + "Tie" + ".jpg",
            userWin: userChoice + "Wins" + ".jpg",
            computerWin: computerChoice + "Wins" + ".jpg"
        };

        
    
        if (imageSources.hasOwnProperty(outcome)) {
            imageElement.setAttribute("src", imageSources[outcome]);
            imageElement.setAttribute("alt", "Outcome");
            imageElement.setAttribute("height", "100px")
            parentElement.appendChild(imageElement);
        } else {
            console.log("Invalid Outcome")
        }

        outcomeElement.textContent = outcome; // Set the outcome text

        // Example: "Rock wins!"
        if (outcome === "userWin") {
            outcomeElement.textContent = "You win with " + userChoice + "!";
        }
        if (outcome === "computerWin") {
            outcomeElement.textContent = "Computer wins with " + computerChoice + "!";
        }
        if (outcome === "tie") {
            outcomeElement.textContent = `It's a tie!`;
        }
        var playAgainButton = document.createElement("button");
        playAgainButton.setAttribute("id", "playAgainButton");
        playAgainButton.textContent = "Play Again";

        // Add an event listener to the button
        playAgainButton.addEventListener("click", function() {
            resetGame();
        });

        // Append the button to the outcome container
        var replayDiv = document.getElementById("replay");
        replayDiv.appendChild(playAgainButton);
        
    }
    
    
    function computerWeapon() {
    
        weapon = randomInteger(1, 3);
    
        switch (weapon) {
    
            case 1: 
                console.log("Computer chose rock");
                return "rock";
                
            case 2:
                console.log("Computer chose paper");
                return "paper";
    
            case 3:
                console.log("Computer chose scissors");
                return "scissors";
    
            default:
                return "";
    
        }
    }
    
    function randomInteger(low, high) {
        return low + Math.floor((high - low + 1) * Math.random());
    }
    
    var rockImage = document.getElementById("rock");
    rockImage.addEventListener("click", function() {
        var userChoice ="rock";
        rockPaperScissors(userChoice);
        rockImage.remove();
        paperImage.remove();
        scissorsImage.remove();
    });
    
    
    var paperImage = document.getElementById("paper");
    paperImage.addEventListener("click", function() {
        var userChoice ="paper";
        rockPaperScissors(userChoice);
        rockImage.remove();
        paperImage.remove();
        scissorsImage.remove();
    });
    
    
    
    var scissorsImage = document.getElementById("scissors");
    scissorsImage.addEventListener("click", function() {
        var userChoice ="scissors";
        rockPaperScissors(userChoice);
        paperImage.remove();
        rockImage.remove();
        scissorsImage.remove();
    });
    
    function resetGame() {
        
        window.location.href = "index.html";
      }
      
   
    });