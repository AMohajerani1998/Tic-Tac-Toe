function signUp(event) {
    event.preventDefault();
    signUpModalPage.style.display = 'inherit'
    signUpBackground.style.display = 'inherit'
}
function cancelSignUp (event){
    event.preventDefault();
    signUpModalPage.style.display = 'none'
    signUpBackground.style.display = 'none'
}
function submitPlayerData (event) {
    event.preventDefault();
    const formData = new FormData(event.target.parentElement.parentElement);
    const playerName = formData.get('player-name')
    console.log(playerName)
}