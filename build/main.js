"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismjs_1 = require("prismjs");
const polymorphism_1 = require("./class/polymorphism");
const constructor_1 = require("./class/constructor");
const functions_1 = require("./class/functions");
const manipulation_1 = require("./dom/manipulation");
const generic_1 = require("./ts/generic");
const basic_1 = require("./json/basic");
const promise_1 = require("./json/promise");
const events_1 = require("./dom/events");
class Main {
    constructor() {
        this.handleBtnClick = (event) => {
            let el = event.srcElement;
            let file = this.readFile("/build/" + el.dataset.file);
            file.then((code) => {
                let html = prismjs_1.highlight(code, prismjs_1.languages.javascript);
                this.container.innerHTML = html;
                this.smoothScroll(this.container);
                setTimeout(() => {
                    this.currFunc = el.dataset.func;
                }, 100);
            })
                .catch((reason) => {
                console.error("File Error:", reason);
            });
        };
        this.smoothScroll = (target) => {
            var scrollContainer = target;
            do {
                scrollContainer = scrollContainer.parentNode;
                if (!scrollContainer)
                    return;
                scrollContainer.scrollTop += 1;
            } while (scrollContainer.scrollTop == 0);
            var targetY = 0;
            do {
                if (target == scrollContainer)
                    break;
                targetY += target.offsetTop;
            } while (target = target.offsetParent);
            let scroll = (c, a, b, i) => {
                i++;
                if (i > 30)
                    return;
                c.scrollTop = a + (b - a) / 30 * i;
                setTimeout(function () { scroll(c, a, b, i); }, 10);
            };
            // start scrolling
            scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
        };
        this.container = document.getElementById("code-container");
        this.bspContainer = document.getElementById("demo-container");
        this.reset = document.getElementById("btn-reset");
        this.run = document.getElementById("btn-run");
        this.reset.addEventListener("click", () => {
            this.bspContainer.innerHTML = "";
            this.bspContainer.removeAttribute("style");
            this.container.innerHTML = "";
        }, false);
        let btns = document.getElementsByClassName("btn-demo");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", this.handleBtnClick, false);
        }
        this.run.addEventListener("click", () => this.runFunction(this.currFunc));
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
            case "promise":
                promise_1.default();
                break;
            case "events":
                events_1.default();
                break;
            default: console.error("Can´t find Function!");
        }
    }
}
new Main();
