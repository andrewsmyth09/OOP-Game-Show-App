// SELECTORS

const phraseSection = document.querySelector('#phrase ul');

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

    checkLetter() {
        document.addEventListener('keyup', (event)=> {
            const userKey = event.key.toLowerCase();
            phraseSection.querySelectorAll('li').forEach(letter => {
                if(letter.textContent.includes(userKey)) {
                    this.showMatchedLetter(letter);
                };
            });
        });
    };

    showMatchedLetter(letter) {
        letter.className = `show letter ${letter.textContent}`;
    };
};

let test = new Phrase('This! is a drag999.');