function signUp(event) {
    event.preventDefault();
    editedPlayer = +event.target.dataset.playerid; //+'1' => 1
    console.log(editedPlayer);
    signUpModalPage.style.display = "inherit";
    signUpBackground.style.display = "inherit";
}
function closeSignUp() {
    signUpModalPage.style.display = "none";
    signUpBackground.style.display = "none";
    playerNameInputHTML.classList.remove("warning");
    playerInputWarningMessage.style.display = "none";
    playerNameInputHTML.value = "";
}
function cancelSignUp(event) {
    event.preventDefault();
    closeSignUp();
}
function submitPlayerData(event) {
    event.preventDefault();
    const formData = new FormData(event.target.parentElement.parentElement);
    const playerName = formData.get("player-name").trim();
    if (!playerName) {
        playerNameInputHTML.classList.add("warning");
        playerInputWarningMessage.style.display = "block";
        return;
    }
    const updatedPlayerData = document.getElementById(
        "player" + editedPlayer + "-name"
    );
    updatedPlayerData.textContent = playerName;
    players[editedPlayer - 1].Name = playerName;
    console.log(players)
    closeSignUp();
    const UpdatedPlayerDetailBox = document.getElementById('player'+editedPlayer+'-detail');
    console.log(UpdatedPlayerDetailBox)
    UpdatedPlayerDetailBox.classList.remove('warning-box')
}