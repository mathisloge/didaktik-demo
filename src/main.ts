import { languages, highlight } from 'prismjs';

import poly from './class/polymorphism';
import Const from './class/constructor';
import Func from './class/functions';
import { changeHtml, changeStyle} from './dom/manipulation';
import generic from './ts/generic';
import jsonBasic from './json/basic';
import promise from './json/promise';
import events from './dom/events';

class Main {
    container:HTMLDivElement;
    bspContainer:HTMLDivElement;
    reset:HTMLButtonElement;
    run: HTMLButtonElement;
    currFunc:string;
    constructor() {
        this.container = <HTMLDivElement>document.getElementById("code-container");
        this.bspContainer = <HTMLDivElement>document.getElementById("demo-container");
        this.reset = <HTMLButtonElement>document.getElementById("btn-reset");
        this.run = <HTMLButtonElement>document.getElementById("btn-run");

        this.reset.addEventListener("click", ()=>{
            this.bspContainer.innerHTML = "";
            this.bspContainer.removeAttribute("style");
            this.container.innerHTML = "";
        }, false);

        let btns:HTMLCollection = document.getElementsByClassName("btn-demo");

        for(let i = 0; i < btns.length; i++){
            btns[i].addEventListener("click", this.handleBtnClick, false);
        }

        this.run.addEventListener("click", () => this.runFunction(this.currFunc));
    }

    handleBtnClick = (event:Event) => {
        let el:HTMLElement = <HTMLElement>event.srcElement;
        let file = this.readFile("/build/" + el.dataset.file);

        file.then( (code) => {
            let html = highlight(code, languages.javascript);
            this.container.innerHTML = html;
            this.smoothScroll(this.container);
            setTimeout(()=>{
                this.currFunc = el.dataset.func;
            },100);
        })
        .catch( (reason) => {
            console.error("File Error:" , reason);
        });
    }

    readFile(file:string):Promise<string>
    {
        return new Promise<string>((resolve, reject)=>{
            var rawFile = new XMLHttpRequest();
            rawFile.open("GET", file, true);
            rawFile.onload = () =>
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
            case "dom-mani": changeHtml(); break;
            case "dom-style": changeStyle(); break;
            case "func": new Func(); break;
            case "ts-generic-ts": generic(); break;
            case "json-basic": jsonBasic(); break;
            case "promise": promise(); break;
            case "events": events(); break;
            default: console.error("Can´t find Function!");
        }
    }

    smoothScroll = (target:any) => {
        let scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
    
        let scroll = (c:any, a:any, b:any, i:any) => {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 10);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    }
}

new Main();