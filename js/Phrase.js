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
        const letterList = phraseSection.querySelectorAll('li');
        document.addEventListener('keyup', (event)=> {
            console.log(event.key.toLowerCase())
            const userKey = event.key.toLowerCase();
            letterList.forEach(letter => {
                if(letter.textContent.includes(userKey)) {
                    console.log('true')
                } else {
                    console.log('false')
                }
            });
        });
    };

    showMatchedLetter() {
        return 'showMatchedLetter method works!'
    };
};

let test = new Phrase('This! is a drag999.');
