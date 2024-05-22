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

document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase(); 
    const onscreenKeys = Array.from(document.querySelectorAll('.key'), displayKey => {
        if(displayKey.textContent === key) {
            game.handleInteraction(displayKey);
        }
    });
});