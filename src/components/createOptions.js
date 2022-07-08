// Crear los options 
export const createOptions = (data, category) => {

	const options = data.map((item) => {
		const option = document.createElement("option");
		option.value = item[0];
		option.textContent = item[0];
		return option;
	});
	category.append(...options);
	
}