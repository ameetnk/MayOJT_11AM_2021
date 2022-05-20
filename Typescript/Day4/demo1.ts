//Optional Parameter function

function add1(a:number,b?:number){
    console.log("Value of A is "+a); //5
    console.log("Value of B is "+b); //undefined
    console.log("Addition of A+B is "+(a+b)); //NAN=> not a number
}

// add1(5);
// add1(5,6);

function add2(a?:number,b?:number,c?:number){
    console.log("Value of A is "+a); //5
    console.log("Value of B is "+b); //undefined
    console.log("Addition of A+B is "+(a+b)); //NAN=> not a number
}
// add2(9,8);

//default parameter functions

function add3(a:number,b:number=5){
    console.log("Value of A is "+a); //7
    console.log("Value of B is "+b); //5
    console.log("Addition of A+B is "+(a+b));//12
}

// add3(7);
// add3(4,2);

function add4(a:number=1,b:number){
    console.log("Value of A is "+a); //7
    console.log("Value of B is "+b); //5
    console.log("Addition of A+B is "+(a+b));//12
}

// add4(7,11);

function add5(a:number=1,b?:number){
    console.log("Value of A is "+a); //1
    console.log("Value of B is "+b); //undefined
    console.log("Addition of A+B is "+(a+b));//nan
}

add5();