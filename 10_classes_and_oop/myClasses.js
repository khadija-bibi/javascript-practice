// ES6 sai aagy classes hain 

class User{
     constructor(username, email, passwword){
        this.username = username
        this.email = email
        this.passwword = passwword
     }

     encryptPassword(){
        return `${this.passwword}abc`
     } 
     changeUserName(){
        return `${this.username.toUpperCase()}`

     }
}

const obj = new User("khadija", "khadija@gmail.com","123")

console.log(obj.encryptPassword());
console.log(obj.changeUserName());

//// behind the scene

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }


// const obj2 = new User("tea", "tea@gmail.com", "123")

// console.log(obj2.encryptPassword());
// console.log(obj2.changeUsername());