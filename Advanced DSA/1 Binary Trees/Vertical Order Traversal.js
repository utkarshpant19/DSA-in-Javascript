class TreeNode {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Tuple {
    constructor(node, col) {
        this.node = node;
        this.col = col;
    }
}

class BinaryTree {

    constructor() {

    }

    verticalOrderTraversal(root) {

        // Root is at 0th column
        // BFS Traveral

        let queue = [], col = 0, minCol = 0, maxCol = 0, map = new Map(), ans = [];
        queue.push(new Tuple(root, col));

        while (queue.length > 0) {

            const size = queue.length;

            for (let i = 0; i < size; i++) {
                const tuple = queue.shift();
                if (tuple.node.left) {
                    queue.push(new Tuple(tuple.node.left, tuple.col - 1));
                }
                if (tuple.node.right) {
                    queue.push(new Tuple(tuple.node.right, tuple.col + 1));
                }

                // Add to map
                if (map.has(tuple.col)) {
                    const list = map.get(tuple.col);
                    list.push(tuple.node.data);
                    list.sort((a, b) => a - b);
                    map.set(tuple.col, list);
                }
                else {
                    map.set(tuple.col, [tuple.node.data]);
                }
                minCol = Math.min(tuple.col, minCol);
                maxCol = Math.max(tuple.col, maxCol);
            }
        }

       for(let i=minCol; i<=maxCol; i++){
        ans.push(map.get(i));
       }

       return ans;

    }


}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.left.left = new TreeNode(null);
root.left.right = new TreeNode(null);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

const bt = new BinaryTree();
console.log(bt.verticalOrderTraversal(root));