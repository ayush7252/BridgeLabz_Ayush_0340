class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function detectAndRemoveLoop(head) {
    if (!head || !head.next) {
        return null; 
    }

    let slow = head;  
    let fast = head; 

    while (fast !== null && fast.next !== null) {
        slow = slow.next;           
        fast = fast.next.next;      
        if (slow === fast) {
            break;
        }
    }

    if (slow !== fast) {
        return head;  
    }

    slow = head;  
    while (slow !== fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = null; 

    return head;
}

function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.value + " ");
        current = current.next;
    }
    console.log();
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

head.next.next.next.next.next = head.next.next;

head = detectAndRemoveLoop(head);

printList(head); 
