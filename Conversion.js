const obj = {
    valueOf(){
        return 40;
    },
    toString(){
        return 'This is a custom object';
    }
}

// console.log(obj + 2); 
// console.log(String(obj));

console.log(obj.valueOf);


