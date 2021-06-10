class Node {
    constructor (data) {
        this.data = data;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor () {
        this.root = null;
    }

    height (current) {
        if (!current) {
            return 0;
        }

        return current.height;
    }

    rotateRight (y) {
        let x = y.left;
        let T2 = x.right;
        x.right = y;
        y.left = T2;
        y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        return x;
    }

    rotateLeft (x) {
        let y = x.right;
        let T2 = y.left;
        y.left = x;
        x.right = T2;
        x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    }

    getBalanceFactor (current) {
        if (!current) {
            return 0;
        }

        return this.height(current.left) - this.height(current.right);
    }

    insertNodeHelper (current, data) {
        if (!current) {
            return new Node(data);
        }

        if (data < current.data) {
            current.left = this.insertNodeHelper(current.left, data);
        } else if (data > current.data) {
            current.right = this.insertNodeHelper(current.right, data);
        } else {
            return current;
        }

        current.height = 1 + Math.max(this.height(current.left), this.height(current.right))

        let balanceFactor = this.getBalanceFactor(current);

        if (balanceFactor > 1) {
            if (data < current.left.data) {
                return this.rotateRight(current);
            } else if (data > current.left.data) {
                current.left = this.rotateLeft(current.left);
                return this.rotateRight(current);
            }
        }
        
        if (balanceFactor < -1) {
            if (data > current.right.data) {
                return this.rotateLeft(current);
            } else if (item < current.right.data) {
                current.right = this.rotateRight(current.right);
                return this.rotateLeft(current);
            }
        }

        return current;
    }

    insertNode (data) {
        this.root = this.insertNodeHelper(this.root, data);
    }

    minNode (node) {
        let current = node;
        while (current.left) {
            current = current.left;
        }

        return current;
    }

    deleteNodeHelper (root, data) {
        if (!root) {
            return root;
        }

        if (data < root.data) {
            root.left = this.deleteNodeHelper(root.left, data);
        } else if (data > root.data) {
            root.right = this.deleteNodeHelper(root.right, data);
        } else {
            if (!root.left || !root.right) {
                let temp = null;
                temp = temp == root.left ? root.right : root.left;

                if (!temp) {
                    temp = root;
                    root = null;
                } else {
                    root = temp;
                } 
            } else {
                let temp = this.minNode(root.right);
                root.data = temp.data;
                root.right = this.deleteNodeHelper(root.right, temp.data);
            }
        }

        if (!root) {
            return root;
        }

        root.height = Math.max(this.height(root.left), this.height(root.right)) +1;

        let balanceFactor = this.getBalanceFactor(root);

        if (balanceFactor > 1) {
            if (this.getBalanceFactor(root.left) >= 0) {
                return this.rotateRight(root);
            } else {
                root.left = this.rotateLeft(root.left);
                return this.rotateRight(root);
            }
        }

        if (balanceFactor < -1) {
            if (this.getBalanceFactor(root.left) <= 0) {
                return this.rotateLeft(root);
            } else {
                root.right = this.rotateRight(root.right);
                return this.rotateLeft(root);
            }
        }

        return root;
    }

    preOrder (root) {
        if (root) {
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    delete (data) {
        this.root = this.deleteNodeHelper(this.root, data);
    }
}

let tree = new AVLTree();

tree.insertNode(33);
tree.insertNode(13);
tree.insertNode(53);
tree.insertNode(9);
tree.insertNode(21);
tree.insertNode(61);
tree.insertNode(8);
tree.insertNode(11);

tree.preOrder(tree.root);

console.log("After deletion")

tree.delete(13);

tree.preOrder(tree.root);