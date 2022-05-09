import {buttonsReactions} from "./ButtonsReactions";

let createKeyboard = (buttonsValue) => {
    let container = document.querySelector(".container");
    container.innerHTML = "";
    for(let line in buttonsValue) {
        let lineNode = document.createElement("div");
        lineNode.classList.add("line");
        for(let button of buttonsValue[line]) {
            let newButton = document.createElement("button");
            newButton.classList.add("button");
            if(button.class) {
                newButton.classList.add(button.class);
            }
            newButton.setAttribute("data-value-key", button.keyName);
            lineNode.append(newButton);
        }
        container.append(lineNode);
    }
    buttonsReactions.fillKeyboard(buttonsValue);
};


export {createKeyboard};

