// Modulos
import {
	checkboxFirstBlock,
	checkboxSecondBlock,
	checkboxThirdBlock,
} from "./components/checkbox";
import {createCards} from "./components/createCards";
import {createOptions} from "./components/createOptions";
import {modal} from "./components/modal";
import {data} from "./data/api";
import {
	filterByCategory,
	filterByConvertibles,
	filterBySeats,
	filterBySeatsSevenMore,
	filterByTransmitionAutomatic,
	filterByTransmitionManual,
} from "./helpers/filter";

// Datos
const {cars} = data;
const datos = Object.entries(cars);

// Variables
const card = document.querySelector(".card");
// Inputs para filtar
const category = document.querySelector("#vehGroup");
const transmitionManual = document.querySelector("#transmition-manual");
const transmitionAutomatic = document.querySelector("#transmition-automatic");
const seatsFive = document.querySelector("#seats-five");
const seatsSevenMore = document.querySelector("#seats-seven-more");
const convertibles = document.querySelector("#convertibles");
// Variables de Chekbox
const checkboxsTransmition = document.querySelectorAll(
	".filter__transmition input[type=checkbox]"
);
const checkboxsSeats = document.querySelectorAll(
	".filter__seats input[type=checkbox]"
);
const checkboxsConvertibles = document.querySelectorAll(
	".filter__convertibles input[type=checkbox]"
);


// Pintar los componentes primera vez
document.addEventListener("DOMContentLoaded", () => {
	// Crear las tarjetas
	createCards(datos, card);
	// Crear los options
	createOptions(datos, category);
	// Modal
	const openModalInit = document.querySelectorAll(".card__aviable__title");
	modal(openModalInit);
});


// Elegir solo un checkbox
checkboxFirstBlock(checkboxsTransmition);
checkboxSecondBlock(checkboxsSeats);
checkboxThirdBlock(checkboxsConvertibles);


// Filtrar por Category
category.addEventListener("change", (e) => {
	let value = e.target.value;
	filterByCategory(value, datos, card);
});

// Filtar por Transmision Manual
transmitionManual.addEventListener("change", (e) => {
	// Filtar si esta checked
	let value = e.target.checked;
	filterByTransmitionManual(value, datos, card);
});

// Filtar por Transmision Automatic
transmitionAutomatic.addEventListener("change", (e) => {
	let value = e.target.checked;
	filterByTransmitionAutomatic(value, datos, card);
});

// Filtar por 5 Seats
seatsFive.addEventListener("change", (e) => {
	let value = e.target.checked;
	filterBySeats(value, datos, card);
});

// Filtar por Seats More
seatsSevenMore.addEventListener("change", (e) => {
	let value = e.target.checked;
	filterBySeatsSevenMore(value, datos, card);
});

// Filtrar por Convertibles
convertibles.addEventListener("change", (e) => {
	let value = e.target.checked;
	filterByConvertibles(value, datos, card);
});
