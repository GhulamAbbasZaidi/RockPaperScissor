const emojis = ["✂️ ", "📄", "🗿"];

let playerChoice = "";
let computerChoice = "";

const playerChoiceContainer = document.querySelector(
  "#player-choice-container"
);
const emojiShuffleElement = document.querySelector("#emoji-shuffle");

let currentEmojiNumber = 0;
const shuffleIntervalID = setInterval(shuffleEmojis, 150);

playerChoiceContainer.addEventListener("click", handlePlayerChoice);

function determineGameWinner() {
  const gameResultMessageElement = document.querySelector(
    "#game-result-message"
  );
  let gameResultMessage = "";

  switch (true) {
    case playerChoice === computerChoice:
      gameResultMessage = "It's a tie!";
      break;
    case (playerChoice === "🗿" && computerChoice === "✂️ ") ||
      (playerChoice === "📄" && computerChoice === "🗿") ||
      (playerChoice === "✂️ " && computerChoice === "📄"):
      gameResultMessage = "Player wins!";
      break;
    default:
      gameResultMessage = "Computer wins!";
  }

  gameResultMessageElement.textContent =
    gameResultMessage + " Refresh to play again!";
}

function handlePlayerChoice(event) {
  if (!event.target.classList.contains("emoji")) return;
  playerChoice = event.target.textContent;
  playerChoiceContainer.innerHTML = `<p class="emoji">${playerChoice}</p>`;
  clearInterval(shuffleIntervalID);
  determineGameWinner();
}

function shuffleEmojis() {
  computerChoice = emojis[currentEmojiNumber];
  emojiShuffleElement.textContent = computerChoice;

  if (currentEmojiNumber < emojis.length - 1) {
    currentEmojiNumber++;
  } else {
    currentEmojiNumber = 0;
  }
}
