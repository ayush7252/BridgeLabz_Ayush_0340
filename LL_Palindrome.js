class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(val){
        let newNode = new Node(val);
        if(!this.head) this.head = newNode;
        else{
            let current = this.head;
            while(current.next) current = current.next;
            current.next = newNode;
        }
        this.size++;
    }

    isPalindrome(){
        if(this.head === null || this.head.next === null) return true;

        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null;
        let curr = slow;
        while(curr){
            let nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }

        let firstHalfStart = this.head;
        let secondHalfStart = prev;
        while(secondHalfStart){
            if(firstHalfStart.data !== secondHalfStart.data) return false;
            firstHalfStart = firstHalfStart.next;
            secondHalfStart = secondHalfStart.next;
        }
        return true;
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(2);
list.append(1);
console.log(list.isPalindrome()); 