class User {
    constructor(email, password){
        this.email = email
        this.password = password

    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}
const user1 = new User("kk@gmail.com","abc")
console.log(user1.password);