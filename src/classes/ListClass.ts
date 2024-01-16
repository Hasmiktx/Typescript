import { Invoketext } from "../interfaces/InvokeText";
export class ListClass{
    constructor(
        private container:HTMLUListElement
    ){}
    render(item:Invoketext,header:string){
      const li = document.createElement("li");
      const h4=document.createElement("h4");
      h4.innerText=header
      li.append(h4)
      const p= document.createElement("p");
      p.innerText=item.print()
      li.append(p)
      this.container.append(li)
    }
}