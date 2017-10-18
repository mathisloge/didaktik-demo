"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function changeHtml() {
    let el = document.getElementById("demo-container");
    el.innerHTML = "<p>Ich bin normal. <b>Ich bin fett gedruckt.</b></p>";
    console.log("Html: ", el.innerHTML);
    console.log("Text: ", el.innerText);
}
exports.changeHtml = changeHtml;
function changeStyle() {
    let el = document.getElementById("demo-container");
    changeHtml(); // den Container füllen.
    el.style.backgroundColor = "#6495ED";
}
exports.changeStyle = changeStyle;
