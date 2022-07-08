export function modal (openModal){
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