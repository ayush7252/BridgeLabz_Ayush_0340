class User{
    constructor(name){
        this.name = name;
    }
    logMe(){
        console.log(`USERNAME is ${this.name}`); 
    }
}

class Teacher extends User{
    constructor(name, email, password){
        super(name);
        this.email = email;
        this.password = password; 
    }

    addCourses(){
        console.log(`A new course is added by ${this.name}`);
        
    }
}   

let chai = new Teacher("chai", "chai@gmail.com", 123);
chai.addCourses();
chai.logMe();

const masalaChai = new User("masalaChai");

// masalaChai.addCourses();
masalaChai.logMe();

console.log(chai instanceof User);