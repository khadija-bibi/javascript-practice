//dates
// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toUTCString())
// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toString())
// console.log(myCreatedDate.toISOString())
// console.log(myCreatedDate.toJSON())
// console.log(myCreatedDate.toLocaleDateString())
// console.log(myCreatedDate.toUTCString())

// let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toUTCString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay().toString())
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
    weekday: "long",
})







