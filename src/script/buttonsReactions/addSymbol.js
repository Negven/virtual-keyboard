let addSymbol = (code, selectionStart, selectionEnd) => {
    let textarea = document.querySelector("textarea");
    let length = textarea.value.length;
    let oldValue = textarea.value;
    let firstPartValue = oldValue.split("");
    firstPartValue = firstPartValue.splice(0, selectionStart );
    let secondPartValue = oldValue.split("");
    secondPartValue = secondPartValue.splice(selectionEnd, length - selectionEnd);
    firstPartValue = firstPartValue.join("");
    secondPartValue = secondPartValue.join("");
    let button = document.querySelector(`[data-value-key = ${code}]`);
    switch (code) {
        case "Enter":
            textarea.value = firstPartValue + "\n" + secondPartValue;
            break;
        case "Space":
            textarea.value = firstPartValue + " " + secondPartValue;
            break;
        default:
            textarea.value = firstPartValue + button.innerText + secondPartValue;
            break;
    }
    textarea.setSelectionRange(selectionStart + 1, selectionStart + 1);

};

export {addSymbol};