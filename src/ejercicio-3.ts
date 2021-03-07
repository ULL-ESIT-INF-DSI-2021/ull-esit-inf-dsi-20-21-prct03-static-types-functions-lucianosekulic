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
  const string1: string = '';
  const string2: string = '3hey5hello2hi';
  const string3: string = '3hey10helloworld';
  const string4: string = '3hey9helloworld';
  const string5: string = '4code10helloworld';
  const resultString1 = isValid(string1);
  console.log(`Cadena vacia: ${resultString1}`);
  const resultString2 = isValid(string2);
  console.log(`Cadena ${string2}: ${resultString2}`);
  const resultString3 = isValid(string3);
  console.log(`Cadena ${string3}: ${resultString3}`);
  const resultString4 = isValid(string4);
  console.log(`Cadena ${string4}: ${resultString4}`);
  const resultString5 = isValid(string5);
  console.log(`Cadena ${string5}: ${resultString5}`);