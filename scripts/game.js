// function tileClick(event) {
//     e++;
//     targetContent = event.target.innerHTML;
//     if (e % 2 == 0) {
//         if (targetContent == "") {
//             event.target.classList.add("marked2");
//             event.target.classList.add("disabled");
//             event.target.innerHTML = "<div>O</div>";
//         }
//     } else {
//         if (targetContent == "") {
//             event.target.classList.add("marked1");
//             event.target.classList.add("disabled");
//             event.target.innerHTML = "<div>X</div>";
//         }
//     }
//     const markedTilesPlayer1 = document.querySelectorAll(".marked1");
//     const markedTilesPlayer2 = document.querySelectorAll(".marked2");
//     player1TilesLength = markedTilesPlayer1.length;
//     player2TilesLength = markedTilesPlayer2.length;
// }

function activePlayerTurn() {
    if (activePlayer == 0) activePlayer = 1;
    else if (activePlayer == 1) activePlayer = 0;
    activePlayerName.textContent = players[activePlayer].Name;
}
function tileClick(event) {
    const PlayerSymbol = players[activePlayer].Symbol;
    const targetTagName = event.target.tagName;
    const targetContent = event.target.textContent;
    const targetRow = event.target.dataset.row - 1;
    const targetCol = event.target.dataset.col - 1;
    if (!gameFinished) {
        if (targetTagName == "LI") {
            if (!targetContent) {
                event.target.innerHTML = PlayerSymbol;
                event.target.classList.add("marked");
                event.target.classList.add("disabled");
                gameDataBoard[targetRow][targetCol] = activePlayer + 1;
                let winningPlayer = activePlayer + 1;
                for (let n = 0; n < 3; n++) {
                    if (
                        gameDataBoard[n][0] > 0 && gameDataBoard[n][0] == gameDataBoard[n][1] && gameDataBoard[n][1] == gameDataBoard[n][2] ||
                        gameDataBoard[0][n] > 0 && gameDataBoard[0][n] == gameDataBoard[1][n] && gameDataBoard[1][n] == gameDataBoard[2][n] ||
                        gameDataBoard[0][0] > 0 && gameDataBoard[0][0] == gameDataBoard[1][1] && gameDataBoard[1][1] == gameDataBoard[2][2] ||
                        gameDataBoard[2][0] > 0 && gameDataBoard[2][0] == gameDataBoard[1][1] && gameDataBoard[1][1] == gameDataBoard[0][2]
                    ) {
                        console.log("player " + winningPlayer + " won!");
                        winnerName.textContent = players[activePlayer].Name;
                        gameFinished = true;
                        anouncerContainer.style.display = "block";
                        for (tile of gameTiles) {
                            const tileContent = tile.textContent;
                            if (tileContent == "") {
                                tile.classList.add("lock");
                            }
                        }
                    }
                    activePlayerTurn();
                }
            }
        }
    }
}
function newGame() {
    if (!players[0].Name || !players[1].Name) {
        newGameErrorMessage.style.display = "block";
        if (!players[0].Name && !players[1].Name) {
            player1DetailContainer.classList.add("warning-box");
            player2DetailContainer.classList.add("warning-box");
        } else if (!players[0].Name)
            player1DetailContainer.classList.add("warning-box");
        else {
            player2DetailContainer.classList.add("warning-box");
        }
        return;
    } else {
        newGameErrorMessage.style.display = "none";
        activePlayerTurn();
    }
    gameContainer.style.display = "block";
    for (tile of gameTiles) {
        tile.classList = "game-tile";
        tile.textContent = "";
        anouncerContainer.style.display = "none";
        gameDataBoard = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
        gameFinished = false;
    }
}
