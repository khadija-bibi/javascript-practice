// const user ={
//     username: "khadija",
//     price: 999,

//     welcomeMsg: function(){
//         console.log(`${this.username} ,welcome to website`);
//         console.log(this)
//     }
// }
// user.welcomeMsg()

// user.username="sam"
// user.welcomeMsg()

// console.log(this)

// function chai(){
// let username = "khadija"
//     console.log(this.username); // this not used
// }

// chai()

// const add = (num1,num2) => {
//     return num1+num2       //explicit return
// }

// const add = (num1,num2) => num1+num2
const add = (num1,num2) => (num1+num2)//implicit return
console.log(add(2,3));


const myArray = [2,4,6,8]
myArray.forEach()