import { createCards } from '../components/createCards';
import { modal } from '../components/modal';

export function filterByCategory(value, datos, card) {
  // Validar si el valor es diferente a "all"
  if (value !== "all") {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Filtrar por categoria
		const filterCategory = datos.filter((item) => {
			return item[0] === value;
		});
		// Crear las tarjetas
		createCards(filterCategory, card);
		const openModal = document.querySelectorAll(".card__aviable__title");
		modal(openModal);
	}else{
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Crear las tarjetas
		createCards(datos, card);
		const openModal = document.querySelectorAll(".card__aviable__title");
		modal(openModal);
	}
}

// Filtar por Transmision Manual
export function filterByTransmitionManual(value, datos, card) {
	if (value) {
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

}

// Filtar por Transmision Automatic
export function filterByTransmitionAutomatic(value, datos, card) {
	// Filtar si esta checked
	if (value) {
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
}

// Filtar por 5 Seats
export function filterBySeats(value, datos, card) {
	// Filtar si esta checked
	if (value) {
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
}

// Filtar por 7 Seats and More
export function filterBySeatsSevenMore(value, datos, card) {
	// Filtar si esta checked
	if (value) {
		// Limpiar las tarjetas
		card.innerHTML = "";
		// Filtrar por transmision manual
		const filterSeatsSevenMore = datos.filter((item) => {
			return (
				item[1].Company1.Features2.seats === "7" ||
				item[1].Company1.Features2.seats === "12"
			);
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
}

// Filtrar por Convertibles
export function filterByConvertibles(value, datos, card) {
	// Filtar si esta checked
	if (value) {
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
}