//array specific loops
//for of loop
// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(greet);

// }


//maps (similar to arrya but there is some differene of unique values)

const map = new Map()
map.set("IN" ,"India")
map.set("USA" ,"United Stafes o America")
map.set("PAK" ,"Pakistan")
map.set("PAK" ,"Pakistan")


// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":-", value);
    
// }

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spider',
}
for (const [key, value] of myObject) {
    console.log(key, ":-", value);
    
}