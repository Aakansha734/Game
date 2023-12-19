const options = ["rock", "paper", "scissors"];

function playGame(userChoice) {
  const computerChoice = getRandomChoice();
  const result = getResult(userChoice, computerChoice);
  displayResult(result, userChoice, computerChoice);
}

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function displayResult(result, userChoice, computerChoice) {
  const resultElement = document.getElementById("result");
  const userChoiceElement = document.getElementById("user-choice");
  const computerChoiceElement = document.getElementById("computer-choice");

  resultElement.textContent = result;
  userChoiceElement.textContent = userChoice;
  computerChoiceElement.textContent = computerChoice;

  setTimeout(() => {
    userChoiceElement.textContent = "";
    computerChoiceElement.textContent = "";
  }, 1000);
}

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
