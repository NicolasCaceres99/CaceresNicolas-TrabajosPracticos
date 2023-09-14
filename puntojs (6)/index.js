// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo: 

// input: 20
// input: 210




// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.

let numero = parseFloat(prompt('ingrese un numero'));
let divisibles = [];

if (numero % 2 === 0 ){
    divisibles.push(2);
}
 if  (numero % 3 === 0){
divisibles.push(3);
}
if (numero % 5 ===0){
    divisibles.push(5);
}
if (numero % 7 ===0){
    divisibles.push(7);
}
if (divisibles.length === 0){
    document.write(`el ${numero} no es divisible por ninguno de los numeros (2,3,5,7.)`);
}
else {
    document.write(`el ${numero} es  divisible por los siguientes numeros: ${divisibles.join(',  ')}`);
}