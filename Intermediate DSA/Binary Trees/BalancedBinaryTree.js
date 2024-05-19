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

    isBalanced(node){

        // Find Left Height

        // Find Right Height

    }

}

const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

const bt = new BinaryTree();
const ans = bt.isBalanced(root);
console.log(ans);