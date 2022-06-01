let deleteSymbol = (index) => {
    let textarea = document.querySelector("textarea");
    let value = textarea.value.split("");
    textarea.value = "";

    let i = 0;
    for(let letter of value) {
        if(index !== i) {
            textarea.value += letter;
        }
        i++;
    }
};

export {deleteSymbol};