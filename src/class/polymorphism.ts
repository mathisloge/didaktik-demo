interface IGrafik {
    fleachenInhalt():number;
    ausgabe():void;
}

class Rechteck implements IGrafik {
    a:number;
    b:number;
    constructor(a:number, b:number) {
        this.a = a;
        this.b = b;
    }

    fleachenInhalt(){
        return this.a * this.b;
    }

    ausgabe(){
        console.log("Rechteck: ", this.fleachenInhalt());
    }
}

class Quadrat extends Rechteck {
    constructor(a:number){
        super(a , a);
    }

    ausgabe(){
        console.log("Quadrat: ", this.fleachenInhalt());
    }
}


export default function start(){
    let r1 = new Rechteck(5,5);
    let q1 = new Quadrat(5);
    
    r1.ausgabe();
    
    q1.ausgabe();
}
