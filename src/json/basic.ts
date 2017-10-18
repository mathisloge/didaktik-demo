export default function start(){
    {
        let jsonString:string = '{"matnr":207470, "name": "Max", "nachname": "Mustermann"}';
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


class Student {
    matNr: number;
    name: string;
    nachname: string;
    straße: string;

    constructor(){
        this.matNr = 7985612;
        this.name = "Eva";
        this.nachname = "Mustermann";
        this.straße = "Sedanstraße 44";
    }

    fatDummyFunction = () =>{
        console.log("just a dummy :) ");
    }

    dummyFunction() {
        console.log("just a dummy :) ");
    }
}