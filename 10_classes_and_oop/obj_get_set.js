const User = {
    _email: 'k@gmail.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const obj = Object.create(User)
console.log(obj.email);