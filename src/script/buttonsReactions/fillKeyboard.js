let fillKeyboard = (buttonsValue) => {
    let lineIndex = 0;
    document.querySelectorAll(".line").forEach(line => {
        lineIndex++;
        let buttonIndex = 0;
        line.childNodes.forEach(button => {
            button.innerText = buttonsValue["line" + lineIndex][buttonIndex].lowerCase;
            button.setAttribute("data-lower-case", "true");
            buttonIndex++;
        });
    });
};

export {fillKeyboard};