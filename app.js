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
    console.log("test");
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
