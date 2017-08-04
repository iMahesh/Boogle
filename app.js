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
    //to check where the die belong: corner, middle or somewhere else
    var selectionArray = findTheTypeOfDie(currentSelection);
    selectionArrays.push(selectionArray);
    doValidation(currentSelection, selectionArrays[selectionArrays.length - 2], this);
}

// reset word after submit
function resetWord() {
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    currentSelection = 0;
    lastSelection = undefined;
    validSelections = [];
    selectionArrays = [];
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