import { PersonClass } from "./classes/PersonClass.js";
import { ListClass } from "./classes/ListClass.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const person = document.querySelector("#name");
const occup = document.querySelector("#occupation");
const amount = document.querySelector("#amount");
const ul = document.querySelector(".item-list");
const li = new ListClass(ul);
form.addEventListener(("submit"), (e) => {
    e.preventDefault();
    const personCreated = new PersonClass(person.value, occup.value, amount.valueAsNumber);
    li.render(personCreated, type.value);
});
