//Array

const myArr = [0,1,2,3,4,5]
// const myHeros =["shaktiman","naagraj"]

// const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2.length);
// myArr.push(6)

// myArr.push(7)
// myArr.pop()

// myArr.unshift(6)
// myArr.shift()
// console.log(myArr.includes(9))

// console.log(myArr.indexOf(9));

// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice ,splice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log("B ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);