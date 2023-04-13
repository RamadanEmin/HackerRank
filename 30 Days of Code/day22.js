//DAY 22: BINARY SEARCH TREES

//The height of a binary search tree is the number of edges between the tree's root and its 
//furthest leaf. You are given a pointer, root, pointing to the root of a binary search tree. 
//Complete the getHeight function provided in your editor so that it returns the height of the binary search tree.

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};
function BinarySearchTree() {
    this.insert = function (root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }

        return this.root;
    };

    this.getHeight = function (root) {

        if (!root) {
            return -1;
        } else {
            let l = this.getHeight(root.left);
            let r = this.getHeight(root.right);
            return (l > r ? l : r) + 1;
        }

    };
}; 