// remove brackets for given string

class Stack{
    constructor(){
        this.items = []
    }

    push(item){
        this.items.push(item)
    }
    pop(){
        if(this.isEmpty()){
            throw new Error("Stack is empty")
        }
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    print(){
        return this.items.join(" ")
    }
}

let stack = new Stack();

let str = "(a+b)/(c+d)/(e+f)"
console.log(stack.print());


for(let i = 0;i<str.length;i++){
    if(str.charAt(i) === '(' || str.charAt(i) === ')' || str.charAt(i) === '{' || str.charAt(i) === '}' || str.charAt(i) === '[' || str.charAt(i) === ']'){
        continue;
    }
    else{
        stack.push(str.charAt(i));
    }
}

console.log(stack.print());
