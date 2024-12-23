class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data){
        let newNode = new Node(data);
        if(!this.head) this.head = newNode;
        else{
            let current = this.head;
            while(current.next) current = current.next;
            current.next = newNode;
        }
        this.size++;
    }

    search(element){
        let curr = this.head;
        while(curr){
            if(curr.data === element) return true;
            curr = curr.next;
        }
        return false;
    }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log(list.search(6));
