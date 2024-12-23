class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtEnd(val){
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
            newNode.prev = curr;
        }
        this.size++;
    }

    traverse(){
        let curr = this.head;
        let element = [];
        while(curr){
            element.push(curr.value);
            curr = curr.next;
        }
        console.log(element.join(' <-> '));
    }
    reverse(){
        let curr = this.head;
        let element = [];
        while(curr && curr.next){
            curr = curr.next;
        }
        while(curr){
            element.push(curr.value);
            curr = curr.prev;
        }
        console.log(element.join(' <-> '));
    }

    getSize(){
        console.log(this.size);  
    }

    deleteAtPosition(position){
        if(!this.head) return;
        if(position < 1 || position > this.size){
            console.log("Invalid position");
            return;
        }
        if(position === 1){
            this.head = this.head.next;
            if(this.head) this.head.prev = null;
            this.size--;
            return;
        }
        else{
            let idx = 0;
            let curr = this.head;
            while(idx <position-1){
                curr = curr.next;
                idx++;
            }
            curr.next = curr.next.next;
            if(curr.next) curr.next.prev = curr;
        }
        this.size--;
        
    }


}

const list = new DoublyLinkedList()
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtEnd(4);
list.insertAtEnd(5);

list.traverse();
list.reverse();
list.deleteAtPosition(4);
list.traverse()