class Employee {
    #fullName;
    salary;
    hireDate;
    static counter = 5;

    constructor(fname, s, date){
        this.#fullName = fname;
        this.#setSalary(s);
        this.hireDate = date;
        Employee.intCounter();
    }

    calcSalary(){return this.salary;}
    static intCounter(){Employee.counter += 1;}

    #setSalary(s){this.salary = s;} //private instance method

    get name(){return this.#fullName;}
    set name(n){this.#fullName = n;}
}

class Manager extends Employee {
    bonus = 0;
    constructor(fname, s, date, bonus){
        super(fname, s, date);
        this.bonus = bonus;
    }

    calcSalary(){
        let s = super.calcSalary();
        return s * this.bonus + s;
    }
}

export { Employee, Manager };