class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(val){
        let newNode = new Node(val);
        if(!this.head) this.head = newNode;
        else {
            let current = this.head;
            while(current.next) current = current.next;
            current.next = newNode;
        }
        this.size++;
    }

    hasCycle(){
        let slow = this.head; 
        let fast = this.head;

        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) return true;
        }
        return false;
    }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);

list.head.next.next.next.next = list.head; 

console.log(list.hasCycle());