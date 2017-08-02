var dice = [
    "aaafrs",
    "aaeeee",
    "aafirs",
    "adennn",
    "aeeeem",
    "aeegmu",
    "aegmnn",
    "afirsy",
    "bjkqxz",
    "ccenst",
    "ceiilt",
    "ceilpt",
    "ceipst",
    "ddhnot",
    "dhhlor",
    "dhlnor",
    "dhlnor",
    "eiiitt",
    "emottt",
    "ensssu",
    "fiprsy",
    "gorrvw",
    "iprrry",
    "nootuw",
    "ooottu"
];

// variable for total score
var totalScore = 0;
var totalScoreHolder = document.querySelector('#total-score');

// get the entire dice grid
var diceGrid = document.querySelector('.dice');

// empty var for current word
var currentWord = [];

// var last selected, current selected, all valid selections 
var lastSelection = undefined;
var currentSelection = 0;
var validSelections = [];
var containsQ = false;

// table reference 
var table = document.querySelector('#score-table');

// var for the submit button
var submitBtn = document.querySelector('#submit-btn');

// get HTML buttons for placement
var allDie = document.querySelectorAll('.dice button');

// get div for current word display
var showCurrentWord = document.querySelector('#current-word');

// build random dice generator
(function randomizer() {
    for (var i = 0; i < dice.length; i++) {
        // get each die
        var currentDie = dice[i].split('');
        // random die side
        var diceRoll = Math.floor(Math.random() * 6);
        // set die innerHTML to current charactor
        allDie[i].innerHTML = currentDie[diceRoll].toUpperCase();
    };
}());

// toggle class and add current letter to word
function selectDie() {
    currentSelection = Number(this.id);
    if (lastSelection === undefined) {
        // toggle selected class for letters
        // push letter to array
        this.setAttribute("class", "selected");
        if(this.innerHTML=='Q'){
                currentWord.push(this.innerHTML);
                currentWord.push('u');            
            containsQ=false;                
            }else{
                currentWord.push(this.innerHTML);
            }
        lastSelection = currentSelection;
        validSelections.push(currentSelection);
    } else if (currentSelection == lastSelection || currentSelection == (lastSelection + 1) || currentSelection == (lastSelection - 1) || currentSelection == (lastSelection + 4) || currentSelection == (lastSelection - 4) || currentSelection == (lastSelection + 5) || currentSelection == (lastSelection - 5) || currentSelection == (lastSelection + 6) || currentSelection == (lastSelection - 6)) {
        // toggle selected class for letters
        if (!this.classList.contains('selected')) {
            // push letter to array
            this.setAttribute("class", "selected");
            if(this.innerHTML=='Q'){
                currentWord.push(this.innerHTML);
                currentWord.push('u');
                console.log(currentWord);              
            }else{
                currentWord.push(this.innerHTML);
            }
            lastSelection = currentSelection;
            validSelections.push(currentSelection);
        } else if (currentSelection === validSelections[validSelections.length - 1]) {
            // function to search for already selected letter and remove it
            for (var i = currentWord.length; i >= 0; i--) {
                if (currentWord[i] === this.innerHTML) {
                    // unselect button css
                    this.removeAttribute("class", "selected");
                    // remove item
                    if(currentWord[i]=='Q'){
                    currentWord.splice(i, 2);                                                
                    }else{currentWord.splice(i, 1);}
                    validSelections.pop();
                    currentSelection = validSelections[validSelections.length - 1];
                    lastSelection = currentSelection;
                    if(lastSelection==undefined){
                        currentWord.pop();
                        validSelections=[];
                    }
                    break;
                }
            }
        } else {
            alert('can\'t remove the selection');
        }
    } else {
        alert('Can\'t select this');
    }
    var wordDisplay = currentWord.join('');
    showCurrentWord.innerHTML = wordDisplay;
}

// apply click event for selection
for (var i = 0; i < allDie.length; i++) {
    allDie[i].addEventListener('click', selectDie);
}

// reset word after submit
function resetWord() {
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    currentSelection=0;
    lastSelection=undefined;
    validSelections=[];
    
    cell1.innerHTML = currentWord.join('').toLowerCase();
   cell2.innerHTML = score;
    totalScoreHolder.innerHTML = totalScore;
currentWord = [];
    showCurrentWord.innerHTML = '';
    for (var i = 0; i < allDie.length; i++) {
        allDie[i].removeAttribute("class", "selected");
    }
};

// add score
function addScore() {
    var x = currentWord.length;
    switch (true) {
        case (x === 0):
            alert("Please select at least one letter");
            break;
        case (x < 3):
            score = 0;
            break;
        case (x === 3 || x === 4):
            score = 1;
            totalScore += score;
            break;
        case (x === 5):
            score = 2;
            totalScore += score;
            break;
        case (x === 6):
            score = 3;
            totalScore += score;
            break;
        case (x === 7):
            score = 5;
            totalScore += score;
            break;
        case (x > 7):
            score = 11;
            totalScore += score;
            break;
        default:
            score = 0;
    }
    if (currentWord.length > 0) {
        resetWord();
    }
};

submitBtn.addEventListener('click', addScore);

//for developement only
function printAllValues() {
    console.log('Cureent Selection:' + currentSelection);
    console.log('Last Selection:' + lastSelection);
    console.log('validSelections:' + validSelections);
}