const constants = {
    dice: [
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
    ],

    totalScoreHolder: document.querySelector('#total-score'),
    // get the entire dice grid
    diceGrid: document.querySelector('.dice'),
    types: {
        corners: [1, 5, 21, 25],
        middles: [2, 3, 4, 6, 10, 11, 15, 16, 20, 22, 23, 24]
    },
    // table reference 
    table: document.querySelector('#score-table'),
    // var for the submit button
    submitBtn: document.querySelector('#submit-btn'),
    // get HTML buttons for placement
    allDie: document.querySelectorAll('.dice button'),
    // get div for current word display
    showCurrentWord: document.querySelector('#current-word')
}