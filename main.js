//DOM API
// OBTENER EL POR ID
//

const div1 = document.getElementById('div1-1');
console.log(div1);

const divCollection = document.getElementsTagName('div');
console.log(divCollection);

const p = document.getElementById('p1');
const usernameInput = document.getElementsByName('username');
const usernameInput = usernameInput[0];

console.log(p, usernameInput);

usernameInput.addEventListener('input',(event)) => {