

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() { }


    maxPathSum(root) {

        let maxSum = -1000;

        function getMaxSum(root) {

            if (root == null) {
                return 0;
            }
            const leftSum = getMaxSum(root.left);
            const rightSum = getMaxSum(root.right);


            maxSum = Math.max(maxSum, leftSum + rightSum + root.val);
            return leftSum + rightSum + root.val;

        }
        getMaxSum(root);
        return maxSum;
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

var maxPathSum = function (root) {


};