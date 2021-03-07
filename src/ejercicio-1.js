function isLeapYear(year) {
    if (year % 4 != 0 || (year % 100 == 0 && year % 400 != 0)) {
        //console.log("el año no es bisiesto");
        return false;
    }
    else {
        return true;
    }
}
var year1 = 1800;
var year2 = 1986;
var year3 = 1997;
var year4 = 2004;
var result1 = isLeapYear(year1);
var result2 = isLeapYear(year2);
var result3 = isLeapYear(year3);
var result4 = isLeapYear(year4);
console.log("Is the " + year1 + " leap? = " + result1);
console.log("Is the " + year2 + " leap? = " + result2);
console.log("Is the " + year3 + " leap? = " + result3);
console.log("Is the " + year4 + " leap? = " + result4);
