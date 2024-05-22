// A global initializer to hold the game instance.
let game;

// Gets the game started and resets any values from a previous game.
startBtn.addEventListener('click', ()=> {
    game = new Game();
    game.startGame();
    chosenKeys = null;
    wrongKeys = null;
});

// Listens for any user clicks on the on and offscreen keyboards.
buttonGroup.addEventListener('click', (event) => {
    if (event.target.className === 'key') {
        game.handleInteraction(event.target);
    };
});