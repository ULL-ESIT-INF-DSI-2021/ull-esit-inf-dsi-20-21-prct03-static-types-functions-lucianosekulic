# Practica 3: Tipos de datos estáticos y funciones

## Objetivo
El objetivo de la tercera práctica de la asignatura ***Desarrollo de sistemas informáticos*** es familiarizarse con TypeScript y hacer los ejercicios propuestos por el profesor para adecuarnos con este lenguaje de programación.

## Tareas previas
Previamente el profesor nos recomienda que nos leamos los siguientes tutoriales:
[Tutorial string](https://www.w3schools.com/js/js_string_methods.asp)
[Tutorial expresiones regulares](https://www.w3schools.com/js/js_regexp.asp)

## Ejercios
LLevaremos a cabo los ejercicios propuestos en el siguiente enlace.
[Guión Practica3](https://ull-esit-inf-dsi-2021.github.io/prct03-types-functions/)

### Ejercicio 1: Años bisiestos

Código TypeScript 
```
function isLeapYear(year: number) {
    if (year%4 != 0 || (year%100 == 0 && year%400 != 0) ) {
        //console.log("el año no es bisiesto");
        return false;
    }
    else {
        return true;
    }
    
}
```
Creamos una función llamada ***isLeapYear*** que devuelva si un año es bisiesto o no. La función está compuesta por una sentencia if donde si el modulo de la variable ***year*** entre 4 no es cero o el modulo de esa variable entre 100  es cero y entre 400 no es cero, la funcion devuelve ***falso***. En cualquier otro caso, devuelve ***verdadero***, es decir, el año es bisiesto.

### Ejercicio 2: Notacion decimal y factorial

Código TypeScript
```
function factorialCalculate(num: number): number {
  if (num == 0) {
    return 1;
  }
  return num * factorialCalculate(num - 1);
}
function decimalToFactorial(num: number): string {
  let factorialNumber: number = 0;
  let factorialChain: string = '';
  let number_: number = 0;
  while (factorialCalculate(factorialNumber) < num) {
    factorialNumber++;
  }
  factorialNumber--;
  for (let i: number = factorialNumber; i > -1; i--) {
    number_ = Math.floor(num / factorialCalculate(i));
    factorialChain += number_.toFixed();
    num -= (number_ * factorialCalculate(i));
  }
  return factorialChain;
}
function factorialToDecimal(string_: string): number {
  let codification: number = 0;
  let cont: number = 0;
  for (let i: number = string_.length - 1; i > -1; i--) {
    codification += ((parseInt(string_[cont]) * factorialCalculate(i)));
    cont++; 
  }
  return codification; 
}
```
En primer lugar creamos una funcion llamda ***factorialCalculate*** donde recursivamente calculamos el factorial de una variable ***num*** de tipo number que le pasaremos más adelante.

Luego, creamos dos funciones llamadas ***decimalToFactorial*** y ***factorialToDecimal***, donde en la primera le pasamos una variable ***num*** de tipo number y mediante unos bucles los cuales usamos la funcion factorialCalculate, calculamos el mayor factorial e utilizamos la fórmula dada por el profesor en el guión. Usando el metodo ***tofixed*** (pasar un numero usando notación de punto fijo) nos cercioramos de que no tengamos problemas con los números. Después lo multiplicamos por una variable ***number_*** hasta tener el código requerido. En cuanto a la segunda función, le pasamos una variable de tipo ***string*** y mediante un bucle, hacemos el caso inverso multiplicando el string (con un metodo llamado ***parseInt*** para pasarde una cadena de texto a número) por la funcion factorialCalculate para devolver el número decimal correspondiente.

### Ejercicio 3 - Validador de mensajes
Código TypeScript 
```
function isValid(string: string): boolean {
    let string_: string = '';
    let auxNumber: number = 0;
    let auxString: string = '';
    string_ = string;
    for (let i: number = 0; i < string.length; i++) {
      auxNumber = parseInt(string_, 10); //parseint es pasar de un string a num
      if (auxNumber.toFixed().length > 1) {
        i += (auxNumber.toFixed().length - 1); //tofixed formatea un numero usando notacion de punto fijo
      }
      if (isNaN(auxNumber) == true) { //isnan es para ver si no es un numero
        return false;
      }
      for (let j: number = 1; j <= auxNumber; j++) {
        auxString = string.charAt(i + j); //charart devuelve caracter con valor indice definido
        if (!/[a-z]/gi.test(auxString)) {
          return false;
        }
      }
      string_ = string_.slice(auxNumber + 1); //slice devuelve una copia de una parte del array
      i += auxNumber;
    }
    return true;
  }
```

Creamos una función llamada ***isValid*** donde recibiremos una cadena de texto de tipo string y devolveremos un booleano si sigue las siguientes reglas:
* Solo números y letras
* Los números tendrán varios digitos
* El número tiene que coincidir con la longitud de la cadena
* Cadena vacía es válida

Recorremos el sting dado y mediante unas sentencias if, le ponemos las condiciones anteriores y devolvemos true o false si la cadena cumnple las reglas o no.

## Ejercicio 4 - Conversor de estilo
Código TypeScript
```
function fromSnakeToCamelCase(stringSnakeCase: string): string {
    let stringCamelCase: string = '';
    for (let i: number = 0; i < stringSnakeCase.length; i++) {
      if (stringSnakeCase[i] == "_") {
        stringCamelCase += stringSnakeCase.charAt(i + 1).toUpperCase();
        i++;
      } else {
        stringCamelCase += stringSnakeCase[i];
      }
    }
    return stringCamelCase;
  }
  function fromCamelToSnakeCase(stringCamelCase: string): string {
    let stringSnakeCase: string = '';
    for (let i: number = 0; i < stringCamelCase.length; i++) {
      if (stringCamelCase[i] == stringCamelCase.charAt(i).toUpperCase()) {
        stringSnakeCase += "_" + stringCamelCase.charAt(i).toLowerCase();
      } else {
        stringSnakeCase += stringCamelCase[i];
      }
    }
    return stringSnakeCase;
  }
```

Creamos dos funciones, una llamada ***fromSnakeToCamelCase*** y otra ***fromCamelToSnakeCase***. En la primera, recibimos un string del tipo ***snake case*** y mediante una sentencia, le quitamos los ***"_"*** y ponemos la siguiente letra en mayuscula (***Camel case***). En la segunda función hacemos lo mismo pero en el sentido contrario. Obtenemos un string del estilo ***Camel case*** y lo convertimos en ***snake case***. 

## Ejercicio 5 - Un solo golpe
Código TypeScript
```
const onePunch = (str: string) => str == ``? (`Broken!`):
(str.split(" ").sort().join(" ").replace(/[ae]/gi, ""));
//split generamos un array a partir de una cadena
//sort ordena un array de cualquier tipo
//join metodo que bloquea un hilo hasta que muera
//replace metodo que devuelve una nueva cadena reemplazando los caracteres que le digas
```

Se nos pide crear una funcion llamada ***onePuch*** en una sola línea de código, donde le pasamos una variable de tipo string y la devolvemos quitandole las ***a*** y ***e***. Para ello utilizamos distintos métodos de java tales como:
* split: generamos un array a partir de una cadena.
* sort: ordena un array de cualquier tipo.
* join: metodo que bloquea un hilo hasta que muera.
* replace: que devuelve una nueva cadena reemplazando los caracteres que le digas.

## Ejercicio 6 - Conversor ISBN
Código TypeScript
```
function isValidISBN(ISBN: string): boolean {
    ISBN = ISBN.replace(/[-]/g, "");
    if (ISBN.length < 10) {
      return false;
    }
    let add: number = 0;
    for (let i = 0; i < ISBN.length; i++) {
      if ((ISBN[i] == "X") || (ISBN[i] == "x")) {
        add += (10 * (ISBN.length - i));
      } else {
        add += (parseInt(ISBN[i]) * (ISBN.length - i));
      }
    }
    if (add % 11 == 0) {
      return true;
    } else {
      return false;
    }
  }
```

Creamos una función llamada ***isValidISBN*** donde le pasamos una variable de tipo string. El código ISBN tiene las siguientes reglas:
* digitos entre 0-9
* compuesto por 9 digitos
* caracter de comprobacion "x" o un numero cualquiera

Implementamos estas reglas mediante unas sentencias if y un bucle recorremos el string y multiplicamos el código mediante la siguiente formula "(x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) mod 11 == 0". Luego, miramos si hay alguna "x" para corresponderle un 10. Devolverá un true o false dependiendo si sigue las reglas de codificacion ISBN o no.

## Ejercicio 7 - El siguiente número

Código TypeScript
```
function nextNumber(num: number): number {
    let numberString: string = num.toFixed();
    let stringAux: string = "";
    const numberSize: number = numberString.length;
 
    for (let i: number = numberSize - 1; i > -1; i--) {
      for (let j: number = 0; j < numberSize; j++) {
        if (i - j > 0) {
          if (parseInt(numberString.charAt(i - j)) > parseInt(numberString.charAt(i - j - 1))) {
            stringAux = numberString.charAt(i - j);
            numberString = numberString.substr(0, i - j - 1) + stringAux + numberString.charAt(i - j - 1) + numberString.substr(i - j + 1, numberSize);
            return parseInt(numberString);
          }
          else {
            stringAux = numberString.charAt(i - j);
            numberString = numberString.substr(0, i - j - 1) + stringAux + numberString.charAt(i - j - 1) + numberString.substr(i - j + 1, numberSize);
          }
        }
      }
      numberString = num.toFixed();
    }
    return -1;
  }
```

Creamos una funcón llamada ***nextNumber*** donde recibe una variable ***num*** del tipo number y devuelve el siguiente número mayor que este disponible reposicionando sus digitos. En caso de no encontrar uno disponible, devuleve ***"-1"***. Para ello pasamos el numero a un string mediante el metodo ***tofixed*** y creamos un string auxiliar. Luego, mediante un for anidado recorremos el string desde el principio hasta el final y viceversa para que usando la funcion ***charat*** nos devuelva el indic definido y poder cambiar los digitos de posición. Por último devolvemos el número en caso de que el reposicionamiento sea mayor que el dado previamante o un -1 si no lo es.

## Ejercicio 8 - Contando IPs

Código TypeScript
```
 
function ipsInRange(ip1: string, ip2: string): number {
    const ip1Copy = ip1.split(".");
    const ip2Copy = ip2.split(".");
    let numberAux: number = 1;
    let range: number = 0;
 
    for (let i: number = ip1Copy.length - 1; i >= 0; i--) {
      range += ((parseInt(ip2Copy[i]) - parseInt(ip1Copy[i]))* numberAux);
      numberAux *= 256;
    }
    return range;
  }
 
```
Creamos una funcion llamada ipsInRange, donde mediante dos direcciones ip en IPV4, hacemos una copia quitando los puntos de las direcciones y lo recorremos en un bucle de derecha a izquierda para obtener el valor restando la segunda ip a la primera. Ese resultado guardado en una variable se multiplica por 256. Por último devolemos el rango.

## Ejercicio 9 - Entrenador Pokemon

Código TypeScript
```
function pokemonCombat(pokemon1: string, pokemon2: string, attack: number, oppDefense: number): number {
    let effectiveness: number = 0;
   
    if (pokemon1 == pokemon2) {
      effectiveness = 0.5;
    } else {
      switch (pokemon1) {
        case "water":
          if (pokemon2 == "fire") {
            effectiveness = 2;
          }
          if ((pokemon2 == "electric") || (pokemon2 == "grass")) {
            effectiveness = 0.5;
          }
 
          break;
       
        case "fire":
          if (pokemon2 == "grass") {
            effectiveness = 2;
          }
          if (pokemon2 == "water") {
            effectiveness = 0.5;
          }
          if (pokemon2 == "electric") {
            effectiveness = 1;
          }  
        break;
       
        case "grass":
          if (pokemon2 == "water") {
            effectiveness = 2;
          }
 
          if (pokemon2 == "electric") {
            effectiveness = 1;
          }
 
          if (pokemon2 == "fire") {
            effectiveness = 0.5;
          }
 
          break;
 
        case "electric":
          if (pokemon2 == "water") {
            effectiveness = 2;
          }
 
          if ((pokemon2 == "fire") || (pokemon2 == "grass")) {
            effectiveness = 1;
          }
 
          break;
      }
    }
 
    let damage = 50 * (attack / oppDefense) * effectiveness;
    return damage;
  }
```

Creamos una funcion llamada ***pokemonCombat*** donde calculamos el daño que un movimiento causará un pokemon a otro mediante la siguiente fórmula ***"daño = 50 * (ataque / defensa) * efectividad"***. Le pasamos como variables "pokemon1: string, pokemon2: string, attack: number, oppDefense: number" y nos devolverá el daño.
Las reglas en cuanto al ataque serán los siguientes:
* Super efectivo = x2 de daño
* Neutral = x1 de daño
* No muy efectivo = x0.5 de daño

las reglas en cuanto a los pokemons serán las siguienntes:
* fuego > hierba
* fuego < agua
* fuego = eléctrico
* agua < hierba
* agua < eléctrico
* hierba = eléctrico

Considerando estas reglas, hicimos un swicth case donde implementamos los tipos de pokemon que hay y dentro de cada caso, mediante varios if, determinamos ***"las reglas de ataque"*** para ver como se comportaría los pokemon de distinto tipo luchando entre si.

## Ejercicio 10 - Validador de nombre usuario
Código TypeScript
```
function isValidUsername(username: string): boolean {
    const userNameLength: number = username.length;
 
    if ((userNameLength >= 4) && (userNameLength <= 30)) {
      if ((username[0] != "_") && (username[userNameLength - 1] != "_")) {
        if ((/[A-Z]/.test(username)) && (/[a-z]/.test(username)) && (/[0-9]/.test(username)) && (/[$_-]/.test(username))) {
          if ((!/[A-Z][A-Z][A-Z]/.test(username)) && (!/[a-z][a-z][a-z]/.test(username)) && (!/[0-9][0-9][0-9]/.test(username)) && (!/[$_-][$_-][$_-]/.test(username))) {
            return true;
          }
        }
      }
    }
    return false;
  }
 
```
 Creamos una funcion llamada ***isValidUsername*** donde comprobaremos si un nombre es válido mediante las siguiente reglas que implementamos mediante unos if anidados respectivamente. Nos devolverá un booleano true o false dependiendo de que siga las reglas o no.

* El nombre de usuario tiene que tener al menos 4 caracteres y no más de 30.
* El nombre de usuario no puede empezar ni terminar con un guión bajo.
* El nombre de usuario tiene que contener al menos una letra mayúscula, una letra minúscula, un número y algún símbolo especial ($,-,_).
* No se permite la repetición de un mismo tipo de caracter más de dos veces seguidas.


## Conclusión

Está tercera práctica es por ahora la que más me ha costado llevar a cabo debido a que entender y programar en typescript se me dificulta. Sin embargo leyendo los apuntes de clase y los tutoriales dados por el profesor, me han hecho entender un poco más este lenguaje de programación.










