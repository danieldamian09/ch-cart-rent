// Modulos
import { checkboxFirstBlock, checkboxSecondBlock, checkboxThirdBlock } from './components/checkbox';
import {createCards} from "./components/createCards";
import { createOptions } from './components/createOptions';
import { modal } from './components/modal';
import {data} from "./data/api";

const { cars } = data;
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
const checkboxsTransmition = document.querySelectorAll(".filter__transmition input[type=checkbox]");
const checkboxsSeats = document.querySelectorAll(".filter__seats input[type=checkbox]");
const checkboxsConvertibles = document.querySelectorAll(".filter__convertibles input[type=checkbox]");

// Funciones
document.addEventListener("DOMContentLoaded", () => {
	// Crear las tarjetas
	createCards(datos, card);
	// Crear los options
	createOptions(datos, category);
	// Modal
	const openMoldal = document.querySelectorAll(".card__aviable__title");
	modal(openMoldal);
});


// Elegir solo un checkbox
checkboxFirstBlock(checkboxsTransmition);
checkboxSecondBlock(checkboxsSeats);
checkboxThirdBlock(checkboxsConvertibles);


// Filtrar por Category
category.addEventListener("change", (e) => {

	// Validar si el valor es diferente a "all"
	if (e.target.value !== "all") {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Filtrar por categoria
		const filterCategory = datos.filter((item) => {
			return item[0] === e.target.value;
		});
		// Crear las tarjetas
		createCards(filterCategory, card);
		const openMoldal = document.querySelectorAll(".card__aviable__title");
		modal(openMoldal);
	}else{
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Crear las tarjetas
		createCards(datos, card);
		const openMoldal = document.querySelectorAll(".card__aviable__title");
		modal(openMoldal);
	}
});

// Filtar por Transmision Manual
transmitionManual.addEventListener("change", (e) => {
	// Filtar si esta checked
	if (e.target.checked) {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Filtrar por transmision manual
		const filterTransmitionManual = datos.filter((item) => {
			return item[1].Company1.TransmissionType  === "Manual";
		});

		// Crear las tarjetas
		createCards(filterTransmitionManual, card);
		const openMoldal = document.querySelectorAll(".card__aviable__title");
		modal(openMoldal);
	} else {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Crear las tarjetas
		createCards(datos, card);
		const openMoldal = document.querySelectorAll(".card__aviable__title");
		modal(openMoldal);
	}
});

// Filtar por Transmision Automatic
transmitionAutomatic.addEventListener("change", (e) => {
	// Filtar si esta checked
	if (e.target.checked) {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Filtrar por transmision manual
		const filterTransmitionAutomatic = datos.filter((item) => {
			return item[1].Company1.TransmissionType === "Automatic";
		});

		// Crear las tarjetas
		createCards(filterTransmitionAutomatic, card);
		const openMoldal = document.querySelectorAll(".card__aviable__title");
		modal(openMoldal);
	} else {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Crear las tarjetas
		createCards(datos, card);
		const openMoldal = document.querySelectorAll(".card__aviable__title");
		modal(openMoldal);
	}
});

// Filtar por Seats
seatsFive.addEventListener("change", (e) => {
	// Filtar si esta checked
	if (e.target.checked) {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Filtrar por transmision manual
		const filterSeatsFive = datos.filter((item) => {
			return item[1].Company1.Features2.seats === "5";
		});

		// Crear las tarjetas
		createCards(filterSeatsFive, card);
		const openMoldal = document.querySelectorAll(".card__aviable__title");
		modal(openMoldal);
	} else {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Crear las tarjetas
		createCards(datos, card);
		const openMoldal = document.querySelectorAll(".card__aviable__title");
		modal(openMoldal);
	}
});

// Filtar por Seats More
seatsSevenMore.addEventListener("change", (e) => {
	// Filtar si esta checked
	if (e.target.checked) {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Filtrar por transmision manual
		const filterSeatsSevenMore = datos.filter((item) => {
			return item[1].Company1.Features2.seats === "7" || item[1].Company1.Features2.seats === "12";
		});

		// Crear las tarjetas
		createCards(filterSeatsSevenMore, card);
		const openMoldal = document.querySelectorAll(".card__aviable__title");
		modal(openMoldal);
	} else {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Crear las tarjetas
		createCards(datos, card);
		const openMoldal = document.querySelectorAll(".card__aviable__title");
		modal(openMoldal);
	}
});

// Filtrar por Convertibles
convertibles.addEventListener("change", (e) => {
	// Filtar si esta checked
	if (e.target.checked) {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Filtrar por transmision manual
		const filterConvertibles = datos.filter((item) => {
			return item[1].Company1.Features2.category === "Convertible";
		});

		// Crear las tarjetas
		createCards(filterConvertibles, card);
		const openMoldal = document.querySelectorAll(".card__aviable__title");
		modal(openMoldal);
	} else {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Crear las tarjetas
		createCards(datos, card);
		const openMoldal = document.querySelectorAll(".card__aviable__title");
		modal(openMoldal);
	}
});
