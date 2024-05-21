
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
        this.phraseLength = null;
        this.correctGuesses = 0;
    };

    startGame() {
        overLay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.handleInteraction();
    };

    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        this.phraseLength = this.phrases[randomNumber].phrase.replace(/[^a-zA-Z0-9]/g, '').length;
        return this.phrases[randomNumber];
    };

    handleInteraction() {
        buttonGroup.addEventListener('click', (event) => {
            const selectedBtn = event.target;
            if (selectedBtn.nodeName === 'BUTTON') {
                selectedBtn.disabled = true;
                const userKey = selectedBtn.textContent;
                const matchingElements = this.activePhrase.checkLetter(userKey);

                if (matchingElements.length === 0) {
                    selectedBtn.className = 'wrong';
                    this.removeLife();
                } else {
                    selectedBtn.className = 'chosen';
                    matchingElements.forEach(element => {
                        this.activePhrase.showMatchedLetter(element);
                        this.correctGuesses += 1;
                    });
                    this.checkForWin();
                };
            };
        });
    };

    removeLife() {
        imgElements[this.missed].src = '/images/lostHeart.png';
        this.missed += 1;
        if(this.missed === 5) this.gameOver();
    };
    checkForWin() {
        if(this.correctGuesses === this.phraseLength) this.gameOver();
    };
    gameOver() {
        overLay.style.display = 'block';
        if(this.missed === 5) {
            overLay.className = 'lose';
            gameOverMessage.textContent = '😞 Sorry, you lose. Better luck next time! 🍀';
        } else {
            overLay.className = 'win';
            gameOverMessage.textContent = '🎉 Congratulations, you win! Enjoy your victory! 🏆';
        }
    };
};