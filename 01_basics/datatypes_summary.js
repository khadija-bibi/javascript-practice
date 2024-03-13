//prmitive datatype

//7 types
/*String,Number,undefined,Symbol,null,Boolean,BigInt*/
/*const score=100
const temp=null
const isLoggedIn=false
const my_name="khadija"
let email;
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);

const bigNum=23456782345678n
console.log(bigNum);

console.log(typeof score);
console.log(typeof temp);
console.log(typeof isLoggedIn);
console.log(typeof my_name);
console.log(typeof email);
console.log(typeof id);
console.log(typeof anotherid);*/

//reference or non primitive

// Array,Objects,Functions
/*const heros = ["shaktiman" , "hhsbx" , "sbjjxnd"]
let myObj={
    name: "khadija",
    age: 20,
}

const myFunction=function(){
    console.log("Hello world");
}
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);*/

//Memories
//2 types Stack(Primitive) , Heap(Non-Primitive)

let myNewName = "jiya"
let anotherName = myNewName
anotherName = "chai aur code"

console.log(myNewName);
console.log(anotherName);

//////
let userOne = {
    email: "qwert@gmail.com",
    upi: "user@gmail.com"
}
let userTwo=userOne
userTwo.email= "aaaaaa@gmail.com"
userTwo.upi= "gggg@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

