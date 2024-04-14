const user ={ //object literal is simply an object
    username: "khadija",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details")
        // console.log(`Username : ${this.username}`)
        console.log(this)

    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)


//constructor function
// steps -- new creates empty object ,call constructor function,inject arguments through may be this, working
// const promiseOne = new Promise() //that new thing :creates new context

function User(username, loginCount, isLoggedIn ){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this //optional
}
const user1 = new User("khadija",12,true)
// console.log(user1)
const user2 = new User("Jiya",11,false)
// console.log(user2)
console.log(user2.constructor) // apna hi reference

