function isLeapYear(year: number) {
    if (year%4 != 0 || (year%100 == 0 && year%400 != 0) ) {
        //console.log("el año no es bisiesto");
        return false;
    }
    else {
        return true;
    }
    
}

const year1: number = 1800;
const year2: number = 1986;
const year3: number = 1997;
const year4: number = 2004;
const result1: boolean = isLeapYear(year1);
const result2: boolean = isLeapYear(year2);
const result3: boolean = isLeapYear(year3);
const result4: boolean = isLeapYear(year4);
console.log(`Is the ${year1} leap? = ${result1}`);
console.log(`Is the ${year2} leap? = ${result2}`);
console.log(`Is the ${year3} leap? = ${result3}`);
console.log(`Is the ${year4} leap? = ${result4}`);