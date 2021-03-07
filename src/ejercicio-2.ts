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
let test: number = 463;
let resultTestDF: string = decimalToFactorial(test);
console.log(`The number ${test} in decial to factorial is: ${resultTestDF}`);
let resultTestFD = factorialToDecimal(resultTestDF);
console.log(`The codification ${resultTestDF} in decimal is: ${resultTestDF}`);