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
        }
        this.size++;
    }
    traversal(){
        let curr = this.head;
        let element = [];
        while(curr){
            element.push(curr.value)
            curr = curr.next;
        }
        console.log(element.join(' -> '));
        
    }

    reverse(){
        let curr = this.head;
        let element = [];
        while(curr){
            element.push(curr.value);
            curr = curr.next;
        }
        element.reverse();
        console.log(element.join(' ->'));
    }
    getsize(){
        return this.size;
    }

}

// to merge two linked lists

function mergeLinkedList(list1 , list2){
    let curr1 = list1.head;
    while(curr1.next){
        curr1 = curr1.next;
    }
    curr1.next = list2.head;
    list1.size += list2.size;
    list2.size = 0;
    return list1;
    
}


// to sort linked list
function sortList(list){
    if(!list.head || !list.head.next)return;
    let swap;
    do{
        swap = false;
        let curr = list.head;
        while(curr && curr.next){
            if(curr.value > curr.next.value){
                let temp = curr.value;
                curr.value = curr.next.value;
                curr.next.value = temp;
                swap = true;
            }
            curr = curr.next;
        }
    }
    while(swap);
}


// to find duplicate in linked list
function findDuplicate(list){
    let map = new Map();
    let curr = list.head;
    while(curr){
        if(map.has(curr.value)){
            console.log(`Duplicate found ${curr.value}`);
        }else{
            map.set(curr.value , true);
        }
        curr = curr.next;
    }
}


// to remove duplicate in linked list
function RemoveDuplicate(list){
    let mySet = new Set();
    let curr = list.head;
    while(curr){
        if(!mySet.has(curr.value)){
            mySet.add(curr.value);
        }
        curr = curr.next;
    }
    return mySet;
}

function middleElement(list , length){
    let curr = list.head;
    let target = Math.floor(length/2);
    let idx = 0;
    while(idx < target){
        curr = curr.next;
        idx++;
    }
    return curr.value;
}

const list = new LinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtEnd(4);
const list2 = new LinkedList();
list2.insertAtEnd(3);
list2.insertAtEnd(4);
list2.insertAtEnd(5);
list2.insertAtEnd(6);

let length = list.getsize();
let merge = mergeLinkedList(list, list2);
// console.log(merge);

// sortList(list);
// console.log(merge.size);

list.traversal();
console.log(list.getsize());
console.log(middleElement(list, length));

// findDuplicate(list);
// console.log(RemoveDuplicate(list));
// list.reverse();



