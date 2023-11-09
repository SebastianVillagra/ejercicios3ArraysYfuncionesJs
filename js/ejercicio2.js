/**Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
●Mostrar la longitud del arreglo.
●Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
●Añade en última posición la ciudad de París.
●Escribe por pantalla el elemento que ocupa la segunda posición.
●Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'. */

var ciudades = [];

while (true) {
    var ciudad = prompt("Ingrese una ciudad: ");
    if (ciudad === null) {
        break;
    }
    ciudades.push(ciudad);
}

document.write("El arreglo ciudades tiene " + ciudades.length + " elementos" + "<br>");

document.write("/- Elemento 1er posicion: " + ciudades[0] + "<br>");
document.write("/- Elemento 3er posicion: " + ciudades[2] + "<br>");
document.write("/- Elemento última posición: " + ciudades[ciudades.length - 1] + "<br>");


ciudades.push("París");

document.write("/- Elemento de la 2da posición: " + ciudades[1] + "<br>");

ciudades[1] = "Barcelona";

document.write("<h1>Arrreglo Ciudades</h1>");
for (var i = 0; i < ciudades.length; i++) {
    document.write("/- Elemento: " + ciudades[i] + "<br>");
}
