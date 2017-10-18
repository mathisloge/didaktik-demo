"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseClass {
    constructor() {
        this.fatPointerFunction = () => {
            console.log("fat: ", this);
        };
        let btn = document.getElementById("btn-demo");
        btn.addEventListener("click", this.fatPointerFunction);
        btn.addEventListener("click", this.normalFunction);
    }
    normalFunction() {
        console.log("normal: ", this);
    }
}
exports.default = BaseClass;
