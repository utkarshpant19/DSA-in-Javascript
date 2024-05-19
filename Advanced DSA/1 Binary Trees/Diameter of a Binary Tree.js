class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {}

  height(root, diameter) {

    if(root == null){
        return 0;
    }
    const leftHeight = this.height(root.left, diameter);
    const rightRight = this.height(root.right, diameter);

    diameter[0] = Math.max(diameter[0], leftHeight + rightRight);
    return Math.max(leftHeight, rightRight) +1;

  }

  diameter(root) {
    let longestPathConnectingTwoNodes = [0];
    this.height(root, longestPathConnectingTwoNodes);

    return longestPathConnectingTwoNodes[0];
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const bt = new BinaryTree();
const dia = bt.diameter(root);
console.log(dia);
