// setTimeout(function() {console.log("world"); }, 2000);
// console.log("hello");

console.log("start");
// process.nextTrick(() => console.log("this is process next trick"));
Promise.resolve().then(() => console.log("This is promise.resolve"));
setTimeout(() => console.log("this is set timeout"), 0)

