// const userEmail = "k@gmail.com"

// if(userEmail) {// string is empty => false,if empty array is assigned =>true
//     console.log("Got user Email")
// }
// else{
//     console.log("Don't have user Email")
// }

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

//true, "0", 'false', " ", [],{empty object},function(){}

const userEmail = []

if (userEmail.length === 0) {
    // console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length ===0) {
    // console.log("Object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10//output10 
// val1 = undefined ?? 15
val1= null ?? 10 ?? 20
// console.log(val1);
//Ternary Operator

// condition ? true : flase

const iceTeaPrice = 100

iceTeaPrice>=80 ? console.log("greater than 80") : console.log("less than 80");

