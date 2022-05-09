import {shiftKeyboard} from "./buttonsReactions/shiftKeyboard";
import {changeBackground} from "./buttonsReactions/changeBackgraund";
import {addSymbol} from "./buttonsReactions/addSymbol";
import {deleteSymbol} from "./buttonsReactions/deleteSymbol";
import {changeCapsLock} from "./buttonsReactions/changeCapsLock";
import {changeLanguage} from "./buttonsReactions/changeLanguage";
import {fillKeyboard} from "./buttonsReactions/fillKeyboard";
import {getPositionCursor} from "./buttonsReactions/getPositionCursor";

class ButtonsReactions {
    constructor() {
    }
    selectionStart = 0;
    selectionEnd = 0;
    fillKeyboard =  (buttonsValue) => {
        fillKeyboard(buttonsValue);
    };
    shiftKeyboard =  (buttonsValue) => {
        shiftKeyboard(buttonsValue);
    };
    changeBackground = (value, type) => {
        changeBackground(value, type);
    };
    addSymbol = (code) => {
        addSymbol(code, this.selectionStart, this.selectionEnd);
        this.selectionStart++;
        this.selectionEnd = this.selectionStart;
    };
    deleteSymbolBefore = () => {
        if(this.selectionStart > 0) {
            deleteSymbol( this.selectionStart - 1);
            this.selectionStart--;
            this.selectionEnd--;
            document.querySelector("textarea").setSelectionRange(this.selectionStart, this.selectionStart);
        }
    };
    deleteSymbolAfter = () => {
        deleteSymbol( this.selectionStart );
        document.querySelector("textarea").setSelectionRange(this.selectionStart, this.selectionStart);
    };
    changeCapsLock = (buttonsValue) => {
        changeCapsLock(buttonsValue);
    };
    changeLanguage = (buttonsValue) => {
        return changeLanguage(buttonsValue);
    };
    getPositionCursor = () => {
        [this.selectionStart, this.selectionEnd] = getPositionCursor();
    };

}

let buttonsReactions = new ButtonsReactions();

export {buttonsReactions};