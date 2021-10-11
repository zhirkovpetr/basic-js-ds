const {Node} = require('../extensions/list-tree.js');


module.exports = class BinarySearchTree {
    constructor() {
        this.tree = null
    }


    root() {
        return this.tree
    }

    add(data) {
        function addNode(node, data) {
            if (!node) {
                return new Node(data)
            }
            if (node.data === data) {
                return node
            }
            if (data < node.data) {
                node.left = addNode(node.left, data)
            } else {
                node.right = addNode(node.right, data)
            }
            return node
        }

        this.tree = addNode(this.tree, data)
    }

    has(data) {
        function searchNode(node, data) {
            if (!node) {
                return false
            }
            if (node.data === data) {
                return true
            }
            return data < node.data ? searchNode(node.left, data) : searchNode(node.right, data)
        }

        return searchNode(this.tree, data)
    }

    find(data) {
        function searchNodeValue(node, data) {
            if (!node) {
                return null
            }
            if (node.data === data) {
                return node
            }
            return data < node.data ? searchNodeValue(node.left, data) : searchNodeValue(node.right, data)
        }

        return searchNodeValue(this.tree, data)
    }

    remove(data) {
        function removeNode(node, data) {
            if (!node) return null
            if (data < node.data) {
                node.left = removeNode(node.left, data)
                return node
            } else if (data > node.data) {
                node.right = removeNode(node.right, data)
                return node
            } else {
                if (!node.left && !node.right) {
                    return null
                }
                if (!node.left) {
                    node = node.right
                    return node
                }
                if (!node.right) {
                    node = node.left
                    return node
                }

                let minRight = minLeft(node.right);
                node = removeNode(node, minRight.data);
                node.data = minRight.data;

                function minLeft(node) {
                    while (node.left) {
                        node = node.left
                    }
                    return node
                }

                return node
            }
        }

        return removeNode(this.tree, data)
    }

    min() {
        if (!this.tree) {
            return;
        }
        let node = this.tree
        while (node.left) {
            node = node.left
        }
        return node.data
    }


    max() {
        if (!this.tree) {
            return
        }
        let node = this.tree
        while (node.right) {
            node = node.right
        }
        return node.data;
    }
}
