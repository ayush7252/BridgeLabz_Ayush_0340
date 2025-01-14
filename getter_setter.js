class Person{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
}

const person1 = new Person("Ayush");
console.log(person1.name);
