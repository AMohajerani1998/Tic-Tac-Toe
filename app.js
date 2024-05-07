const gameTiles = document.querySelectorAll(".game-tile");
let e = 0;
function tileClick(event) {
    e++;
    targetContent = event.target.innerHTML;
    if (e % 2 == 0) {
        if (targetContent == "") {
            event.target.classList.add('marked')
            event.target.innerHTML = "<div>X</div>";
        }
    } else {
        if (targetContent == "") {
            event.target.classList.add('marked')
            event.target.innerHTML = "<div>O</div>";
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
