
class Game {
    constructor() {
        this.phrases = [
            new Phrase('Break a leg'),
            new Phrase('A piece of cake'),
            new Phrase('An arm and a leg'),
            new Phrase('Bite the bullet'),
            new Phrase('Best of both worlds')
        ];
        this.activePhrase = null;
        this.phraseLength = null;
        this.missed = 0;
        this.correctGuesses = 0;
    };

    startGame() {
        overLay.style.display = "none";
        this.resetKeys(chosenKeys);
        this.resetKeys(wrongKeys);
        this.resetLife();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.phraseRemover();
        this.activePhrase.addPhraseToDisplay();
    };

    // Returns a random phrase from the phrases array in the constructor.
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        this.phraseLength = this.phrases[randomNumber].phrase.replace(/[^a-zA-Z0-9]/g, '').length;
        return this.phrases[randomNumber];
    };

    /* In the handleInteraction function, the following actions happen:
        - The user's selected key is collected and disabled.
        - The user's selected key is compared to letters in the hidden phrase by calling the checkLetter function from the Phrase class.
        - A life is removed or a hidden letter is shown depending on the key that the user has guessed.
    */
    handleInteraction(selectedBtn) {
        selectedBtn.disabled = true;
        selectedBtn.style.transition = "transform 0.5s, background-color 0.5s";
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

    // Changes the heart image every time a user makes an incorrect guess.
    removeLife() {
        imgElements[this.missed].src = '/images/lostHeart.png';
        this.missed += 1;
        if(this.missed === 5) this.gameOver();
    };

    // Checks to see if the user has guessed all the letters in the hidden phrase.
    checkForWin() {
        if(this.correctGuesses === this.phraseLength) this.gameOver();
    };

    // Ends the game with a final message based on the user's final result.
    gameOver() {
        overLay.style.display = 'block';
        overLay.style.animation = 'fadeIn 1s ease-in-out';
        chosenKeys = document.querySelectorAll('.chosen');
        wrongKeys = document.querySelectorAll('.wrong');
        if(this.missed === 5) {
            overLay.className = 'lose';
            startBtn.textContent = 'Try again';
            gameOverMessage.textContent = '😞 Sorry, you lose. Better luck next time! 🍀';
        } else {
            overLay.className = 'win';
            startBtn.textContent = 'Play again!';
            gameOverMessage.textContent = '🎉 Congratulations, you win! Enjoy your victory! 🏆';
        }
    };

    // Resets the keys on the screen to their original class.
    resetKeys(keys) {
        if(keys !== null) Array.from(keys, key => {
            key.className = 'key';
            key.disabled = false;
            key.removeAttribute('style');
        });
    };

    // Resets the images on the screen to their original look.
    resetLife() {
        imgElements.forEach(img => img.src = '/images/liveHeart.png');
    };
};