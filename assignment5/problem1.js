// 1. Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-thenelse construct available in Javascript.
function max(a, b){
    if(a > b){
        return a;
    } else {
        return b;
    }
}
console.log("----------------Problem 1---------------- \nLargest number between two numbers -> ", max(2, 3) );

// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c){
    return max(max(a, b), c);
}
console.log("----------------Problem 2----------------\nLargest number between three numbers -> ", maxOfThree(4, 8, 2) );

// 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
// otherwise.
function isVowel(a){
    let vowels = ["a", "e", "i", "o", "u"];
    let result = false;
    vowels.forEach(element => {
       if(a === element){
        result = true;
       }
    });
    return result;
}
console.log("----------------Problem 3----------------\nIs character? ", isVowel("p"));

// 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an
// input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
function sum(a){
    let result = 0;
    a.forEach(element => {
        result += element;
    })
    return result;
}

function multiply(a){
    let result = 1;
    a.forEach(element => {
        result = result * element;
    })
    return result;
}
console.log("----------------Problem 4----------------\nSum -> ", sum([1, 2, 3, 4]), "Multiply -> ", multiply([1, 2, 3, 4]));

// 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".
function reverse(a){
    let result = a.split("").reduce((acc, curr) => curr + acc);
    return result;
}
console.log("----------------Problem 5----------------\nReversed -> ", reverse("jag testar"));

// 6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one
function findLongestWord(a){
    let result = a.reduce((acc, curr) => {
        if(acc > curr.length) {
            return acc;
        } else {
            return curr;
        }
    })
    return result;
}
console.log("----------------Problem 6----------------\nLongest word -> ", findLongestWord(["one", "two", "three"]));

// 7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
// containing only those words that were longer than i characters.
function findLongWords(a, i){
    return a.filter(element => element.length > i);
}
console.log("----------------Problem 7----------------\nLong words -> ", findLongWords(["one", "four", "three"], 3));

// 8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and
// returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be
// computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do
// NOT use any explicit looping construct; instead use functional programming style/approach.
function computeSumOfSquares(a){
    return a.reduce((acc, curr) => acc + curr*curr, 0);
}
console.log("----------------Problem 8----------------\nSum of square -> ", computeSumOfSquares([1, 2, 3]));

// 9. Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds
// and prints only the numbers which are odd.
console.log("----------------Problem 9----------------");
function printOddNumbersOnly(a){
    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 !== 0){
            console.log("Odd numbers", a[i]);
        }
    }
}
printOddNumbersOnly([1, 2, 3, 4, 5]);

// 10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
// and calculates and returns the sum of the squares of only the even numbers in the input array. E.g.
// computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.
function computeSumOfSquaresOfEvensOnly(a){
    let result = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 === 0){
            result = result + a[i] ** 2;
        }
    }
    return result;
}
console.log("----------------Problem 10---------------- \nSum of square of only even number -> ", computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

// 11. Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4
// above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use
// functional programming style/approach.
function sums(a){
    return a.reduce((result, element) => result + element, 0);
}
function multiplys(a){
    return a.reduce((result, element) => result * element, 1);
}
console.log("----------------Problem 11---------------- \nSum using Array.reduce(...) -> ", sums([1, 2, 3, 4]), "Multiply using Array.reduce(...) -> ", multiplys([1, 2, 3, 4]));

// 12. Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers
// and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should
// return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)
function findSecondBiggest(a){
    let max = 0;
    let secondmax = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] > max){
            secondmax = max;
            max = a[i];
        } else if(a[i] > secondmax && a[i] < max){
            secondmax = a[i];
        }
    }
    return secondmax;
}
console.log("----------------Problem 12---------------- \nSecond largest number -> ", findSecondBiggest([2, 5, 8, 9, 7, 6]) );

// 13. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b,
// and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with
// a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as
// output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2,
// 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).

function printFibo(n, a, b) {
    let result = [a, b]; 
  
    for (let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }

    return result;
}

console.log("----------------Problem 13---------------- \nFibonacci sequence ", printFibo(10, 0, 1));

// 14. Use Array Methods: filter, map, reduce, etc to implement functions below:
// // 1. Create a function using function declaration named sum with one parameter of Array type, the returned
// // result is the sum of all elements which are greater than 20.
// // 2. Create a function using function expression named getNewArray with one parameter of String Array,
// // return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.

function sumt(a) {
    let result =  a.filter(num => num > 20).reduce((acc, curr) => acc + curr, 0);
    return result;
}

function getNewArray(a) {
    let result = a.filter(element => element.length >= 5 && element.includes('a'));
    return result;
};
console.log("----------------Problem 14---------------- \nSum of all elements that are greater than 20 -> ", sumt([23, 67, 1, 9, 34]),
                "New array that contains all string -> ", getNewArray(["one", "apple", "orange", "laptop"]))