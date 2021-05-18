console.log("introduccion a typescrip");
//introduccion a typescrip
let namee: string = "Daniel";
//namee = 4;

function greet(sal: any, anio: number){

    console.log(sal, anio);
            
}
    
// - Cree una funcion donde el tipo de retorno never sea útil
function errorEception(msge: string): never{
    throw new Error(msge);
}
// modificar
function saludo(nom: string, eda: number){
    let saludo = console.log(`hello ${nom}, your age is ${eda} y nació el anio`);
    return saludo;
}
greet(saludo("Daniel", 101), 1900);


    


