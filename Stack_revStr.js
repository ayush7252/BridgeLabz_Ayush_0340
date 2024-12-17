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
        return this.items.pop();
    }
    top(){
        if(this.isEmpty()){
            throw new Error("Stack is empty")
        }
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
let str = "Ayush"
let stack = new Stack()
for(let i=0;i < str.length;i++){
    stack.insert(str[i])
}
let ans  = ""
while(!stack.isEmpty()){
    ans += stack.remove()
}
console.log(ans);
