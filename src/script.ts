import { PersonClass } from "./classes/PersonClass.js";
import { ListClass } from "./classes/ListClass.js";
const form=document.querySelector(".new-item-form") as HTMLFormElement;
const type=document.querySelector("#type") as HTMLSelectElement;
const person=document.querySelector("#name") as HTMLInputElement;
const occup=document.querySelector("#occupation") as HTMLInputElement;
const amount=document.querySelector("#amount") as HTMLInputElement;
const ul=document.querySelector(".item-list") as HTMLUListElement;
const li= new ListClass(ul);
form.addEventListener(("submit"),(e:Event)=>{
   e.preventDefault();

   const personCreated=new PersonClass(person.value,occup.value,amount.valueAsNumber)

   
   li.render(personCreated,type.value)
})

