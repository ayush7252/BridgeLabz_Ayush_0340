class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
    }

    printList() {
        if (this.head === null) return;

        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }

    remove(data) {
        if (this.head === null) return;

        let current = this.head;
        let prev = null;
        do {
            if (current.data === data) {
                if (prev !== null) {
                    prev.next = current.next;
                } else {
                    let temp = this.head;
                    while (temp.next !== this.head) {
                        temp = temp.next;
                    }
                    this.head = current.next;
                    temp.next = this.head;
                }
                return;
            }
            prev = current;
            current = current.next;
        } while (current !== this.head);
    }
}

const cll = new CircularLinkedList();
cll.append(10);
cll.append(20);
cll.append(30);
cll.printList();
cll.remove(20);
cll.printList();
