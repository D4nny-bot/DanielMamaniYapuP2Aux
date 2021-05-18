"use strict";
console.log("introduccion a typescrip");
//introduccion a typescrip
let namee = "Daniel";
//namee = 4;
function greet(sal) {
    console.log(sal);
}
// - Cree una funcion donde el tipo de retorno never sea útil
function errorEception(msge) {
    throw new Error(msge);
}
// modificar
function saludo(nom, eda) {
    let saludo = console.log(`hello ${nom}, your age is ${eda}`);
    return greet(saludo);
}
saludo("Daniel", 101);
