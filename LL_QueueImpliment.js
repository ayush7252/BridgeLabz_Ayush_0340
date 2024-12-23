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
    removeAtTop(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        this.size--;
    }
    peek(){
        if(!this.head) return;
        return this.head.value
    }
    printList(){
        let curr = this.head;
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

class Queue{
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(val){
        this.list.append(val);
    }
    peek(){
        return this.list.peek();
    }
    dequeue(){
        let ans = this.list.peek();
        this.list.removeAtTop();
        return ans;
    }
    isEmpty(){
        return this.list.size === 0;
    }
    printQueue(){
        this.list.printList();
        return;
    }
    
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.printQueue();
console.log(queue.dequeue());
queue.printQueue();
