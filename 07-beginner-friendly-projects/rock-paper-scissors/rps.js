/**
 * Rock 🪨, Paper 📄, or Scissors ✂️ Game
 *
 * This game is played between a human and the computer.
 * The user selects Rock, Paper, or Scissors via a prompt.
 * The computer makes a random choice.
 * Winner is decided based on classic rules:
 * - Rock beats Scissors
 * - Paper beats Rock
 * - Scissors beats Paper
 */

// Main function to start and run the game
function rockPaperScissorsGame() {
  console.log("🎮 Starting Rock 🪨, Paper 📄, or Scissors ✂️ Game!");

  // Ask the user for their choice
  const userChoicePrompt = prompt(
    "👉 Enter your choice: Rock, Paper, or Scissors:"
  );
  const userChoice = userChoicePrompt.toLowerCase(); // Normalize input

  // Generate a random number to select computer's choice
  let computerChoice = "";
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  // Determine and print the result
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("✅ You win! 🎉");
  } else if (userChoice === computerChoice) {
    console.log("🤝 It's a tie!");
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("💻 Computer wins! Better luck next time.");
  } else {
    console.log(
      "⚠️ Invalid input. Please enter Rock, Paper, or Scissors correctly."
    );
  }

  // Ask the user if they want to play again
  const playAgainPrompt = prompt("🔁 Do you want to play again? (yes/no)");
  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

  if (playAgain === "yes") {
    rockPaperScissorsGame(); // Recursive call to start new round
  } else {
    console.log("👋 Thanks for playing! See you next time.");
  }
}

// Start the game for the first time
rockPaperScissorsGame();
