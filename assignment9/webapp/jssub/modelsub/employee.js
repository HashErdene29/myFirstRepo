"use strict";
import { Person } from "./person.js";

class Employee extends Person {
    salary;
    hireDate;
    constructor(name, dateOfBirth, salary, hireDate){
        super(name, dateOfBirth);
        this.salary = salary;
        this.hireDate = hireDate;
    }

    getSalary(){return this.salary;}
    setSalary(s){this.salary = s;}

    getHireDate(){return this.hireDate;}
    setHireDate(d){this.hireDate = d;}

    doJob(jobTitle){
        console.log(this.getName(), " is a ", jobTitle, " who earns $", this.getSalary());
    }
}

export {Employee};