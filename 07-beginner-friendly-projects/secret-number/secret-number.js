/**
 * 🎯 Secret Number Guessing Game
 *
 * The computer randomly selects a number between 1 and 10.
 * The user is prompted to guess the number.
 * After each guess, the computer provides feedback:
 * - "Too Low!" or "Too High!" until the correct number is guessed.
 * The game also counts the number of attempts made by the user.
 */

// Set the range of numbers
const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

// Function to start the game
function startSecretNumberGame() {
  // Generate a random number between 1 and 10 (inclusive)
  const secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;

  // Track number of attempts
  let attempts = 0;

  // User's current guess
  let guess = null;

  // Game instructions
  console.log("🔢 Welcome to the Secret Number Guessing Game!");
  console.log(`Guess a number between ${MIN_NUMBER} and ${MAX_NUMBER}.`);

  // Loop until the user guesses the correct number
  while (guess !== secretNumber) {
    // Prompt the user to guess a number
    const guessPrompt = prompt(
      `🔢 Enter your guess (${MIN_NUMBER}-${MAX_NUMBER}):`
    );
    guess = parseInt(guessPrompt);

    // Validate input
    if (isNaN(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
      console.log(
        `❌ Invalid input! Please enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}.`
      );
      continue; // Skip rest of loop and prompt again
    }

    // Increment attempts count
    attempts++;

    // Compare user's guess to secret number and give feedback
    if (guess < secretNumber) {
      console.log("📉 Too low! Try again.");
    } else if (guess > secretNumber) {
      console.log("📈 Too high! Try again.");
    } else {
      // Correct guess!
      console.log(
        `🎉 Congratulations! You guessed the number in ${attempts} attempts.`
      );
      break; // Exit the loop
    }
  }

  // Ask if the user wants to play again
  const playAgainPrompt = prompt("🔁 Do you want to play again? (yes/no)");
  console.log(playAgainPrompt); // Optional: log user response for debug/info

  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

  // Restart the game or end based on response
  if (playAgain === "yes") {
    startSecretNumberGame();
  } else {
    console.log("👋 Thanks for playing! See you next time.");
  }
}

// 🔽 Start the game on script load
startSecretNumberGame();
