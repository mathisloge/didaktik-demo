"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function start() {
    {
        let jsonString = '{"matnr":207470, "name": "Max", "nachname": "Mustermann"}';
        console.log("jsonString: ", jsonString);
        let student = JSON.parse(jsonString);
        console.log("Student: ", student);
        student.straße = "Albrechtstraße 30";
        console.log("Student: ", student);
        jsonString = JSON.stringify(student);
        console.log("stringify: ", jsonString);
    }
    {
        let student = new Student();
        console.log("Student Klasse: ", student);
        let json = JSON.stringify(student);
        console.log("Student Klasse stringify", json);
    }
}
exports.default = start;
class Student {
    constructor() {
        this.fatDummyFunction = () => {
            console.log("just a dummy :) ");
        };
        this.matNr = 7985612;
        this.name = "Eva";
        this.nachname = "Mustermann";
        this.straße = "Sedanstraße 44";
    }
    dummyFunction() {
        console.log("just a dummy :) ");
    }
}
