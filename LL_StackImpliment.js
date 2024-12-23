class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }

    remove(){
        if(!this.head){
            return;
        }
        if(this.head.next === null){
            this.head = null;
        }
        else{
            let curr = this.head;
            while(curr.next.next){
                curr = curr.next;
            }
            curr.next = null;
        }
        this.size--;
    }
    peek(){
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        return curr.value;
    }
    printList(){
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

// let list = new LinkedList();

// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.remove();
// list.printList();

class Stack{
    constructor(){
        this.list = new LinkedList();
    }

    push(val){
        this.list.append(val);
        
    }
    pop(){
        let ans = this.list.peek();
        this.list.remove();
        return ans;
    }
    peek(){
        return this.list.peek();
    }
    isEmpty(){
        return this.list.size === 0;
    }
    print(){
        this.list.printList();
    }

}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.isEmpty());
stack.print();
console.log(stack.pop());
console.log(stack.peek());
stack.print();



