"use strict";

const randomNumber = getRandomNumber(100);
console.log("El número aleatorio es " + randomNumber);
let tryNumber = document.querySelector(".js-try");
tryNumber.innerHTML = 0;
const button = document.querySelector(".js-btn");

function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

function handleSendNumber() {
	const userNumber = parseInt(document.querySelector(".js-textArea").value);
	console.log("El número introducido por el usuario es " + userNumber);

	const clue = document.querySelector(".js-clue");

	if (userNumber > 1 && userNumber <= 100) {
		if (userNumber === randomNumber) {
			clue.innerHTML = "¡Has ganado!";
		} else if (userNumber > randomNumber) {
			clue.innerHTML = "Demasiado alto.";
		} else {
			clue.innerHTML = "Demasiado bajo.";
		}
	} else {
		if (userNumber > 100) {
			clue.innerHTML = "El número debe ser menor que 100.";
		} else if (userNumber < 1) {
			clue.innerHTML = "El número debe ser mayor que 1.";
		} else {
			clue.innerHTML = "Debes escribir un número para probar suerte.";
		}
	}
	tryNumber.innerHTML = ++tryNumber.innerHTML;
}

button.addEventListener("click", handleSendNumber);


// IMPROVEMENT CHALLENGES

//Enter button to send number:
// const textArea = document.querySelector(".js-textArea");
// textArea.addEventListener("keyEnter", handleSendNumber);


//Reset button:

