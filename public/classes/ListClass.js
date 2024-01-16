export class ListClass {
    constructor(container) {
        this.container = container;
    }
    render(item, header) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = header;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.print();
        li.append(p);
        this.container.append(li);
    }
}
