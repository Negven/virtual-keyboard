import {buttonsValueUkrainian, buttonsValueEnglish} from "/src/data/data.js";
import {createKeyboard} from "/src/script/createKeyboard.js";
import {addEventListener} from "./script/addEventListener";
import "./sass/style.sass";
//add comment
document.body.innerHTML += "<h1>Virtual Keyboard</h1>";
document.body.innerHTML += "<textarea></textarea>";
document.body.innerHTML += "<div class='container'></div>";
document.body.innerHTML += "<h2>Operating System: Windows</h2>";
document.body.innerHTML += "<h3>Change language: Ctrl + Alt</h3>";

let buttonsValue = null;
if(!window.localStorage.nameOfLanguage) {
    window.localStorage.nameOfLanguage = "english";
}

buttonsValue = window.localStorage.nameOfLanguage === "english" ? buttonsValueEnglish : buttonsValueUkrainian;

createKeyboard(buttonsValue, "lowerCase");
addEventListener();
