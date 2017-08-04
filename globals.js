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
var types = {
    corners: [1, 5, 21, 25],
    middles: [2, 3, 4, 6, 10, 11, 15, 16, 20, 22, 23, 24]
}
var selectionArrays = [];

// table reference 
var table = document.querySelector('#score-table');

// var for the submit button
var submitBtn = document.querySelector('#submit-btn');

// get HTML buttons for placement
var allDie = document.querySelectorAll('.dice button');

// get div for current word display
var showCurrentWord = document.querySelector('#current-word');


// apply click event for selection
for (var i = 0; i < allDie.length; i++) {
    allDie[i].addEventListener('click', selectDie);
    if (i % 2 == 0) {
        allDie[i].classList.add('animated', 'bounceInLeft');
    } else {
        allDie[i].classList.add('animated', 'bounceInRight');
    }
}