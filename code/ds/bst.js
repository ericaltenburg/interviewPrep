class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor () {
        this.root = null;
    }

    //function to be implemented
    // insert (data);
    // remove (data);

    // Helper functions
    // findMindNode();
    // getRoot();
    // inorder(node);
    // preorder(node);
    // postorder(node);
    //search(node, data);

    insertHelper (node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertHelper(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertHelper(node.right, newNode);
            }
        }
    }

    insert (data) {
        let newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
            return this.root;
        } else {
            this.insertHelper(this.root, newNode);
        }
    }

    findMinNode (current) {
        let minimumNode = current.left;

        while (current.left) {
            minimumNode = current.left.data;
            current = current.left;
        }

        return minimumNode;
    }

    removeNode(current, data) {
        // Tree is empty
        if (!current) {
            return null;
        }

        // data to be deleted is in left subtree
        if (data < current.data) {
            current.left = this.removeNode(current.left, data);
            return current;
        } else if (data > current.data) { // data is in right subtree
            current.right = this.removeNode(current.right, data);
            return current;
        } else { // we have found the node to be deleted
            
            // node is a leaf
            if (!current.left && !current.right) {
                current = null;
                return current;
            }

            // node only has a right child
            if (!current.left) {
                current = current.right;
                return current;
            } else if (!current.right) { // node only has a left child
                current = current.left;
                return current;
            }

            // The node has two children, minimum node of right subtree is stored in aux
            let minNode = this.findMinNode(current.right);
            current.data = minNode.data;

            current.right = this.removeNode(current.right, minNode.data);
            return current;
        }
    }

    remove (data) {
        this.root = this.removeNode(this.root, data);
    }

    preorder (node) {
        if (node) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    inorder (node) {
        if (node) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    postorder (node) {
        if (node) {
            this.inorder(node.left);
            this.inorder(node.right);
            console.log(node.data);
        }
    }

    search (current, data) {
        if (!current) {
            return null;
        }

        if (data < current.data) {
            return this.search(current.left, data);
        } else if (data > current.data) {
            return this.search(current.right, data);
        } else {
            return current;
        }
    }
}

let tree = new BST();

tree.insert(15);
tree.insert(25);
tree.insert(10);
tree.insert(7);
tree.insert(22);
tree.insert(17);
tree.insert(13);
tree.insert(5);
tree.insert(9);
tree.insert(27);

console.log(JSON.stringify(tree, null, 4));

// tree.preorder(tree.root);
tree.inorder(tree.root);
// tree.postorder(tree.root);
console.log(JSON.stringify(tree.search(tree.root, 7), null, 4));




function getAllNodes(node) {

    function inOrder(node) {
        if (node) {
            inOrder(node.left);
            result.push(node.toString()); // push instead of output.
            inOrder(node.right);
        }
    }

    var result = [];
    inOrder(node);
    return result;
}