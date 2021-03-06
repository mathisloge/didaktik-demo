export default function start(){
    let promiseStudenten = getJson("/build/json/demo.json");
    promiseStudenten.then( (studenten) => {
        console.log(studenten)
    }).catch( (error) => {
        console.error(error);
    });

    let directTimeout = setTimeout(() => {
        return 99;
    }, 500);
    console.log("Timeout-Zuweisung: ", directTimeout); // ID des Timeouts

    let timeout = new Promise<number>((resolve, reject) => setTimeout(() => resolve(99), 500));
    timeout.then(number => console.log("Timeout-Promise: ", number));
}


function getJson(file:string):Promise< Array<object> >
{
    return new Promise<Array<object>>((resolve, reject)=>{
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, true);
        rawFile.onload = () =>
        {
            if(rawFile.readyState == 4 && (rawFile.status == 200 || rawFile.status == 0))
                resolve(JSON.parse(rawFile.responseText)); //Erfolgreich
            else
                reject("Datei konnte nicht geladen werden"); //Gescheitert
        }
        rawFile.send(null);
    });   
}
