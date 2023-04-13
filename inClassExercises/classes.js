class Employee {
    #fullName;
    salary;
    hireDate;
    static counter = 5;

    constructor(fname, s, date){
        this.#fullName = fname;
        this.salary = s;
        this.hireDate = date;
        Employee.intCounter();
    }

    calcSalary(){return this.salary;}
    static intCounter(){Employee.counter += 1;}

    #setSalary(s){this.salary = s;}

    get name(){return this.#fullName;}
    set name(n){this.#fullName = n;}
}

let emp = new Employee("Jane Doe", 5000, new Date("03-15-2023"));
console.log(emp);

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

let man1 = new Manager("John Doe", 6000, new Date("04-17-2020"), 0.05);
console.log(man1);
console.log(man1.calcSalary());