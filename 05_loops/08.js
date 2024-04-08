const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and crrval: ${currval}`);
//     return acc + currval
    
// },0)
myTotal = myNums.reduce((acc, curr) =>acc + curr, 0) 

console.log(myTotal);

const shoppingCart = [
    {
        itenName : "js course",
        price : 2999
    },
    {
        itenName : "python course",
        price : 4999
    },
    {
        itenName : "mobiledev course",
        price : 5999
    },
    {
        itenName : "dataScience course course",
        price : 3000
    }
]

const priceToday = shoppingCart.reduce((acc, item) =>acc + item.price , 0) 
console.log(priceToday);
