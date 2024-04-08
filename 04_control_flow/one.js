// if

const isLoggedIn = true

if (isLoggedIn){

}

//<, >, <=, >=, ==(equals), =(assignmet), !=, ===(also check type)

// const score = 90
// let grade;
// if(score >=80){
//     if(score>= 90)
//         grade = "A++" 
//     else
//         grade = "A+"
// }
// else if (score >70){
//     grade = "B+"
// }
// else {
//     grade = "C"
// }
// console.log(`Your grade : ${grade}`);

const userLoggedIn =  true
const debitCard = true
const userLoggedInFromGoogle = true
const userLoggedInFromEmail = false


if(userLoggedIn && debitCard){
    console.log("Allow user to access website & ");
    console.log("Allow user to buy course");
}
if(userLoggedInFromEmail || userLoggedInFromGoogle){
    console.log("Allow user to access website only");
}
