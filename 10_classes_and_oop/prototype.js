//G O A L
// let myName = "khadija   "
// let channel = "chai  "

// console.log(myName.truelength);//bakeIn functionality
//--------------
let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}
// heroPower.hitesh()
// myHeros.hitesh()

//as all the things are after all objects thats why when we inject some function in object we can access it through any function, array or object.

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
myHeros.heyHitesh()
// heroPower.heyHitesh()

//but agr hm down yani array ya function ko kuxh property inject krty hain to object joh kai top level hai wo access ni kr skta
//top pr ho toh down waly access kr skty

//INHERITANCE
//WE ARE USING OBJECT HERE

const User = {
    username : "chai",
    email : "chai@gmail.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//here inheritsnce is done i.e now TASupport can access the properties of TeachingSupport
}

Teacher.__proto__ = User//can also be done like this

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //TeachingSupport Teacher ki properties access kry ga 

let anotherUserName = "Khadija  "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is ${this.trim().length}`);
}
anotherUserName.trueLength()//this main wo show hota jis name call kiya hota

"sara  ".trueLength()
"jiya    ".trueLength()
