class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    removeElements(val) {
        while (this.head !== null && this.head.data === val) {
            this.head = this.head.next;
        }
        let current = this.head;
        while (current !== null && current.next !== null) {
            if (current.next.data === val) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(6);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
console.log("Original list:");
list.printList(); 
list.removeElements(6);
console.log("List after removing elements with value 6:");
list.printList();
