import {buttonsValueUkrainian, buttonsValueEnglish} from "../../data/data";

let changeLanguage = (buttonsValue) => {
    if(buttonsValue === buttonsValueUkrainian) {
        window.localStorage.nameOfLanguage = "english";
        return buttonsValueEnglish;
    }
    else {
        window.localStorage.nameOfLanguage = "ukrainian";
        return buttonsValueUkrainian;
    }
};

export {changeLanguage};