/** Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.*/

function calcularPerimetro(ancho, alto) {
    return 2 * (ancho + alto);
  }
  
  const ancho = parseFloat(prompt("Ingresa el ancho del rectángulo en cm:"));
  
  const alto = parseFloat(prompt("Ingresa el alto del rectángulo en cm:"));
  
  if (!isNaN(ancho) && !isNaN(alto)) {
    const perimetro = calcularPerimetro(ancho, alto);
    document.write("El perímetro del rectángulo es: " + perimetro + "cm");
} else {
  document.write("Valores invalidos");
}
  