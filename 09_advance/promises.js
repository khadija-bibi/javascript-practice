const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, cryptography network
    //Use for async operations
    //its an object

    setTimeout(function () {
        console.log('Async Task is completed');
        resolve()
    },1000)
})

//above was creation
//below is the consumption & is directly related to resolve from the above

promiseOne.then(function(){
    console.log("Promise consumed");
})
// Now doing whole thing in one part without storing in variable
new Promise(function(resolve, reject){  
    setTimeout(function(){
        console.log("Async task2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThird = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({username: "Khadija", email: "khadija123@gmail.com"})
    },1000)
})
promiseThird.then(function(user){//whatever the parameter
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = false// for resolve or reject

        if(!error){
            resolve({username: "Khadija", email: "khadija123@gmail.com"})
        }
        else{
           reject("ERROR: Something went wrong") 
        }
        
    },1000)
})

//chaining is done below and the thing that is 
//returned in first will be used in the sencond"then"
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("The promise is either resolved or rejected"))

// we can use both .then or try and catch
const promiseFive= new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = true

        if(!error){
            resolve({username: "Javascript", password: "123"})
        }
        else{
           reject("ERROR: Js went wrong") 
        }
        
    },1000)   
    }) 

    async function consumePromiseFive(){ //gracefully error handling
        try{
            const response = await promiseFive
            console.log(response);
        } catch(error){
            console.log(error);
        }
       
    }

    consumePromiseFive()

// async function getAllUsers() { 
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //use await because conversion also take sometime
//         console.log(data);
//     } catch(error){
//         console.log("Error:", error);
//     }
    
// }

// getAllUsers()


//fetch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data)=>console.log(data))
.catch((error)=>console.log("Error:", error))