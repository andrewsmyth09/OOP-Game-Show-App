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
            } else {
                displayString += '<li class="space"> </li>';
            }
        });
        phraseSection.innerHTML = displayString;
    };

    checkLetter() {
        phraseSection.addEventListener('click', (event)=> {
            console.log('Clicked')
        })
    };

    showMatchedLetter() {
        return 'showMatchedLetter method works!'
    };
};

let test = new Phrase('This is a drag.');
