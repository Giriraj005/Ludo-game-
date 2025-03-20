const board = document.getElementById("board");
let currentPlayer = 1;

function createBoard() {
  for (let i = 0; i < 121; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

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
}

function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice-result").innerText = `You rolled: ${result}`;

  // Switch player turn
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById("turn").innerText = `Player ${currentPlayer}'s Turn`;
}

createBoard();
