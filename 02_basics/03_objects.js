//singleton

//object literals
//Object.create

const mySym = Symbol("key1")
const JsUser = {
    name: "Khadija",
    "full_name": "Khadija Bibi",
    age: 20,
    [mySym]: "mykey1",
    location: "Rawalpindi",
    email: "khadijabibi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full_name"]);
// console.log(JsUser["name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hbxhsabc@gmail.com"
Object.freeze(JsUser)
console.log(JsUser.email)
JsUser.email = "qwswd@gmail.com"
console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello JS user")
}
console.log(JsUser.greeting());