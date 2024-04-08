function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("j");
    console.log("k");
}
// sayMyName()

// function add(num1, num2){
//     console.log(num1+num2)
// }
// add(2,3)

// function add(num1, num2){
//     return num1+num2
// }
// const result =add(2,3)
// // console.log("Result",result);

// function loginUserMessage(username){
//     if(username ===undefined){
//         console.log("Please enter  ausername");
//         return 
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("khadija"))
// console.log(loginUserMessage())

// function calculateCarPrice(...num1){// spread convert it to array
//     return num1
// }

// console.log(calculateCarPrice(200, 400, 500)) // multiple arguments for the same parameter

function calculateCarPrice(val1, val2 ,...num1){// spread convert it to array
    return num1
}

// console.log(calculateCarPrice(200, 400, 500, 600, 700)) // multiple arguments for the same parameter

const user= {
    name: "khdija",
    email: "khadija@gmail.com"
}
function handleObject(user){//name change ho skta because argument same ho ga
    console.log(`Username is ${user.name} and email ${user.email}`);
}

// handleObject(user)

const myNewArr =[200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr));


