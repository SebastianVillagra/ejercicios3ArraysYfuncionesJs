/**Deﬁnir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.*/

function analizar(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return "La cadena contiene solo letras mayusculas";
    }
    if (cadena === cadena.toLowerCase()) {
      return "La cadena contiene solo letras mayusculas";
    }
    return "La cadena es una mezcla, contiene letras mayusculas y minusculas";
  }
  
  const cadena = prompt("Ingrese una cadena de texto:");
  
  if (cadena !== null) {
    const resultado = analizar(cadena);
    document.write(resultado);
  } else {
    document.write("Se ingreso una cadena invalida");
  }
  