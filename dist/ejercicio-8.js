function ipsInRange(ip1, ip2) {
    const ip1Copy = ip1.split(".");
    const ip2Copy = ip2.split(".");
    let numberAux = 1;
    let range = 0;
    for (let i = ip1Copy.length - 1; i >= 0; i--) {
        range += ((parseInt(ip2Copy[i]) - parseInt(ip1Copy[i])) * numberAux);
        numberAux *= 256;
    }
    return range;
}
const ip1 = "10.0.0.0";
const ip2 = "10.0.0.50";
let testIpResult = ipsInRange(ip1, ip2);
console.log(`${ip1} - ${ip2} = ${testIpResult}`);
const ip3 = "10.0.1.0";
testIpResult = ipsInRange(ip1, ip3);
console.log(`${ip1} - ${ip3} = ${testIpResult}`);
const ip4 = "20.0.0.10";
const ip5 = "20.0.1.0";
testIpResult = ipsInRange(ip4, ip5);
console.log(`${ip4} - ${ip5} = ${testIpResult}`);
