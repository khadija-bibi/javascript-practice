// let a = 10
// const b =20
// var c = 30


// var c = 300
let c =300
if(true){
    let a = 10
    const b =20
    let c = 30
}
// console.log(a);
// console.log(b);
// console.log(c)


//nesred scope
function one(){
    const username = "khadija"

    function two(params) {
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website)

    // two()
}
// one()

if(true){
    const username = "khadija"
    if (username==="khadija") {
        const website="Youtube" 
        // console.log(username +" " +website)
    }
    // console.log(website)
}
// console.log(username)

///---------------interesting-----------

function addone(num){//simple function funct defination sai pehly bhi call kr skty
    return num +1
}
// console.log(addone(1))

const func = function (num){//expression function main defination sai pehly call ni kr skty
    return num +1
}
console.log(func(10))