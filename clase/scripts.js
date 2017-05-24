var botongenerar = document.getElementById("generar")
var valor = document.getElementById("cantidad")
var color = document.getElementById("seleccion")

botongenerar.OnClick = function() {

	for(var i = 0; i < valor.value; i++) {
		var cuadrito document.createElement ("div")
		cuadrito.setAttribute("class", "cuadros ") + (color.value);
		document.getElementById("squares").appendChild(cuadrito)

	}
}