class Stack{
    constructor(){
        this.items = []
    }
    
    insert(item){
        this.items.push(item)
    }
    remove(){
        if(this.isEmpty()){
            throw new Error("Stack is empty")
        }
        else{
            return this.items.pop();
        }
    }
    top(){
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

let stack = new Stack()

stack.insert(1)
stack.insert(3)
stack.insert(5)
stack.insert(7)
console.log(stack.print());
console.log(stack.top());
console.log(stack.isEmpty());
stack.remove()
console.log(stack.print());
