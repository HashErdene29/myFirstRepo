"use strict";

class Person {
    name;
    dateOfBirth;
    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    getName(){return this.name;}
    setName(n){this.name = n;}

    getDateOfBirth(){return this.dateOfBirth;}
    setDateOfBirth(date){this.dateOfBirth = date;}

    toString(){return "Name: " + this.getName() + ", DateOfBirth: " + this.getDateOfBirth()}
}

export {Person};