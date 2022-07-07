// Modulos
import {createCards} from "./components/createCards";
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

// Funciones
document.addEventListener("DOMContentLoaded", () => {
	// Crear las tarjetas
	createCards(datos, card);
	// Crear los options
	createOptions(datos);
	// Modal
	const openMoldal = document.querySelectorAll(".card__aviable__title");
	modal(openMoldal);

});

// Todo: que le modal se vuleva a llamar despues del filter
function modal (openModal){
	// Abrir el modal
	openModal.forEach((item) => {
		item.addEventListener("click", (e) => {
			// Current Modal
			const currentModal = e.target.previousElementSibling;
			if (currentModal !== null) {
				currentModal.classList.add("modal--active");
				// Current Modal Close validar si existe
				const currentModalClose = currentModal.querySelector(
					".modal__content__close"
				);
				currentModalClose.addEventListener("click", () => {
					currentModal.classList.remove("modal--active");
				});
			}
		});
	});

}


// Crear los options 
const createOptions = (data) => {

	const options = data.map((item) => {
		const option = document.createElement("option");
		option.value = item[0];
		option.textContent = item[0];
		return option;
	});
	category.append(...options);
	
}

// Elegir solo un checkbox
const checkboxsTransmition = document.querySelectorAll(".filter__transmition input[type=checkbox]");
checkboxsTransmition.forEach((item) => {
	item.addEventListener("click", (e) => {
		if (e.target.checked) {
			checkboxsTransmition.forEach((item) => {
				item.checked = false;
			});
			e.target.checked = true;
		}
	});
})

const checkboxsSeats = document.querySelectorAll(".filter__seats input[type=checkbox]");
checkboxsSeats.forEach((item) => {
	item.addEventListener("click", (e) => {
		if (e.target.checked) {
			checkboxsSeats.forEach((item) => {
				item.checked = false;
			});
			e.target.checked = true;
		}
	});
})

const checkboxsConvertibles = document.querySelectorAll(".filter__convertibles input[type=checkbox]");
checkboxsConvertibles.forEach((item) => {
	item.addEventListener("click", (e) => {
		if (e.target.checked) {
			checkboxsConvertibles.forEach((item) => {
				item.checked = false;
			});
			e.target.checked = true;
		}
	});
})



// Filtro
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
