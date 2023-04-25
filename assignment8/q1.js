// ------------Question 1
const student = {
    firstName: String,
    lastName: String,
    grades: [],
    inputNewGrade: function(newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade: function(){
        let sum = 0;
        for(let i = 0; i < this.grades.length; i++){
            sum += this.grades[i];
        }
        sum = sum / this.grades.length;
        return sum;
    }
}

const student1 = Object.create(student);
student1.firstName = "John";
student1.lastName = "Doe";
student1.grades = [83, 94];

const student2 = Object.create(student);
student2.firstName = "Jane";
student2.lastName = "Doe";
student2.grades = [75, 88];

const student3 = Object.create(student);
student3.firstName = "Robert";
student3.lastName = "Jones";
student3.grades = [80, 83];

console.log(student1, " Average Grade => ", student1.computeAverageGrade());
student1.inputNewGrade(76);
console.log(student1, " Average Grade => ", student1.computeAverageGrade());
console.log(student2, " Average Grade => ", student2.computeAverageGrade());
student2.inputNewGrade(98);
console.log(student2, " Average Grade => ", student2.computeAverageGrade());
console.log(student3, " Average Grade => ", student3.computeAverageGrade());
student3.inputNewGrade(95);
console.log(student3, " Average Grade => ", student3.computeAverageGrade());


// ------------Question 2
// function Student(fname, lname, grade){
//     this.firstName = fname;
//     this.lastName = lname;
//     this.grades = grade;
//     this.inputNewGrade = function(grade){
//         this.grades.push(grade);
//     }
//     this.computeAverageGrade = function(){
//         let sum = 0;
//         for(let i = 0; i < this.grades.length; i++){
//             sum += this.grades[i];
//         }
//         sum = sum / this.grades.length;
//         return sum;
//     }
//     this.sort = function(){
//         return this.grades.sort()
//     }

// }

// let student1 = new Student("John", "Doe", [85, 73]);
// let student2 = new Student("Jane", "Doe", [90, 81]);
// let student3 = new Student("Robert", "Jones", [86, 94]);

// console.log(student1, " Average Grade => ", student1.computeAverageGrade());
// student1.inputNewGrade(76);
// console.log(student1, " Average Grade => ", student1.computeAverageGrade());
// student1.sort();
// console.log("Sorted => ", student1.grades);

// console.log(student2, " Average Grade => ", student2.computeAverageGrade());
// student2.inputNewGrade(98);
// console.log(student2, " Average Grade => ", student2.computeAverageGrade());
// student2.sort();
// console.log("Sorted => ", student2.grades);


// console.log(student3, " Average Grade => ", student3.computeAverageGrade());
// student3.inputNewGrade(95);
// console.log(student3, " Average Grade => ", student3.computeAverageGrade());
// student3.sort();
// console.log("Sorted => ", student3.grades);
