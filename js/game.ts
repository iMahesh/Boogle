"use strict";
class Game {
    constructor() {
        this.addEvents();
        this.randomizer();
        this.addEventListenerToSubmit();
    }

    // apply click event for selection
    addEvents() {
        for (let i = 0; i < constants.allDie.length; i++) {
            constants.allDie[i].addEventListener('click', this.selectDie);
            if (i % 2 == 0) {
                constants.allDie[i].classList.add('animated', 'bounceInLeft');
            } else {
                constants.allDie[i].classList.add('animated', 'bounceInRight');
            }
        }
    }
    // build random dice generator
    randomizer() {
        for (let i = 0; i < constants.dice.length; i++) {
            // get each die
            let currentDie = constants.dice[i].split('');
            // random die side
            let diceRoll = Math.floor(Math.random() * 6);
            // set die innerHTML to current charactor
            let diceLetter = currentDie[diceRoll].toUpperCase();
            // console.log(diceLetter);
            if(diceLetter == 'Q'){
                constants.allDie[i].innerHTML = "Qu";
            }else{
                constants.allDie[i].innerHTML = currentDie[diceRoll].toUpperCase();
            }
            // constants.allDie[i].innerHTML = currentDie[diceRoll].toUpperCase();
        };
    }

    // toggle class and add current letter to word
    selectDie() {
        globals.currentSelection = Number(this.id);
        // console.log(this.id);
        //to check where the die belong: corner, middle or somewhere else
        let selectionArray = TypeFinder.findTheTypeOfDie(globals.currentSelection);
        globals.selectionArrays.push(selectionArray);
        Validator.validate(globals.currentSelection, globals.selectionArrays[globals.selectionArrays.length - 2], this);
    }

    // reset word after submit
    static resetWord() {
        let row = constants.table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        globals.currentSelection = 0;
        globals.lastSelection = undefined;
        globals.validSelections = [];
        globals.selectionArrays = [];
        cell1.innerHTML = globals.currentWord.join('').toLowerCase();
        cell2.innerHTML = globals.score;
        constants.totalScoreHolder.innerHTML = globals.totalScore;
        globals.currentWord = [];
        constants.showCurrentWord.innerHTML = '';
        for (var i = 0; i < constants.allDie.length; i++) {
            constants.allDie[i].removeAttribute("class", "selected");
        }
    };

    addEventListenerToSubmit(){
        constants.submitBtn.addEventListener('click', this.addScore);
    }

    addScore() {
        let x = globals.currentWord.length;
        if(globals.currentWord.includes('Qu')){
            x += 1;
        }
        switch (true) {
            case (x === 0):
                alert("Please select at least one letter");
                break;
            case (x < 3):
                globals.score = 0;
                break;
            case (x === 3 || x === 4):
               globals. score = 1;
                globals.totalScore += globals.score;
                break;
            case (x === 5):
                globals.score = 2;
                globals.totalScore += globals.score;
                break;
            case (x === 6):
                globals.score = 3;
                globals.totalScore += globals.score;
                break;
            case (x === 7):
                globals.score = 5;
                globals.totalScore += globals.score;
                break;
            case (x > 7):
                globals.score = 11;
                globals.totalScore += globals.score;
                break;
            default:
                globals.score = 0;
        }
        if (globals.currentWord.length > 0) {
            Game.resetWord();
        }
    };
}