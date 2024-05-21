// SELECTORS

const phraseSection = document.querySelector('#phrase ul');
const buttonGroup = document.querySelector('#qwerty');

// Class for phrases

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

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

    checkLetter(userKey) {
        let found = false;
        phraseSection.querySelectorAll('li').forEach(letter => {
            if(letter.textContent.includes(userKey)) {
                this.showMatchedLetter(letter);
                found = true;
            };
        });
        return found;
    };

    showMatchedLetter(letter) {
        letter.className = `show letter ${letter.textContent}`;
    };
};

let test = new Phrase('This! is a drag999.');