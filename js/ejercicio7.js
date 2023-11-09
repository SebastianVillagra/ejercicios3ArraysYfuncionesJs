/**Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.*/

function mostrarTablaMultiplicar(numero) {
    document.write("<h1>Tabla de multiplicar del " + numero + ":</h1>");
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      document.write(numero + " x " + i + " = " + resultado + "<br>");
    }
  }
  
  const numero = parseInt(prompt("Ingrese un número entero:"));
  
  if (!isNaN(numero)) {
    mostrarTablaMultiplicar(numero);
  } else {
    document.write("Numero invalido");
  }
  