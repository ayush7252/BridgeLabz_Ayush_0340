class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let curr = this.root;
        while (true) {
            if (data < curr.data) {
                if (!curr.left) {
                    curr.left = newNode;
                    return this;
                } else {
                    curr = curr.left;
                }
            } else if (data > curr.data) {
                if (!curr.right) {
                    curr.right = newNode;
                    return this;
                } else {
                    curr = curr.right;
                }
            } else {
                console.log("Duplicate value not allowed");
                return this;
            }
        }
    }
    
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
    postOrder(node){
        if(node !== null){
            postOrder(node.left);
            postOrder(node.right);
            console.log(node.data);
        }
    }
    preOrder(node){
        if(node !== null){
            console.log(node.data);
            preOrder(node.left);
            preOrder(node.right);
        }
    }
    findMin(){
        let current = this.root;
        while (current.left!== null) {
            current = current.left;
        }
        return current.data;
    }
    findMax(){
        let current = this.root;
        while (current.right!== null) {
            current = current.right;
        }
        return current.data;
    }
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(11);
bst.insert(15);
bst.insert(3);
bst.insert(7);

bst.inOrder(bst.root);
console.log(bst.findMax());

console.log(bst.findMin());

