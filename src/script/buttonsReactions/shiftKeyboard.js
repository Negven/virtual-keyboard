let shiftKeyboard = (buttonValue) => {
    let lineIndex = 0;
    document.querySelectorAll(".line").forEach(line => {
        lineIndex++;
        let buttonIndex = 0;
        line.childNodes.forEach(button => {
            if(!button.innerText) {
                button.innerText = buttonValue["line" + lineIndex][buttonIndex].lowerCase;
            }
            else {
                if(button.innerText === buttonValue["line" + lineIndex][buttonIndex].lowerCase) {
                    button.innerText = buttonValue["line" + lineIndex][buttonIndex].upperCase;
                }
                else {
                    button.innerText = buttonValue["line" + lineIndex][buttonIndex].lowerCase;
                }
            }
            buttonIndex++;
        });
    });
};

export {shiftKeyboard};