

class TreeNode{

    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class BinaryTree{

    constructor(){

    }

    bfsTraversal(root){

        if(root == null){
            return;
        }

        const queue = [], ans = [];

        queue.push(root);

        while(queue.length > 0){

            const size = queue.length, list = [];

            for(let i=0; i<size; i++){
                const node = queue.shift();
                if(node.left){
                    queue.push(node.left);
                }
                if(node.right){
                    queue.push(node.right);
                }

                list.push(node.data);
            }
            ans.push(list);
            
        }
        return ans;

    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const bt = new BinaryTree();
console.log(bt.bfsTraversal(root));