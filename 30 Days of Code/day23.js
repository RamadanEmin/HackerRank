//DAY 23: BST - Level-Order Traversal

//A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes
//from left to right, top to bottom. You are given a pointer, root, pointing to the root of a binary 
//search tree. Complete the levelOrder function provided in your editor so that it prints the level-order 
//traversal of the binary search tree.

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

    this.levelOrder = function (root) {
        let output = [];
        let queue = [];
        let currentNode = root;
        queue.push(currentNode);
        let currentLevel = 1;
        while (queue.length) {

            currentNode = queue.shift();
            currentLevel--;
            output.push(currentNode);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }

            if (currentLevel = 0) {
                currentLevel = queue.length;
            }
        }

        let ansArr = [];
        output.forEach(node => {
            ansArr.push(node.data)
        })
        console.log(ansArr.join(" "))

    };
}; 