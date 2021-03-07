function isLeapYear(year) {
    if (year % 4 != 0 || (year % 100 == 0 && year % 400 != 0)) {
        //console.log("el año no es bisiesto");
        return false;
    }
    else {
        return true;
    }
}
const year1 = 1800;
const year2 = 1986;
const year3 = 1997;
const year4 = 2004;
const result1 = isLeapYear(year1);
const result2 = isLeapYear(year2);
const result3 = isLeapYear(year3);
const result4 = isLeapYear(year4);
console.log(`Is the ${year1} leap? = ${result1}`);
console.log(`Is the ${year2} leap? = ${result2}`);
console.log(`Is the ${year3} leap? = ${result3}`);
console.log(`Is the ${year4} leap? = ${result4}`);
