let e = 0;
function tileClick(event) {
    e++;
    targetContent = event.target.innerHTML;
    if (e % 2 == 0) {
        if (targetContent == "") {
            event.target.classList.add("marked2");
            event.target.classList.add("disabled");
            event.target.innerHTML = "<div>O</div>";
        }
    } else {
        if (targetContent == "") {
            event.target.classList.add("marked1");
            event.target.classList.add("disabled");
            event.target.innerHTML = "<div>X</div>";
        }
    }
    const markedTilesPlayer1 = document.querySelectorAll(".marked1");
    const markedTilesPlayer2 = document.querySelectorAll(".marked2");
    player1TilesLength = markedTilesPlayer1.length;
    player2TilesLength = markedTilesPlayer2.length;
}
function newGame() {
    for (tile of gameTiles) {
        tile.innerHTML = "";
        tile.classList = "game-tile";
    }
}
