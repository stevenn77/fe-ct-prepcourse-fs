/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop()
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoarray = []
   for (var i = 0; i < array.length; i++){
         nuevoarray.push(array[i] + 1)}
         return nuevoarray
      
         
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ")
    
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   if (array.includes(elemento) ){
      return true} else {
        return false
      }
   
   
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0
   for (i = 0; i < arrayOfNums.length; i++){
      suma += arrayOfNums[i]
   }return suma

}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let promedio = 0
   for (i = 0; i < resultadosTest.length; i++){
    promedio += resultadosTest[i]}
    return promedio / resultadosTest.length
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let maximo = arrayOfNums[0]
   for ( i = 0; i < arrayOfNums.length;i++){
        if ( arrayOfNums[i] > maximo){
         maximo = arrayOfNums[i]
        }
   }return maximo
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let acumulador = 1
   if ( arguments.length === 0){
      return 0
   }else if ( arguments.length === 1){
      return arguments[0]
   }else{
      for ( i = 0; i < arguments.length; i++){
          acumulador = acumulador * arguments[i]
      }
   }return acumulador
   
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
     let acumulador = 0
     for ( i = 0; i < array.length; i++){
         if ( array[i] > 18){
            acumulador += 1
         }
         }return acumulador

}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
    if ( numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana"
    }else if ( numeroDeDia > 1 && numeroDeDia < 7){
      return "Es dia laboral"
    }

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   let nueveString = num.toString()
   if ( nueveString[0] == 9){
      return true
   } return false
 }

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   for ( i = 0 ; i < array.length -1; i++){// se le agrega el -1 para compara la key 0 con la key 1 porque sin el -1 se va a comparar con las demas y no es tan especifico
      if( array[i] === array[i+1]){ //se le agrega el +1 para que compare el key 0 con el key 1
   return true}
      }
  return false
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let nuevoarr =[]
   for(i = 0; i < array.length; i++){
      if( array[i] === "Enero" || array[i] === "Marzo"  || array[i] === "Noviembre")
          nuevoarr.push(array[i])
   }  if( nuevoarr.length === 3){
      return nuevoarr
   }return "No se encontraron los meses pedidos"
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let nuevoArregloMultilicar =[] 
    for(i = 0;i <= 10;i++){
       nuevoArregloMultilicar.push(i*6)
    }return nuevoArregloMultilicar
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var Mayor100 = []
  for ( i = 0; i < array.length; i++){
      if ( array[i] > 100 && array[i] <= 200)
       Mayor100.push(array[i])

  }
      return Mayor100 
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var nuevoArray = []
    var suma = num
    for ( i = 0; i < 10; i++){
      suma = suma + 2
      if ( suma === i){
        break
      }else{nuevoArray.push(suma)}
    } if ( nuevoArray.length < 10){
      return "Se interrumpió la ejecución"
    } else if (nuevoArray.length === 10){
      return nuevoArray
}
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arrayNuevo= []
   var suma = num
    for (i = 0; i < 10; i++){
        if(i === 5){
         continue
        }else{
         suma = suma + 2
         arrayNuevo.push( suma)
        }
      } return arrayNuevo
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
