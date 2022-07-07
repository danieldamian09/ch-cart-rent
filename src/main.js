// Modulos
import {createCards} from "./components/createCards";
import {data} from "./data/api";
console.log(data);

// Variables
const card = document.querySelector(".card");

// Funciones
document.addEventListener("DOMContentLoaded", () => {
	// Crear las tarjetas
	createCards(data, card);

	const input = document.querySelector("#rates-AR");
	console.log(input.value);
});
