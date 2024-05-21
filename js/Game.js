// document.querySelector("#overlay").style.display = "none";

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Break a leg'),
            new Phrase('A piece of cake'),
            new Phrase('An arm and a leg'),
            new Phrase('Bite the bullet'),
            new Phrase('Best of both worlds')
        ];
        this.activePhrase = null;
    };

    startGame() {
        document.querySelector("#overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.handleInteraction();
    };

    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    };

    handleInteraction() {
        buttonGroup.addEventListener('click', (event) => {
            const selectedBtn = event.target;
            if(selectedBtn.nodeName === 'BUTTON') {
                selectedBtn.disabled = true;
                const userKey = selectedBtn.textContent;
                const isMatched = this.activePhrase.checkLetter(userKey);

                if(!isMatched) {
                    selectedBtn.className = 'wrong';
                    this.removeLife();
                } else {
                    selectedBtn.className = 'chosen';
                }
            };
        }); 
    };
    removeLife() {};
    checkForWin() {};
    gameOver() {};
};

const game = new Game();
game.startGame();