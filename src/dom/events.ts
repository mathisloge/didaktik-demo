export default function start(){
    let container = document.getElementById("demo-container");

    let element = document.createElement("div");
    element.innerText = "Ich bin das Demoelement!";
    element.style.border = "1px solid"; //Um den Breich für die Maus sichtbar zu machen.
    container.appendChild(element);

    element.addEventListener("mouseenter", (event)=>element.style.color = "#6495ED");
    element.addEventListener("mouseout", (event)=>element.style.color = "#000");
    element.addEventListener("click", (event)=>element.innerText = "Klick :)");

}