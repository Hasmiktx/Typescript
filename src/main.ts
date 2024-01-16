//---------------------------------explicit type
let myName:string;
myName = "Hasmik";
let age:number=35;
let isFamale:boolean;
isFamale=true;

//----------------------------------------array
let myarr:string[];
myarr=["Hasmik","Ter-Khachatryan"];
console.log(myarr);
//let arrTwo:number[];
//arrTwo.push(5)
let arrTwo:number[]=[];
arrTwo.push(20)

//---------------------------union types
let mixedarr:(string|number)[]=[];
mixedarr.push("Hasmik");
mixedarr.push(35);

let id:string|number;
id =4;
id="5";


//----------------------------------object
let myObj:object;
myObj={
    name:"Hasmik",
    age:35
}
myObj={
    name:"Joe",
    age:30
}
let objTwo:{
    name:string,
    age:number,
    ocuupation:string
}
objTwo={
    name:"Joe",
    age:30,
    ocuupation:"Developer"
}

//--------------------------------any
let num:any=30;
num="30";
let arrThree:any[]=[];
arrThree=["joe",30,true]

//-------------------------------functions

let greet:Function;
greet=()=>{
    console.log("Hello")
}

const numFunc=(a:number,b:number,c?:number|string):void=>{
    console.log(a,b);
    console.log(c)
}
numFunc(5,10)   //c undefined   c can be or not to be

const numFuncWithDefault=(a:number,b:number,c:number|string=2):void=>{
    console.log(a,b,c)
}
numFuncWithDefault(3,4)  //c default parameter


const add=(a:number,b:number):number=>{
   return a+b
}

add(5,4)


//----------------------------------  Aliase
type numOrStr=number|string
type objWithName={
    name:string,
    age:numOrStr
}
// const myFunc=(user:{name:string,age:number|string},id:number|string):void=>{
//          console.log(`${id}: ${user.name}`)
// }


const myFunc=(user:objWithName,id:numOrStr):void=>{
    console.log(`${id}: ${user.name}`)
}



//-------------------------------Function signature
  //example1
let greetF:(a:number,b:string)=>void
greetF=(age:number,name:string)=>{
    console.log(`Hello ${name}`)
}
//example2
let calc:(a:number,b:number,c:string)=>number
calc=(numOne:number,numTwo:number,c:string)=>{
    if(c==="add"){
        return numOne+numTwo
    }else{
        return numOne-numTwo
    }
}
//example3
let objFunc:(obj:{name:string,age:number})=>void;
type person={
    name:string,
    age:number
}
objFunc=(John:person)=>{
console.log(John.age)
}



//-----------------------------------------classes

class Person{
    constructor(
        readonly name:string,
        private gender:string,
        public  amount:number
    ){}

    infoFunc(){
        return `${this.name}'s sallary is ${this.amount},gender:${this.gender}`
    }
}

const persOne= new Person("Ann","famale",200);
const persTwo=new Person("John","male",400);

//persOne.name="Has"        dont allow
//persOne.gender    cannot be acsess
console.log(persOne.infoFunc())

const arrPerson:Person[]=[];
arrPerson.push(persOne);
arrPerson.push(persTwo)
arrPerson.forEach((person)=>{
    console.log(person.infoFunc(),person.name)
})