const getValuesInput = () => {
	let inputValue1 = parseInt(document.getElementById("value1").value);
	let inputValue2 = parseInt(document.getElementById("value2").value);
	
	let valorTotal = inputValue1 + inputValue2;
	let iva = valorTotal * 0.21;
	let ivaSumado = valorTotal + iva;

	document.getElementById("valorTotal").innerHTML = valorTotal;
	document.getElementById("ivaSumado").innerHTML = ivaSumado;
};
