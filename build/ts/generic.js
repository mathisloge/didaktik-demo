"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function start() {
    let string = new GenericNumber();
    string.nullValue = "";
    string.add = (x, y) => x + y;
    let number = new GenericNumber();
    number.nullValue = 0;
    number.add = (x, y) => x + y;
    let nullValue = new Base();
    nullValue.number = 0;
    let genClass = new GenericNumber();
    genClass.nullValue = nullValue;
    genClass.add = (x, y) => {
        let newBase = new Base();
        newBase.number = x.number + y.number;
        console.log("Base X: ", x.number, " Base Y: ", y.number);
        return newBase;
    };
    console.log("Ergebnis String: ", string.add("abc", "def"));
    console.log("Ergebnis Number: ", number.add(number.nullValue, 6));
    console.log("Ergebnis Class null: ", genClass.add(genClass.nullValue, new Base()));
    console.log("Ergebnis Class: ", genClass.add(new Base(), new Base()));
}
exports.default = start;
class GenericNumber {
}
class Base {
    constructor() {
        this.number = Math.floor(Math.random() * 20);
    }
}
