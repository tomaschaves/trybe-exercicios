let buttonClicked = 0;
const buttonToBeClicked = document.querySelector('#add');
const buttonToBeClickedToSubtract = document.querySelector('#subtract');
let counterText = document.querySelector('#counter');
let counter = 0;
let counterAdd = 0;
let counterSubtract = 0;


const add = () => {
  counter = counter + 1;
  counterAdd = counterAdd + 1;
  buttonToBeClicked.innerHTML = `Você me clicou ${counterAdd} vezes!`;
  counterText.innerHTML = `Contador: ${counter}`;
}

const subtract = () => {
  counter = counter - 1;
  counterSubtract = counterSubtract + 1;
  buttonToBeClickedToSubtract.innerHTML = `Você me clicou ${counterSubtract} vezes!`;
  counterText.innerHTML = `Contador: ${counter}`;
}

buttonToBeClicked.addEventListener('click', add);
buttonToBeClickedToSubtract.addEventListener('click', subtract);