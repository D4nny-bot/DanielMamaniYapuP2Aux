console.log("introduccion a typescrip");
//introduccion a typescrip
let namee: string = "Daniel";
//namee = 4;

function greet(sal: string, anio: number){

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
greet(`${saludo("Daniel", 18)}`, 1900);

console.log("Clases e Interfaces");
class Departament{
    
    owner: string;
    id: string;
    workers: Array<string>;
    constructor(id: string, work: Array<string>){
        this.owner = "Daniel Mamani Yapu";
        this.id = id;
        this.workers = work;
    }
    createWorkeer(wor: string){
        this.workers.push(wor);
    }
    showEmployeesInfo(){
        let cant = this.workers.length;
        //var nom: Array<string> = []; 
        this.workers.forEach((n) => {
            console.log("nombres " + n); 
        });
        return console.log(`cantidad ${cant}`);
    }
}
var dep1: Departament = new Departament("1", ["daniel"]);
dep1.createWorkeer("sammy");
dep1.createWorkeer("david");
dep1.createWorkeer("rodri");
dep1.showEmployeesInfo();


class sddk extends Departament{

}
interface lsls{

}


    


