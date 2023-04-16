"use strict";

import { Person } from "./modelsub/person.js";
import { Employee } from "./modelsub/employee.js";

let person1 = new Person("Ana Smith", new Date("12-15-1998"));
let person2 = new Person("Rob Jone", new Date("11-16-1945"));
let person3 = new Person("Carlos Slim Helu", new Date("09-24-1976"));
console.log(person1);
console.log(person2);
console.log(person3);


let employee1 = new Employee("Jim Hanson", new Date("08-03-1996"), "245,990.00", new Date("10-12-2022"))
employee1.doJob("Software Engineer");

