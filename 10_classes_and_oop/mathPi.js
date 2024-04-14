// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// math.PI ki value is wjah sai change ni ho skkti because us ki kuxh properties ko hard code true ya false kiya hoa hai 
// i.e {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const chai = {
    name : "chai1",
    price : 250,
    isAvail : true,
    abc: function(){ // is ki wjah sai msla aana neechy loop main is liye cond check krain gai
        console.log("chai ni bni");
    }
}

console.log(chai);

//checking properties
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// now changing properties
Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//agr enumerable false ho ga toh loop nhi lgy ga and phir name nzr ni aaga ga
for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    
}

