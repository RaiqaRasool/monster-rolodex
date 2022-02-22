class raiqa{
    constructor(name,department){
        this.name=name;
        this.department=department;
    }
    talk(){
        alert("I am "+this.name+" from department "+this.department);
    }
}
class person extends raiqa{
    constructor(name,department,age){
        super(name,department);
        this.age=age;
        }
    gettalk=()=>{
        console.log(`Hi I am ${this.name} with age ${this.age} and belong to department ${this.department}`)
    }
}
let p=new person("Raiqa","CIS",21);
p.gettalk();
p.talk();