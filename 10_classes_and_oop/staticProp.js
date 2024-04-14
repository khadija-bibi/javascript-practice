class User {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`username: ${this.username}`);
    }
    static createId(){ //static will not give access ,extend agr krain tbh bhi access ni ho ga us sai bhi
        return `123`
    }
}
class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logme());

// const user1 = new User("khadija")
// console.log(user1.createId());