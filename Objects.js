// creating objects using object literals

const person = {
    name: 'Ayush Kumar Singh', // String
    age: 30,   // number
    address: {     
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },      // object
    hobbies: ['reading', 'painting', 'gaming']    // array
}


// creating objects using new keyword.

const student = new Object();

student.name = 'Ayush Kumar Singh';
student.age = 21;
student.address = {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
};

student.hobbies = ['reading', 'painting', 'gaming'];


// Accessing properties using dot notation

console.log(person.name); // Ayush Kumar Singh
console.log(person.address.city); // New York
console.log(student.age); // 21


// Accessing properties using square bracket notation

// When the property name contains spaces, special characters, or starts with a number we use bracket notation

console.log(person["name"]);  // Ayush Kumar Singh
console.log(student["address"]);  // { street: '123 Main St', city: 'New York', state: 'NY' }

// Modify Objects

person.name = "Shivam Singh"; // update existing property
console.log(person.name);
student.home = "Varanasi";  // Add new property.
console.log(student);
person["age"] = 31; // update existing property
console.log(person["age"]);
student["nick-name"] = "Shivam"; // Add new property.
console.log(person);
console.log(student);

// Delete properties

delete person.age;
console.log(person);
delete student.home;
console.log(student);

// Method in Objects

student.greet = function(){
    console.log("hello i am "+ this.name);
}

console.log(student);
student.greet();

// Object constructor functions

function teacher(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("hello i am " + this.name + " and i am " + this.age + " years old.");
    };
}


let person1 = new teacher("Ayush" , 21);
let person2 = new teacher("Shivam", 22);
person1.greet();
person2.greet();

// Object prototype
// with the help of object prototype we can add methods to the object constructor function which can be used
// by all the objects created by that constructor function.

function Employee(name , age){
    this.name = name;
    this.age = age;
}

Employee.prototype.greet = function(){
    console.log("hello i am " + this.name + " and i am " + this.age + " years old.");
};

let emp1 = new Employee("Ayush" , 21);
let emp2 = new Employee("Shivam", 22);
emp1.greet();
emp2.greet();

// object destructuring

const person3 = {
    name: "Ayush",
    age: 21,
}

const {name, age} = person3;
console.log(name, age);

const {name: personName, age: personAge} = person3;
console.log(personName, personAge);

// object iteration

for(let key in person3){
    console.log(key, person3[key]);
}

Object.keys(person3).forEach(key => {
    console.log(key+ ":" + person3[key]);
});