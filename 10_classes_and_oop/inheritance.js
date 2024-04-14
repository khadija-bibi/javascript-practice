class User {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)//used istead this and call
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new Teacher("khadija", "khadija@gmail.com", "123")

chai.addCourse()

const chai2 = new User("khadija2")
chai2.logme()
console.log(chai instanceof Teacher);// true
console.log(chai instanceof User);// true
console.log(chai2 instanceof Teacher);// false
console.log(chai2 instanceof User);// true


