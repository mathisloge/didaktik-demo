"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rechteck {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    fleachenInhalt() {
        return this.a * this.b;
    }
    ausgabe() {
        console.log("Rechteck: ", this.fleachenInhalt());
    }
}
class Quadrat extends Rechteck {
    constructor(a) {
        super(a, a);
    }
    ausgabe() {
        console.log("Quadrat: ", this.fleachenInhalt());
    }
}
function start() {
    let r1 = new Rechteck(5, 5);
    let q1 = new Quadrat(5);
    r1.ausgabe();
    q1.ausgabe();
}
exports.default = start;
