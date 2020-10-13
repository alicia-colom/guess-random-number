"use strict";

// Prueba de enlac de archivo:
// console.log("It works!");

// Función de número aleatorio:

function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
};

const randomNumber = getRandomNumber(100);
console.log("El número aleatorio es " + randomNumber);

// Función envío de número
function handleSendNumber() {
	const userNumber = parseInt(document.querySelector(".js-textArea").value);
	console.log("El número introducido por el usuario es " + userNumber);

	/*   const clue = document.querySelector(".js-clue").innerHTML;
  const newClue = "Esto es una nueva pista";
	console.log(newClue); */

	if (userNumber > 100) {
		console.log("El número debe estar entre 1 y 100.");
	} else if (userNumber > randomNumber) {
		console.log("Demasiado alto.");
	} else if (userNumber < randomNumber) {
		console.log("Demasiado bajo.");
	} else if (userNumber === randomNumber) {
		console.log("¡Has ganado!");
	} else {
		console.log("El número debe estar entre 1 y 100.");
  }
  
  
}

const button = document.querySelector(".js-btn");

// Evento click en boton
button.addEventListener("click", handleSendNumber);
