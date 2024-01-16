import { Invoketext } from "../interfaces/InvokeText.js";
export class PersonClass implements Invoketext{
    constructor(
        readonly name:string,
        private occup:string,
        public amount:number

    ){}
    print() {
        return `${this.name} is a ${this.occup} with ${this.amount} salary`
    }
}