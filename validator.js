class Validator {
    static validate(id, selectedArray, element) {
        // console.log(selectedArray);
        if (globals.lastSelection === undefined) {
            // toggle selected class for letters
            // push letter to array
            element.setAttribute("class", "selected");
            if (element.innerHTML == 'Q') {
                globals.currentWord.push(element.innerHTML);
                globals.currentWord.push('u');
                globals.containsQ = false;
            } else {
                globals.currentWord.push(element.innerHTML);
            }
            globals.lastSelection = globals.currentSelection;
            globals.validSelections.push(globals.currentSelection);
        } else if ((() => { 
                let temp = []
                selectedArray.forEach((i) => {
                    temp.push(globals.lastSelection - i);
                })
                return temp;
            })().includes(globals.currentSelection)) {
            // toggle selected class for letters
            if (!element.classList.contains('selected')) {
                // push letter to array
                element.setAttribute("class", "selected");
                if (element.innerHTML == 'Q') {
                    globals.currentWord.push(element.innerHTML);
                    globals.currentWord.push('u');
                    console.log(globals.currentWord);
                } else {
                    globals.currentWord.push(element.innerHTML);
                }
                globals.lastSelection = globals.currentSelection;
                globals.validSelections.push(globals.currentSelection);
            } else {
                //alert('can\'t remove the selection');
                element.classList.add('animated', 'shake', 'make-red');
                let timeOut = setTimeout(() => {
                    element.classList.remove('animated', 'shake', 'make-red');
                }, 700);

            }
        } else if (globals.currentSelection === globals.validSelections[globals.validSelections.length - 1]) {
            // function to search for already selected letter and remove it
            for (let i = globals.currentWord.length; i >= 0; i--) {
                if (globals.currentWord[i] === element.innerHTML) {
                    // unselect button css
                    element.removeAttribute("class", "selected");
                    // remove item
                    if (globals.currentWord[i] == 'Q') {
                        globals.currentWord.splice(i, 2);
                    } else {
                        globals.currentWord.splice(i, 1);
                    }
                    globals.validSelections.pop();
                    globals.currentSelection = globals.validSelections[globals.validSelections.length - 1];
                    globals.lastSelection = globals.currentSelection;
                    if (globals.lastSelection == undefined) {
                        globals.currentWord.pop();
                        globals.validSelections = [];
                    }
                    break;
                }
            }
        } else {
            //alert('Can\'t select this');
            element.classList.remove('animate', 'bounceInLeft', 'bounceInRight');
            element.classList.add('animated', 'shake', 'make-red');
            let timeOut = setTimeout(function () {
                element.classList.remove('animated', 'shake', 'make-red');
            }, 700);
            globals.selectionArrays.pop();
        }
        let wordDisplay = globals.currentWord.join('');
        constants.showCurrentWord.innerHTML = wordDisplay;
    }
}