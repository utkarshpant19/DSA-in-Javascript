class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor () {}

  // Root is passed in first call
  preOrderTraversal (node) {
    // Root -> Left -> Right
const ans = [];

    if(node == null){
        return ans;
    }
    ans.push(node.data);
    const leftArr = this.preOrderTraversal(node.left)
    ans.push(...leftArr);
    const rightArr = this.preOrderTraversal(node.right)
    ans.push(...rightArr);

    return ans;

  }

  // In OrderTraversal
  inOrderTraversal(node, list){

    // Left -> Root -> Right

    if(node == null){
        return;
    }

    // Left Call
    this.inOrderTraversal(node.left, list);

    // Root
    list.push(node.data);

    // Right Call
    this.inOrderTraversal(node.right, list);
  }

  // Post Order Traversal
  postOrderTraversal(node, list){

    // Left- Right -> Root

    if(node == null){
        return;
    }

    // Left Call

    this.postOrderTraversal(node.left, list);

    // Right Call
    this.postOrderTraversal(node.right, list);

    // Print
    list.push(node.data);
  }
}

// Creating a tree first
const root = new Node (1);
root.left = new Node (2);
root.right = new Node (3);
root.left.left = new Node (4);
root.left.right = new Node (5);
root.left.right.left = new Node (6);
root.right.left = new Node (7);
root.right.right = new Node (8);
root.right.right.left = new Node (9);
root.right.right.right = new Node (10);

const binaryTree = new BinaryTree ();
const list = binaryTree.preOrderTraversal (root);
// binaryTree.inOrderTraversal(root, list);
// binaryTree.postOrderTraversal(root, list);

console.log (list);
