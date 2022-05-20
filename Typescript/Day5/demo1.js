var a = [];
// 1 Using Push & pop Method
// 2 Using Splice method
// 1 Using Push & pop Method It works on LIFO Principal
a.push(22);
// console.log(a);
a.push(44, 15, 63, 88);
// console.log(a);
var res = a.pop();
// console.log("Poped Value is "+res);
// console.log(a);
// 2 Using Splice method
var a1 = [12, 11, 13, 15];
// console.log(a1);
// a1.splice(2,0,45);
// console.log(a1);
// a1.splice(3,0,20,78,34,35);
// console.log(a1);
// a1.splice(3,1);
// console.log(a1);
// a1.splice(3,2);
// console.log(a1);
// a1.splice(2,1,55);
// console.log(a1);
//  slice method
var a2 = [4, 5, 7, 8, 9, 6, 11, 20, 45, 63];
// var temp=a2.slice(1,5);
// console.log("Original array   "+a2);
// console.log("Copied Array    "+temp);
// var temp2=a2.slice(3);
// console.log("Copied Array    "+temp2);
// var temp3=a2.slice();
// console.log("Copied Array    "+temp3);
//4 map method
var a3 = [2, 3, 4, 5, 6];
// var res1=a3.map((value,i)=>{
//         if(i==2 || i==3){
//             return (value*value)
//         }
// })
var res1 = a3.map(function (value, i) {
    return (value * value);
});
console.log(a3);
console.log(res1);
var a4 = [2.5, "Sumit", true, 2, "Raokhande", 8];
// console.log(a4.join("  "));
