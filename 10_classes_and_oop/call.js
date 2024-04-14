function SetUserName(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUserName.call(this, username)//call likhny sai call
    //  ho ga and refernce hold bhi kry ga otherwise sirf 
    //  refer ho ga lekin is sai bhi call ho ga object change
    //   ni hoga, this yahan current global context ko refer kry ga aur
    //    is sai object bhi change hona aur ab phir wo khud call stack 
    //sai chla jae ga apna *saman * is ko dai kr jis main yeh call hoa
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);