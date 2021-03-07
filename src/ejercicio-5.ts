const onePunch = (str: string) => str == ``? (`Broken!`):
(str.split(" ").sort().join(" ").replace(/[ae]/gi, ""));
//split generamos un array a partir de una cadena
//sort ordena un array de cualquier tipo
//join metodo que bloquea un hilo hasta que muera
//replace metodo que devuelve una nueva cadena reemplazando los caracteres que le digas
const onePunchTest1: string = 'Beard Jeans Hairbrush Knuckleduster Sand';
const onePunchTest2: string = 'Sock Beard Vest Lady Sage';
const onePunchTest3: string = 'Beard Sack Gun Parachute Face-Kicking-Shoes';
const onePunchTest4: string = 'Snot Snow Soda Tank Beard';
const onePunchTest5: string = '';
let onePunchResult: string = onePunch(onePunchTest1);
console.log(`Test: ${onePunchTest1}  result: ${onePunchResult}`);
onePunchResult = onePunch(onePunchTest2);
console.log(`Test: ${onePunchTest2}  result: ${onePunchResult}`);
onePunchResult = onePunch(onePunchTest3);
console.log(`Test: ${onePunchTest3}  result: ${onePunchResult}`);
onePunchResult = onePunch(onePunchTest4);
console.log(`Test: ${onePunchTest4} result: ${onePunchResult}`);
onePunchResult = onePunch(onePunchTest5);
console.log(`Empty test: ${onePunchTest5} result: ${onePunchResult}`);