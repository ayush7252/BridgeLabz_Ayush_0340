class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

class BinaryTree{
    constructor(){
        this.root = null;
    }
    
    insert(data){
        const newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        } else {
            // this.insertNode(this.root, newNode);
            let arr = [this.root];
            while(arr.length> 0){
                let curr = arr.shift();
                if(curr.left === null){
                    curr.left = newNode;
                    break;
                }else{
                    arr.push(curr.left);
                }
                if(curr.right === null){
                    curr.right = newNode;
                    break;
                }else{
                    arr.push(curr.right);
                }
            }
        }
    }
}

let tree1 = new BinaryTree();
tree1.insert(1);
tree1.insert(2);
tree1.insert(3);
tree1.insert(4);
tree1.insert(5);
tree1.insert(6);
tree1.insert(7);
tree1.insert(8);
tree1.insert(9);
tree1.insert(10);


function inOrder(node){
    if(node !== null){
        inOrder(node.left);
        console.log(node.data);
        inOrder(node.right);
    }
}

function preOrder(node){
    if(node !== null){
        console.log(node.data);
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node){
    if(node !== null){
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.data);
    }
}

function levelOrder(node){
    if(node !== null){
        let arr = [node];
        while(arr.length> 0){
            let curr = arr.shift();
            console.log(curr.data);
            if(curr.left !== null){
                arr.push(curr.left);
            }
            if(curr.right !== null){
                arr.push(curr.right);
            }
            
        }
    }
}


inOrder(tree1.root);

console.log("---");

preOrder(tree1.root);

console.log("---");

postOrder(tree1.root);

console.log("---");

levelOrder(tree1.root);


