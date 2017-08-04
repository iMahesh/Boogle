function doValidation(id, selectedArray, element) {
    // console.log(selectedArray);
    if (lastSelection === undefined) {
        // toggle selected class for letters
        // push letter to array
        element.setAttribute("class", "selected");
        if (element.innerHTML == 'Q') {
            currentWord.push(element.innerHTML);
            currentWord.push('u');
            containsQ = false;
        } else {
            currentWord.push(element.innerHTML);
        }
        lastSelection = currentSelection;
        validSelections.push(currentSelection);
    } else if ((function () {
        var temp = []
        selectedArray.forEach(function (i) {
            temp.push(lastSelection - i);
        })
        return temp;
    })().includes(currentSelection)) {
        // toggle selected class for letters
        if (!element.classList.contains('selected')) {
            // push letter to array
            element.setAttribute("class", "selected");
            if (element.innerHTML == 'Q') {
                currentWord.push(element.innerHTML);
                currentWord.push('u');
                console.log(currentWord);
            } else {
                currentWord.push(element.innerHTML);
            }
            lastSelection = currentSelection;
            validSelections.push(currentSelection);
        } else {
            //alert('can\'t remove the selection');
            element.classList.add('animated', 'shake', 'make-red');
            var timeOut = setTimeout(function () {
                element.classList.remove('animated', 'shake', 'make-red');
            }, 700);

        }
    }
    else if (currentSelection === validSelections[validSelections.length - 1]) {
        // function to search for already selected letter and remove it
        for (var i = currentWord.length; i >= 0; i--) {
            if (currentWord[i] === element.innerHTML) {
                // unselect button css
                element.removeAttribute("class", "selected");
                // remove item
                if (currentWord[i] == 'Q') {
                    currentWord.splice(i, 2);
                } else { currentWord.splice(i, 1); }
                validSelections.pop();
                currentSelection = validSelections[validSelections.length - 1];
                lastSelection = currentSelection;
                if (lastSelection == undefined) {
                    currentWord.pop();
                    validSelections = [];
                }
                break;
            }
        }
    }
    else {
        //alert('Can\'t select this');
        element.classList.remove('animate','bounceInLeft','bounceInRight');
        element.classList.add('animated', 'shake', 'make-red');
        var timeOut = setTimeout(function () {
            element.classList.remove('animated', 'shake', 'make-red');
        }, 700);
        selectionArrays.pop();
    }
    var wordDisplay = currentWord.join('');
    showCurrentWord.innerHTML = wordDisplay;
}