//for 
// let array=[1,2,3,4,5]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element==5){
//         console.log(`There is an element 5 on index ${i}`);
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value : ${j} and inner loop ${i}`);
//         console.log(i ,"*"+ j ," = " ,i*j);
//     }
    
// }

//break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("detected 5");
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("detected 5");
        continue
    }
    console.log(`value of i is ${index}`);
    
}