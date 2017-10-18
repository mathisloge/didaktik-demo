"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismjs_1 = require("prismjs");
const polymorphism_1 = require("./class/polymorphism");
const constructor_1 = require("./class/constructor");
const functions_1 = require("./class/functions");
const manipulation_1 = require("./dom/manipulation");
const generic_1 = require("./ts/generic");
const basic_1 = require("./json/basic");
class Main {
    constructor() {
        this.handleBtnClick = (event) => {
            let el = event.srcElement;
            let file = this.readFile("/build/" + el.dataset.file);
            file.then((code) => {
                let html = prismjs_1.highlight(code, prismjs_1.languages.javascript);
                this.container.innerHTML = html;
                setTimeout(() => {
                    this.runFunction(el.dataset.func);
                }, 100);
            })
                .catch((reason) => {
                console.error("File Error:", reason);
            });
        };
        this.container = document.getElementById("code-container");
        this.bspContainer = document.getElementById("demo-container");
        this.reset = document.getElementById("btn-reset");
        this.reset.addEventListener("click", () => {
            this.bspContainer.innerHTML = "";
            this.bspContainer.removeAttribute("style");
            this.container.innerHTML = "";
        }, false);
        let btns = document.getElementsByClassName("btn-demo");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", this.handleBtnClick, false);
        }
    }
    readFile(file) {
        return new Promise((resolve, reject) => {
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", file, true);
            rawFile.onload = () => {
                if (rawFile.readyState == 4 && (rawFile.status == 200 || rawFile.status == 0))
                    resolve(rawFile.responseText);
                else
                    reject("Datei konnte nicht geladen werden");
            };
            rawFile.send(null);
        });
    }
    runFunction(name) {
        switch (name) {
            case "poly":
                polymorphism_1.default();
                break;
            case "constructor":
                new constructor_1.default();
                break;
            case "dom-mani":
                manipulation_1.changeHtml();
                break;
            case "dom-style":
                manipulation_1.changeStyle();
                break;
            case "func":
                new functions_1.default();
                break;
            case "ts-generic-ts":
                generic_1.default();
                break;
            case "json-basic":
                basic_1.default();
                break;
            default: console.error("Can´t find Function!");
        }
    }
}
new Main();
