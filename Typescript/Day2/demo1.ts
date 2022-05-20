// console.log("Hello World...");

// First Should be character
// Alphanumeric
// No any special keyword allowed
// No any special Char.is allows but $ & _ allowed

var a;
var a1;
var a$b;
var b,b1;

//Data Type
// number(int,long,double,float,short),string(string=>""/''),boolean(true/false),
// any(number,string,boolean),void (netural datatype it does not point anything)
//Misec. null & undefined

var c:number=10; //Forward declaration & definitation
// console.log('Value of C is '+c);
var c1=20;
var c2:string;
c2='Sumit';
var c3:string;
// console.log("Default value of c3 is "+c3);
var c4:any;
c4=2.5;
console.log("Value of C4 is "+c4);
c4='Sumit';
console.log("Value of C4 is "+c4);
c4=true;
console.log("Value of C4 is "+c4);

console.log(`
==================================
    Value of c4 is ${c4}
`);

//Type Assertion
var d:any;
// it has 2 ways for type assertion
//1 angle bracket
// 2 as syntax

// 1 Angle bracket
var temp1=(<string> d);
    //  temp1.

// 2 as syntax

var temp2=(d as string);
    // temp2.


