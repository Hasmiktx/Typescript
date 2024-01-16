"use strict";
//---------------------------------explicit type
let myName;
myName = "Hasmik";
let age = 35;
let isFamale;
isFamale = true;
//----------------------------------------array
let myarr;
myarr = ["Hasmik", "Ter-Khachatryan"];
console.log(myarr);
//let arrTwo:number[];
//arrTwo.push(5)
let arrTwo = [];
arrTwo.push(20);
//---------------------------union types
let mixedarr = [];
mixedarr.push("Hasmik");
mixedarr.push(35);
let id;
id = 4;
id = "5";
//----------------------------------object
let myObj;
myObj = {
    name: "Hasmik",
    age: 35
};
myObj = {
    name: "Joe",
    age: 30
};
let objTwo;
objTwo = {
    name: "Joe",
    age: 30,
    ocuupation: "Developer"
};
//--------------------------------any
let num = 30;
num = "30";
let arrThree = [];
arrThree = ["joe", 30, true];
//-------------------------------functions
let greet;
greet = () => {
    console.log("Hello");
};
const numFunc = (a, b, c) => {
    console.log(a, b);
    console.log(c);
};
numFunc(5, 10); //c undefined   c can be or not to be
const numFuncWithDefault = (a, b, c = 2) => {
    console.log(a, b, c);
};
numFuncWithDefault(3, 4); //c default parameter
const add = (a, b) => {
    return a + b;
};
add(5, 4);
// const myFunc=(user:{name:string,age:number|string},id:number|string):void=>{
//          console.log(`${id}: ${user.name}`)
// }
const myFunc = (user, id) => {
    console.log(`${id}: ${user.name}`);
};
//-------------------------------Function signature
//example1
let greetF;
greetF = (age, name) => {
    console.log(`Hello ${name}`);
};
//example2
let calc;
calc = (numOne, numTwo, c) => {
    if (c === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//example3
let objFunc;
objFunc = (John) => {
    console.log(John.age);
};
//-----------------------------------------classes
class Person {
    constructor(name, gender, amount) {
        this.name = name;
        this.gender = gender;
        this.amount = amount;
    }
    infoFunc() {
        return `${this.name}'s sallary is ${this.amount},gender:${this.gender}`;
    }
}
const persOne = new Person("Ann", "famale", 200);
const persTwo = new Person("John", "male", 400);
//persOne.name="Has"        dont allow
//persOne.gender    cannot be acsess
console.log(persOne.infoFunc());
const arrPerson = [];
arrPerson.push(persOne);
arrPerson.push(persTwo);
arrPerson.forEach((person) => {
    console.log(person.infoFunc(), person.name);
});
