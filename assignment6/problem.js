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

let user = {
    firstName: "John",
    sayHi(){
        console.log(`Hello, ${this.firstName}`);
    }
};
// user.sayHi();
setTimeout(() => user.sayHi.call(user), 2000);