/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    addPhraseToDisplay() {
        let displayString = '';
        this.phrase.split('').forEach(letter => {
            letter.match(/[a-z]/i) ? 
            displayString += `<li class="hide letter ${letter}">${letter}</li>` 
            : 
            displayString += '<li class="space"> </li>';
        });
        return displayString;
    };

    checkLetter() {
        return 'checkLetter method works!'
    };

    showMatchedLetter() {
        return 'showMatchedLetter method works!'
    };
};

let test = new Phrase('This is a drag.');
