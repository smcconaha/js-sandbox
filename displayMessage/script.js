const button =document.getElementById('buttonSub');//ID, notice no #
const textIn =document.querySelector('#textIn');//ID
const output =document.querySelector('.output');//class

function greeting (name) {
  name = textIn.textContent;
  let message = `Hello ${name} how are you today?`;
  output.textContent = message;
};
button.addEventListener('click',greeting);
console.log(textIn.textContent);