const board = document.getElementById("board");
let currentPlayer = 1;
let redPosition = 0;
let yellowPosition = 120;

function createBoard() {
  for (let i = 0; i < 121; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-index", i); // for easy access later

    // Red home (top-left 3x3)
    if (i % 11 < 3 && Math.floor(i / 11) < 3) {
      cell.classList.add("red-home");
    }

    // Yellow home (bottom-right 3x3)
    if (i % 11 > 7 && Math.floor(i / 11) > 7) {
      cell.classList.add("yellow-home");
    }

    board.appendChild(cell);
  }

  placeTokens();
}

function placeTokens() {
  // Clear all tokens first
  document.querySelectorAll(".token").forEach(t => t.remove());

  // Place red token
  const redCell = document.querySelector(`[data-index='${redPosition}']`);
  const redToken = document.createElement("div");
  redToken.classList.add("token", "red-token");
  redCell.appendChild(redToken);

  // Place yellow token
  const yellowCell = document.querySelector(`[data-index='${yellowPosition}']`);
  const yellowToken = document.createElement("div");
  yellowToken.classList.add("token", "yellow-token");
  yellowCell.appendChild(yellowToken);
}

function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice-result").innerText = `You rolled: ${result}`;

  // Move the current player's token
  if (currentPlayer === 1) {
    redPosition = Math.min(redPosition + result, 120); // limit to board
  } else {
    yellowPosition = Math.max(yellowPosition - result, 0); // move in reverse
  }

  placeTokens();

  // Switch player turn
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById("turn").innerText = `Player ${currentPlayer}'s Turn`;
}

createBoard();
