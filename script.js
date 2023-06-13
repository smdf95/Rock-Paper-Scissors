document.addEventListener("DOMContentLoaded", function() {

    var choices = ["rock", "paper", "scissors"];
    var userScore = 0;
    var computerScore = 0;
  
    function rockPaperScissors(choice) {
      if (!choices.includes(choice)) {
        console.log("Invalid Choice!");
        return;
      }

      hideChoices();
  
      var computerChoice = computerWeapon();
      var outcome = determineOutcome(choice, computerChoice);
  
      displayUserChoice(choice);
      displayComputerChoice(computerChoice);
  
      setTimeout(function() {
        removeChoices();
        displayOutcomeImage(outcome, choice, computerChoice);
        showReplayButton();
      }, 2000);
    }
  
    function determineOutcome(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        return "tie";
      } else if (
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
        
        var userChoiceImage = document.createElement("img");
        userChoiceImage.setAttribute("src", choice + ".png");
        userChoiceImage.setAttribute("alt", choice);
        userChoiceImage.setAttribute("height", "100px");
        userChoiceElement.appendChild(userChoiceImage);
      
        var userChoiceText = document.createElement("div");
        userChoiceText.textContent = "You chose " + choice;
        userChoiceElement.appendChild(userChoiceText);
      
        document.getElementById("userChoice").appendChild(userChoiceElement);
      }
      
      function displayComputerChoice(choice) {
        var computerChoiceElement = document.createElement("div");
        
        var computerChoiceImage = document.createElement("img");
        computerChoiceImage.setAttribute("src", choice + ".png");
        computerChoiceImage.setAttribute("alt", choice);
        computerChoiceImage.setAttribute("height", "100px");
        computerChoiceElement.appendChild(computerChoiceImage);
      
        var computerChoiceText = document.createElement("div");
        computerChoiceText.textContent = "Computer chose " + choice;
        computerChoiceElement.appendChild(computerChoiceText);
      
        document.getElementById("computerChoice").appendChild(computerChoiceElement);
      }
      

    function hideChoices() {
        var optionsDiv = document.getElementById("gameOptions");
        optionsDiv.innerHTML = "";
    }
  
    function removeChoices() {
      var userChoiceElement = document.getElementById("userChoice");
      var computerChoiceElement = document.getElementById("computerChoice");
  
      userChoiceElement.innerHTML = "";
      computerChoiceElement.innerHTML = "";
    }
  
    function displayOutcomeImage(outcome, userChoice, computerChoice) {
      var outcomeElement = document.getElementById("outcomeElement");
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
        imageElement.setAttribute("height", "100px");
        parentElement.appendChild(imageElement);
      } else {
        console.log("Invalid Outcome");
      }
  
      outcomeElement.textContent = outcome;
  
      if (outcome === "userWin") {
        outcomeElement.textContent = "You win with " + userChoice + "!";
        userScore++;
        document.getElementById("userScore").textContent = userScore;
      } else if (outcome === "computerWin") {
        outcomeElement.textContent = "Computer wins with " + computerChoice + "!";
        computerScore++;
        document.getElementById("computerScore").textContent = computerScore;
      } else if (outcome === "tie") {
        outcomeElement.textContent = "It's a tie!";
      }
    }
  
    function showReplayButton() {
      var replayDiv = document.getElementById("replay");
      replayDiv.innerHTML = ""; // Clear the replay div
  
      var replayButton = document.createElement("button");
      replayButton.setAttribute("id", "replayButton");
      replayButton.textContent = "Play Again";
      replayButton.addEventListener("click", function() {
        replayDiv.innerHTML = ""; // Clear the replay div
        document.getElementById("outcomeContainer").innerHTML = ""; // Clear the outcome image
        document.getElementById("outcomeElement").textContent = ""; // Clear the outcome text
        removeChoices(); // Remove the displayed choices
        showGameOptions(); // Show the game options again
      });
  
      replayDiv.appendChild(replayButton);
    }
  
    function showGameOptions() {
      var optionsDiv = document.getElementById("gameOptions");
      optionsDiv.innerHTML = ""; // Clear the game options
  
      choices.forEach(function(choice) {
        var choiceImage = document.createElement("img");
        choiceImage.setAttribute("src", choice + ".png");
        choiceImage.setAttribute("alt", choice);
        choiceImage.setAttribute("id", choice);
        choiceImage.setAttribute("height", "100px");
        choiceImage.addEventListener("click", function() {
          rockPaperScissors(choice);
        });
  
        optionsDiv.appendChild(choiceImage);
      });
    }
  
    function computerWeapon() {
      var randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    showGameOptions(); // Initially show the game options
  });
  
