import { Employee, Manager } from "./classes.js";

let emp = new Employee("Jane Doe", 5000, new Date("03-15-2023"));
console.log(emp);

let man1 = new Manager("John Doe", 6000, new Date("04-17-2020"), 0.05);
console.log(man1);
console.log(man1.calcSalary());
console.log(emp.__proto__);

 