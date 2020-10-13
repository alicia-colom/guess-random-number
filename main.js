"use strict";

// Prueba de enlac de archivo:
// console.log("It works!");

// Función de número aleatorio:

function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log("El número aleatorio es " + randomNumber);

let tryNumber = document.querySelector(".js-try");
tryNumber.innerHTML = 0;

// Función envío de número
function handleSendNumber() {
	const userNumber = parseInt(document.querySelector(".js-textArea").value);
	console.log("El número introducido por el usuario es " + userNumber);

	const clue = document.querySelector(".js-clue");

	if (userNumber > 100) {
		clue.innerHTML = "El número debe estar entre 1 y 100.";
	} else if (userNumber < 1) {
    clue.innerHTML = "El número debe estar entre 1 y 100.";
	} else if (userNumber > randomNumber) {
    clue.innerHTML = "Demasiado alto.";
	} else if (userNumber < randomNumber) {
    clue.innerHTML = "Demasiado bajo.";
	} else if (userNumber === randomNumber) {
    clue.innerHTML = "¡Has ganado!";
	} else {
    clue.innerHTML = "El número debe estar entre 1 y 100.";
	}

	tryNumber.innerHTML = ++tryNumber.innerHTML;
}

const button = document.querySelector(".js-btn");

// Evento click en boton
button.addEventListener("click", handleSendNumber);
