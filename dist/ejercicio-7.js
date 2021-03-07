function nextNumber(num) {
    let numberString = num.toFixed();
    let stringAux = "";
    const numberSize = numberString.length;
    for (let i = numberSize - 1; i > -1; i--) {
        for (let j = 0; j < numberSize; j++) {
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
console.log(`12 -> ${nextNumber(12)}`);
console.log(`513 -> ${nextNumber(513)}`);
console.log(`2017 -> ${nextNumber(2017)}`);
console.log(`9 -> ${nextNumber(9)}`);
console.log(`111 -> ${nextNumber(111)}`);
console.log(`531 -> ${nextNumber(531)}`);
