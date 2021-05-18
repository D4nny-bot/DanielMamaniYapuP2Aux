"use strict";
console.log("introduccion a typescrip");
//introduccion a typescrip
var namee = "Daniel";
//namee = 5;
//function greet(name: string, age: number){
function greet(sal) {
    console.log(sal);
    //let saludo = console.log(`hello ${name}, your age is ${age}`);
    //return saludo;
}
//greet("Daniel", 99);
// - Cree una funcion dinde el tipo de retorno never sea útil
function errorEception(msge) {
    throw new Error(msge);
}
//- Modifique la función greet para poder implementar una función como parámetro
/*function saludo(nom: string, eda: number){
    let saludo = console.log(`hello ${nom}, your age is ${eda}`);
    return greet(saludo);
}
saludo("Daniel", 100);
*/
