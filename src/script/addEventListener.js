import {buttonsReactions} from "./ButtonsReactions";
import {changeLanguage} from "./buttonsReactions/changeLanguage";
import {shiftKeyboard} from "./buttonsReactions/shiftKeyboard";
import {fillKeyboard} from "./buttonsReactions/fillKeyboard";
import {buttonsValueUkrainian, buttonsValueEnglish} from "../data/data";

let buttonsValue;
let capsActive;
let shiftActive;

function handle(e) {
    e.preventDefault();
    if(!buttonsValue) {
        buttonsValue = window.localStorage.nameOfLanguage === "english" ? buttonsValueEnglish : buttonsValueUkrainian;
    }
    if(!capsActive) {
        capsActive = false;
    }
    if(!shiftActive) {
        shiftActive = false;
    }
    let code = e.code;
    shiftKeyboard(buttonsValue);
    shiftKeyboard(buttonsValue);
    if(!e.repeat) {
        buttonsReactions.changeBackground(code, e.type);
    }
    switch (code) {
        case "ShiftLeft":
        case "ShiftRight":
            if(!e.repeat) {
                buttonsReactions.shiftKeyboard(buttonsValue);
                if(e.type === "keydown") {
                    shiftActive = true;
                }
                else {
                    shiftActive = false;
                }
            }
            break;
        case "CapsLock":
            if(!e.repeat) {
                if (e.type === "keydown") {
                    buttonsReactions.changeCapsLock(buttonsValue);
                    capsActive = !capsActive;
                }
            }
            break;
        case "ControlRight":
        case "ControlLeft":
            if(e.type === "keydown") {
                let altLeft = document.querySelector("[data-value-key = AltLeft]");
                let altRight = document.querySelector("[data-value-key = AltLeft]");
                if( altLeft.classList[altLeft.classList.length - 1] === "button-active" || altRight.classList[altRight.classList.length - 1] === "button-active") {
                    buttonsValue = changeLanguage(buttonsValue);
                    fillKeyboard(buttonsValue);
                    if(capsActive) {
                        buttonsReactions.changeCapsLock(buttonsValue);
                    }
                    if(shiftActive) {
                        buttonsReactions.shiftKeyboard(buttonsValue);
                    }
                }
            }
            break;
        case "AltRight":
        case "AltLeft":
            if(e.type === "keydown") {
                let controlRight = document.querySelector("[data-value-key = ControlRight]");
                let controlLeft = document.querySelector("[data-value-key = ControlLeft]");
                if( controlLeft.classList[controlLeft.classList.length - 1] === "button-active" || controlRight.classList[controlRight.classList.length - 1] === "button-active") {
                    buttonsValue = changeLanguage(buttonsValue);
                    fillKeyboard(buttonsValue);
                    if(capsActive) {
                        buttonsReactions.changeCapsLock(buttonsValue);
                    }
                    if(shiftActive) {
                        buttonsReactions.shiftKeyboard(buttonsValue);
                    }
                }
            }
            break;
        case "Backspace":
                if(e.type === "keydown") {
                    buttonsReactions.deleteSymbolBefore();
                }
            break;
        case "Delete":
            if(e.type === "keydown") {
                buttonsReactions.deleteSymbolAfter();
            }
            break;
        case "Tab":
            if(e.type === "keydown") {
                for(let i = 0; i < 4; i++) {
                    buttonsReactions.addSymbol("Space");
                }
            }
            break;
        default:
            if(e.type === "keydown") {
                buttonsReactions.addSymbol(code);
            }
            break;
    }

}

let addEventListener = (buttonsV) => {
    buttonsValue = buttonsV;
    document.body.onkeydown = document.body.onkeyup = handle;
    document.querySelector(".container").addEventListener("mousedown", e => {
        let element = e.target;
        if(element.tagName === "BUTTON") {
            handle({code: element.dataset.valueKey, type: "keydown", preventDefault() { return 0;}});
        }
    });
    document.querySelector(".container").addEventListener("mouseup", e => {
        let element = e.target;
        if(element.tagName === "BUTTON") {
            handle({code: element.dataset.valueKey, type: "keyup", preventDefault() { return 0;}});
        }
    });
    document.querySelector("textarea").setAttribute("focused", "false");
    document.querySelector("textarea").onfocus = elem => {
        elem.target.focused = true;
    };
    document.querySelector("textarea").onblur = elem => {
        elem.target.focused = false;
    };
    document.querySelector("textarea").onclick = () => {
        buttonsReactions.getPositionCursor();
    };
    document.querySelectorAll(".button").forEach(button => {
        button .addEventListener("mouseleave", e => {
            let element = e.target;
            if(element.classList[element.classList.length - 1] === "button-active") {
                handle({code: element.dataset.valueKey, type: "keyup",  preventDefault() { return 0;}});
            }
        });
    });

};

export {addEventListener};