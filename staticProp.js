class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const ayush = new User("ayush");
ayush.logMe();
// console.log(ayush.createId());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iPhone = new Teacher("iPhone","i@phone.com");
iPhone.logMe();
console.log(iPhone.createId());