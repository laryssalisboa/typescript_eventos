//Import stylesheets
import './style.css';

let title: string = 'Olá, mundo!';
let paragraph: string = 'Blablabla...';

let counter = 0

let intervalId = setInterval(() => (
  counter = counter + 1;
  const appP: HTMLElement = document.getElementById('app.p');
  appP.innerHTML = "Contador: "+counter;
), 1000)

const btn = HTMLElement = document.getElementById('app.btn');
btn?.addEventListener("click", alertMethod);
function alertMethod(this: HTMLElement, ev: Event)(
  alert("Alertando com typescript");
)

// Write TypeScript code!
const appH1: HTMLElement = document.getElementById('app.h1');
appH1.innerHTML = title;