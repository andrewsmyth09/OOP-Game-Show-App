// SELECTORS

const startBtn = document.querySelector('#btn__reset');
const overLay = document.querySelector("#overlay");
const gameOverMessage = document.querySelector('#game-over-message');
const phraseSection = document.querySelector('#phrase ul');
const buttonGroup = document.querySelector('#qwerty');
const imgGroup = document.querySelectorAll('.tries img');
const imgElements = Array.from(imgGroup);
let chosenKeys = null;
let wrongKeys = null;

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    // Function to display the hidden phrase at the start of the game.
    addPhraseToDisplay() {
        let displayString = '';
        this.phrase.split('').forEach(letter => {
            if(letter.match(/[a-z]/i)) {  
                displayString += `<li class="hide letter ${letter}">${letter}</li>` 
            } else if(letter.match(/\s/)) {
                displayString += '<li class="space"> </li>';
            }
        });
        phraseSection.innerHTML = displayString;
    };

    // Stores letters that match one or more of the hidden phrases in an array.
    checkLetter(userKey) {
        const matchingElements = [];
        phraseSection.querySelectorAll('li').forEach(letter => {
            if (letter.textContent.includes(userKey)) {
                matchingElements.push(letter);
            }
        });
        return matchingElements;
    };

    // Updates the phrase screen to show a matched letter.
    showMatchedLetter(letter) {
        letter.className = `show letter ${letter.textContent}`;
    };

    // Removes the hidden phrase.
    phraseRemover() {
        while (phraseSection.firstChild) {
            phraseSection.removeChild(phraseSection.firstChild);
        };
    };
};