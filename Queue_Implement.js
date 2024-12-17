class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(item){
        this.items.push(item);
    }
    dequeue(){
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        return this.items.shift();
    }

    peek(){
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        this.items.length
    }

    print(){
        return this.items.join(" ")
    }
}

let queue = new Queue();

queue.enqueue(1);

queue.enqueue(3);

queue.enqueue(5);
queue.dequeue();

console.log(queue.print()); 