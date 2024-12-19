 class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
 }

 class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }


    insertAtBeg(val){
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    insertAtEnd(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
            this.size++;
        }
    }

    insertAtPosition(val , position){
        if(position === 0){
            return this.insertAtBeg(val);
        }
        if(position === this.size){
            return this.insertAtEnd(val);
        }
        else{
            const newNode = new Node(val);
            let current = this.head;
            let idx = 0;
            while(idx < position - 1){
                current = current.next;
                idx++;
            }
            newNode.next = current.next;
            current.next = newNode;
            this.size++;
        }
    }
    traverse() {
        let curr = this.head;
        let element = [];
        while(curr){
            element.push(curr.value);
            curr = curr.next;
        }
        console.log(element.join('->')); 
    }

    deletebyPosition(position){
        if(position === 0){
            this.head = this.head.next;
            this.size--;
            return this;
        }
        if(position >= this.size){
            return this;
        }
        else{
            let current = this.head;
            let idx = 0;
            while(idx < position - 1){
                current = current.next;
                idx++;
            }
            current.next = current.next.next;
            this.size--;
        }
    }
    deleteByValue(data) {
        if (!this.head) {
          return "List is empty";
        }
    
        if (this.head.data === data) {
          this.head = this.head.next; // If the node to delete is the head, move the head to the next node
          this.size--;
          return;
        }
    }
   
 }

 let list = new LinkedList()

 list.insertAtBeg(1)
 list.insertAtEnd(2)
 list.insertAtEnd(3)
 list.insertAtEnd(4)
 list.insertAtEnd(5)
 list.insertAtPosition(6,5)
 list.traverse()
 