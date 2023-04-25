// x = 1;
// var a = 5;
// var b = 10;
// var c = function(a, b, c){
//     var x = 10;
//     document.write(x);
//     document.write(a);
//     var f = function(a, b, c){
//         b = a;
//         document.write(b);
//         b = c;
//         var x = 5;
//     }
//     f(a, b, c);
//     document.write(b);
// }
// c(8, 9, 10);
// document.write(b);
// document.write(x);

// var x = 9;
// function myFunction(){
//     return x * x;
// }
// document.write(myFunction());
// x = 5;
// document.write(myFunction());

// var foo = 1;
// function bar(){
//     document.write(foo);
//     if(!foo) {
//         var foo = 10;
//     }
//     alert(foo);
// }
// bar();


// function makeArmy(){
//     let shooters = [];
//     let i = 0;
//     while(i < 2){
//         let shooter = function(){
//             alert(i);
//         };
//         shooters.push(shooter);
//         i++;
//     }
//     return shooters;
// }
// let army = makeArmy();
// army[0];

// let user = {
//     firstName: "John",
//     sayHi(){
//         console.log(`Hello, ${this.firstName}`);
//     }
// };
// // user.sayHi();
// setTimeout(() => user.sayHi.call(user), 2000);

// x = 1; 
// var a = 5; 
// var b = 10; 
// var c = function(a, b, c) {
//     console.log("x1: "+ x);
//     console.log("a2: "+ a); 
//     var f = function() {
//         b = a; 
//         console.log("b3: " + b); 
//         b = c; 
//         var a = 3;
//     } 
//     f();
//     console.log("b4: " + b); 
//     x = 6; 
//     return f;
// } 
// c(8, 9, 7); 
// console.log("b5: " + b); 
// console.log("x6: "+ x);

 
var b = 1000; 
var f = function() {
    var a = 100;
    b = 10; 
    var z = a + b;
    var g = function(z) {
        return z * 2;
    }
    var b = 20;
    g(b);
    return g;
} 
var u = 20;
let myfunc = f();
let h = myfunc();
console.log(h);
console.log(u);
y = myfunc();
console.log(y);