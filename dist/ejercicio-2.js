function factorialCalculate(num) {
    if (num == 0) {
        return 1;
    }
    return num * factorialCalculate(num - 1);
}
function decimalToFactorial(num) {
    let factorialNumber = 0;
    let factorialChain = '';
    let number_ = 0;
    while (factorialCalculate(factorialNumber) < num) {
        factorialNumber++;
    }
    factorialNumber--;
    for (let i = factorialNumber; i > -1; i--) {
        number_ = Math.floor(num / factorialCalculate(i));
        factorialChain += number_.toFixed();
        num -= (number_ * factorialCalculate(i));
    }
    return factorialChain;
}
function factorialToDecimal(string_) {
    let codification = 0;
    let cont = 0;
    for (let i = string_.length - 1; i > -1; i--) {
        codification += ((parseInt(string_[cont]) * factorialCalculate(i)));
        cont++;
    }
    return codification;
}
let test = 463;
let resultTestDF = decimalToFactorial(test);
console.log(`The number ${test} in decial to factorial is: ${resultTestDF}`);
let resultTestFD = factorialToDecimal(resultTestDF);
console.log(`The codification ${resultTestDF} in decimal is: ${resultTestDF}`);
