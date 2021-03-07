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
  
  const ip1: string = "10.0.0.0";
  const ip2: string = "10.0.0.50";
  let testIpResult: number = ipsInRange(ip1, ip2);
  console.log(`${ip1} - ${ip2} = ${testIpResult}`);
  const ip3: string = "10.0.1.0";
  testIpResult = ipsInRange(ip1, ip3);
  console.log(`${ip1} - ${ip3} = ${testIpResult}`);
  const ip4: string = "20.0.0.10";
  const ip5: string = "20.0.1.0";
  testIpResult = ipsInRange(ip4, ip5);
  console.log(`${ip4} - ${ip5} = ${testIpResult}`);