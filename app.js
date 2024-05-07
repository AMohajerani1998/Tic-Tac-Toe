const gameTiles = document.querySelectorAll(".game-tile");
let e = 0;
function tileClick(event) {
    e++;
    targetContent = event.target.innerHTML;
    if (e % 2 == 0) {
        if (targetContent == "") {
            event.target.classList.add("marked2");
            event.target.innerHTML = "<div>O</div>";
        }
    } else {
        if (targetContent == "") {
            event.target.classList.add("marked1");
            event.target.innerHTML = "<div>X</div>";
        }
    }
    const markedTilesPlayer1 = document.querySelectorAll(".marked1");
    const markedTilesPlayer2 = document.querySelectorAll(".marked2");
    player1TilesLength = markedTilesPlayer1.length;
    player2TilesLength = markedTilesPlayer2.length;
    for (let a = 0; a <= player1TilesLength; a++) {
        if (
            (markedTilesPlayer1[a - 1].value ==
                markedTilesPlayer1[a].value + 1 &&
                markedTilesPlayer1[a].value ==
                    markedTilesPlayer1[a + 1].value + 1) ||
            (markedTilesPlayer1[a - 1].value ==
                markedTilesPlayer1[a].value + 2 &&
                markedTilesPlayer1[a].value ==
                    markedTilesPlayer1[a + 1].value + 2) ||
            (markedTilesPlayer1[a - 1].value ==
                markedTilesPlayer1[a].value + 3 &&
                markedTilesPlayer1[a].value ==
                    markedTilesPlayer1[a + 1].value + 3) ||
            (markedTilesPlayer1[a - 1].value ==
                markedTilesPlayer1[a].value + 4 &&
                markedTilesPlayer1[a].value ==
                    markedTilesPlayer1[a + 1].value + 4)
        ) {
            console.log("player1 wins");
        }
    }
    for (let k = 0; k <= player2TilesLength; k++) {
        console.log(markedTilesPlayer1)
        if (
            (markedTilesPlayer2[k - 1].value ==
                markedTilesPlayer2[k].value + 1 &&
                markedTilesPlayer2[k].value ==
                    markedTilesPlayer2[k + 1].value + 1) ||
            (markedTilesPlayer2[k - 1].value ==
                markedTilesPlayer2[k].value + 2 &&
                markedTilesPlayer2[k].value ==
                    markedTilesPlayer2[k + 1].value + 2) ||
            (markedTilesPlayer2[k - 1].value ==
                markedTilesPlayer2[k].value + 3 &&
                markedTilesPlayer2[k].value ==
                    markedTilesPlayer2[k + 1].value + 3) ||
            (markedTilesPlayer2[k - 1].value ==
                markedTilesPlayer2[k].value + 4 &&
                markedTilesPlayer2[k].value ==
                    markedTilesPlayer2[k + 1].value + 4)
        ) {
            console.log("test");
            console.log("player2 wins");
        }
    }
}
let i = 0;
for (tile of gameTiles) {
    i++;
    tile.value = i;
    //tile.firstElementChild.value = i;
    tile.addEventListener("click", tileClick);
}

const newGameButton = document.getElementById("new-game-button");
function newGame() {
    for (tile of gameTiles) {
        tile.innerHTML = "";
        tile.classList = "game-tile";
    }
}
newGameButton.addEventListener("click", newGame);
