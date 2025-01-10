const User = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '12345'
    }
}

// console.log(Object.getOwnPropertyDescriptors(User));
// console.log(Object.getOwnPropertyDescriptor(User, 'name'));
// Object.defineProperty(User, 'age', {writable: false});
Object.defineProperty(User, 'age', {configurable: false});
delete User.age;
console.log(Object.getOwnPropertyDescriptors(User));

