//Functions
// 1 Function with no arg.& no return type
// 2 function with arg. & no return type
// 3 Function without arg & with Return type
// 4 Function with arg. & with Return type
// 1 Function with no arg.& no return type
function add1() {
    console.log("Function with no arg.& no return type");
}
// add1(); 
// 2 function with arg. & no return type
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
// add2(5,2);
// 3 Function without arg & with Return type
function add3() {
    return (5 + 5);
}
var res = add3();
// console.log("Value of RES is "+res);
// 4 Function with arg. & with Return type
function add4(a, b) {
    return (a + b);
}
console.log("\n                Addition is " + add4(2, 3) + "\n        ");
