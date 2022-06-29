"use strict";
class Grocery {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    get() {
        return this.name + " " + this.quantity;
    }
}
;
let egg = new Grocery("egg", 12);
let milk = new Grocery("milk", 3);
let bread = new Grocery("bread", 5);
let groceries = [egg, milk, bread];
// Select the div element using the id property
const app = document.getElementById("app");
// add a "ul"
let ul = document.createElement("ul");
app === null || app === void 0 ? void 0 : app.appendChild(ul);
groceries.forEach(function (item) {
    // get the message
    let message = item.get();
    // create "li" and add message in it
    const li = document.createElement("li");
    li.textContent = message;
    // append "li" to "ul"
    ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
});
