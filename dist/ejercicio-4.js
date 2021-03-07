function fromSnakeToCamelCase(stringSnakeCase) {
    let stringCamelCase = '';
    for (let i = 0; i < stringSnakeCase.length; i++) {
        if (stringSnakeCase[i] == "_") {
            stringCamelCase += stringSnakeCase.charAt(i + 1).toUpperCase();
            i++;
        }
        else {
            stringCamelCase += stringSnakeCase[i];
        }
    }
    return stringCamelCase;
}
function fromCamelToSnakeCase(stringCamelCase) {
    let stringSnakeCase = '';
    for (let i = 0; i < stringCamelCase.length; i++) {
        if (stringCamelCase[i] == stringCamelCase.charAt(i).toUpperCase()) {
            stringSnakeCase += "_" + stringCamelCase.charAt(i).toLowerCase();
        }
        else {
            stringSnakeCase += stringCamelCase[i];
        }
    }
    return stringSnakeCase;
}
let testStileConversor1 = "sampleString";
let testStileConversor2 = "theStealthWarrior";
let resultStileConversor1 = fromCamelToSnakeCase(testStileConversor1);
let resultStileConversor2 = fromCamelToSnakeCase(testStileConversor2);
let resultStileConversor3 = fromSnakeToCamelCase(resultStileConversor1);
let resultStileConversor4 = fromSnakeToCamelCase(resultStileConversor2);
console.log(`A Camel Case (${testStileConversor1}) in Snake Case is: ${resultStileConversor1}`);
console.log(`A Camel Case (${testStileConversor2}) in Snake Case is: ${resultStileConversor2}`);
console.log(`\nA Snake Case (${resultStileConversor1}) in Camel Case is: ${resultStileConversor3}`);
console.log(`A Snake Case (${resultStileConversor2}) in Camel Case is: ${resultStileConversor4}`);
