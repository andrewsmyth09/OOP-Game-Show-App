// SELECTORS

const phraseSection = document.querySelector('#phrase ul');
const buttonGroup = document.querySelector('#qwerty');
const imgGroup = document.querySelectorAll('.tries img');
const imgElements = Array.from(imgGroup);

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
        const matchingElements = [];
        phraseSection.querySelectorAll('li').forEach(letter => {
            if (letter.textContent.includes(userKey)) {
                matchingElements.push(letter);
            }
        });
        return matchingElements;
    };

    showMatchedLetter(letter) {
        letter.className = `show letter ${letter.textContent}`;
    };
};

let test = new Phrase('This! is a drag999.');