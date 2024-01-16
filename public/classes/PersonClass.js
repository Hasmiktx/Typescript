export class PersonClass {
    constructor(name, occup, amount) {
        this.name = name;
        this.occup = occup;
        this.amount = amount;
    }
    print() {
        return `${this.name} is a ${this.occup} with ${this.amount} salary`;
    }
}
