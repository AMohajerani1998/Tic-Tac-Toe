let e = 0;
let i = 0;
let editedPlayer = 0;

const players = [
    {
        Name: "",
        Symbol: "X",
    },
    {
        Name: "",
        Symbol: "O",
    },
];

const editPlayer1InfoButton = document.getElementById("edit-player1-info");
const editPlayer2InfoButton = document.getElementById("edit-player2-info");
const cancelSignUpButton = document.getElementById("cancel-signup");
const submitSignUpButton = document.getElementById("submit-signup");
const newGameButton = document.getElementById("new-game-button");

const playerNameInputHTML = document.getElementById("player-name");
const playerInputWarningMessage = document.getElementById("warning-message");

const signUpBackground = document.getElementById("sign-up-background");
const signUpModalPage = document.getElementById("sign-up");

const gameTiles = document.querySelectorAll(".game-tile");

editPlayer1InfoButton.addEventListener("click", signUp);
editPlayer2InfoButton.addEventListener("click", signUp);
cancelSignUpButton.addEventListener("click", cancelSignUp);
submitSignUpButton.addEventListener("click", submitPlayerData);
newGameButton.addEventListener("click", newGame);

for (tile of gameTiles) {
    i++;
    tile.value = i;
    //tile.firstElementChild.value = i;
    tile.addEventListener("click", tileClick);
}
