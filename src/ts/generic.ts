export default function start(){
    let string = new GenericNumber<string>();
    string.nullValue = "";
    string.add = (x,y) => {return x + y };

    let number = new GenericNumber<number>();
    number.nullValue = 0;
    number.add = (x, y) => { return x + y };


    let genClass = new GenericNumber<Base>();
    let nullValue = new Base();
    nullValue.number = 0;
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

class GenericNumber<T> {
    nullValue: T;
    add:(x:T, y:T) => T;
}

class Base {
    number: number;
    constructor(){
        this.number = Math.floor(Math.random()*20);
    }
}