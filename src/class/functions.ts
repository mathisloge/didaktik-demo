export default class BaseClass {
    constructor(){
        let btn = document.getElementById("btn-demo");
        btn.addEventListener("click", this.fatPointerFunction);
        btn.addEventListener("click", this.normalFunction);
    }

    fatPointerFunction = ():void => {
        console.log("fat: ", this);
    }

    normalFunction(){
        console.log("normal: ", this);
    }
}