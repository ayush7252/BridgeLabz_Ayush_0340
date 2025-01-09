// class User{
//     constructor(name, email, password){
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUserName(){
//         return `${this.name.toUpperCase()}`;
//     }
// }

// let chai = new User("chai", "chai@gmail.com", 123);
// console.log(chai.encryptPassword()); 
// console.log(chai.changeUserName()); 


// behind the scene

function User(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUserName = function(){
    return `${this.name.toUpperCase()}`;
}

let tea = new User("tea", "tea@gmail.com", 123);
console.log(tea.encryptPassword());
 console.log(tea.changeUserName());  
 