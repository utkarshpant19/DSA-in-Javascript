class Node{

    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{

    constructor(){

    }

    preOrderTraversal(root){

        if(root == null){
            return [];
        }

        const list = []; // answer list

        // Create a stack and add root node
        const stack = [];
        stack.push(root);

        while(stack.length > 0){

            const top = stack.pop();
            list.push(top.data);

            if(top.right != null){
                stack.push(top.right);
            }

            if(top.left != null){
                stack.push(top.left);
            }
        }

        return list;
    }

    inOrderTraversal(root){
        
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.left.right.left = new Node(5);
root.left.right.right = new Node(6);

const bt = new BinaryTree();
const preOrderList = bt.preOrderTraversal(root);
console.log(preOrderList);
