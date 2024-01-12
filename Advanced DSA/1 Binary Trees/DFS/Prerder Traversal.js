class Node{

    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

 // Creating a Binary Tree

  class BinaryTree{

    constructor(){
        this.root = null;
    }

    addLeft(data){
        const node = new Node(data);
        root.left = node;
    }
  }

  /*

          1
     2          3
  4    5     6      7
      9 10     8

  */

 const root = new Node(1);
 root.left = new Node(2);
 root.right = new Node(3);
 root.left.left = new Node(4);
 root.left.right = new Node(5);

 // Right subtree
 root.right.left = new Node(6);
 root.right.right = new Node(7);

 root.right.left.right = new Node(8);

 root.left.right.left = new Node(9);
 root.left.right.right = new Node(10);
 



 // Traversing a tree
function preOrder(node){ // Root -> Left -> Right

    if(!node){
        return;
    }
    console.log(node.data);
    preOrder(node.left);
    preOrder(node.right);
}

preOrder(root);