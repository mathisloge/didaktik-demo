import { languages, highlight } from 'prismjs';

import poly from './class/polymorphism';
import Const from './class/constructor';

class Main {
    container:HTMLDivElement;
    constructor() {
        this.container = <HTMLDivElement>document.getElementById("code-container");
        
        let btns:HTMLCollection = document.getElementsByClassName("btn-demo");

        for(let i = 0; i < btns.length; i++){
            btns[i].addEventListener("click", this.handleBtnClick, false);
        }
    }

    handleBtnClick = (event:Event) => {
        let el:HTMLElement = <HTMLElement>event.srcElement;
        let file = this.readFile("/build/" + el.dataset.file);

        file.then( (code) => {
            let html = highlight(code, languages.javascript);
            this.container.innerHTML = html;
            this.runFunction(el.dataset.func);
        })
        .catch( (reason) => {
            console.error("File Error:" , reason);
        });
    }

    readFile(file:string):Promise<string>
    {
        return new Promise<string>((resolve, reject)=>{
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", file, false);
            rawFile.onreadystatechange = function ()
            {
                if(rawFile.readyState == 4 && (rawFile.status == 200 || rawFile.status == 0))
                    resolve(rawFile.responseText);
                else
                    reject("Datei konnte nicht geladen werden");
            }
            rawFile.send(null);
        });   
    }

    runFunction(name:string){
        switch(name){
            case "poly": poly(); break;
            case "constructor": new Const(); break;
            default: console.error("Can´t find Function!");
        }
    }
}

new Main();