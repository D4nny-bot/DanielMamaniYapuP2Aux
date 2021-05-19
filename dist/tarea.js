"use strict";
console.log("introduccion a typescrip");
//introduccion a typescrip
let namee = "Daniel";
//namee = 4;
function greet(sal, anio) {
    console.log(sal, anio);
}
// - Cree una funcion donde el tipo de retorno never sea útil
function errorEception(msge) {
    throw new Error(msge);
}
// modificar
function saludo(nom, eda) {
    let saludo = console.log(`hello ${nom}, your age is ${eda} y nació el anio`);
    return saludo;
}
greet(`${saludo("Daniel", 18)}`, 1900);
console.log("Clases e Interfaces");
class Departament {
    constructor(id, work) {
        this.owner = "Daniel Mamani Yapu";
        this.id = id;
        this.workers = work;
    }
    createWorkeer(wor) {
        this.workers.push(wor);
    }
    showEmployeesInfo() {
        let cant = this.workers.length;
        //var nom: Array<string> = []; 
        this.workers.forEach((n) => {
            console.log("nombres " + n);
        });
        return console.log(`cantidad ${cant}`);
    }
}
var dep1 = new Departament("1", ["daniel"]);
dep1.createWorkeer("sammy");
dep1.createWorkeer("david");
dep1.createWorkeer("rodri");
dep1.showEmployeesInfo();
class CEODepartament extends Departament {
    constructor(roladmi, id, work) {
        super(id, work);
        this.admins = ["AUTHOR", "ADMIN"].concat(roladmi);
    }
}
var CEO1 = new CEODepartament(["DEVELOPER", "SECURITY", "SW"], "2", ["da"]);
console.log(CEO1.admins);
class ReportsDepartament extends Departament {
    constructor(repo, id, work) {
        super(id, work);
        var len;
        this.reports = ["task 004 failed"].concat(repo);
    }
    addReport(repo) {
        let rest = this.reports.concat(repo);
        console.log(rest);
    }
    greet(name) {
        console.log(`Hello ${name} there are ${this.reports.length} reports`);
    }
}
var Repo1 = new ReportsDepartament([], "3", ["luis"]);
Repo1.addReport(["rep1", "rep2", "rep3"]);
//Repo1.rep = ["rep4"];
Repo1.greet("nombre");
