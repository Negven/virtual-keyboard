let changeCapsLock = (buttonValue) => {
    let lineIndex = 1;
    let alphabet = "АаБбВвГгҐґДдЕеЄєЖжЗзИиІіЇїЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЬьЮюЯяAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    document.querySelectorAll(".line").forEach(line => {
        let indexButton = 0;
        line.childNodes.forEach(button => {
            if (alphabet.includes(button.innerText)) {
                if(button.dataset.lowerCase === "true") {
                    button.innerText = buttonValue["line" + lineIndex][indexButton].upperCase;
                    button.setAttribute("data-lower-case", "false");
                }
                else {
                    button.innerText = buttonValue["line" + lineIndex][indexButton].lowerCase;
                    button.setAttribute("data-lower-case", "true");
                }
            }
            indexButton++;
        });
        lineIndex++;
    });
};

export {changeCapsLock};