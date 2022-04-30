const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node {
// 	constructor(data) {
// 	  this.data = data;
// 	  this.left = null;
// 	  this.right = null;
// 	}
//   }

class BinarySearchTree {

	constructor() {
		this.treeRoot = null;
	}

	root() {
		if(!this.treeRoot) {
			return null;
		}
		return this.treeRoot;
  	}

  	add(data) {
		this.treeRoot = addValue(this.treeRoot, data);

		function addValue (node, data) {
			if (!node) {
				return new Node(data);
			}
	
			if (node.data === data) {
				return node;
			}
	
			if (data < node.data) {
				node.left = addValue(node.left, data);
			} else {
				node.right = addValue(node.right, data);
			}
	
			return node;
		}
	}

  	has(data){
		if(!this.treeRoot) {
			return null;
		}

		function hasElement (node, data) {
			if (!node) {
				return false;
			}

			if (node.data === data) {
				return true;
			}

			if (data < node.data) {
				return hasElement(node.left, data);
			} else {
				return hasElement(node.right, data);
			}
		}
		
		return hasElement(this.treeRoot, data);
	};

  	find(data){
		if(!this.treeRoot) {
			return null;
		}
		function findElement (node, data) {
			if (!node) {
				return null;
			}

			if (node.data === data) {
				return node;
			}

			if (data < node.data) {
				return findElement(node.left, data);
			} else {
				return findElement(node.right, data);
			}
		}

		return findElement(this.treeRoot, data)
	}
	
	remove(data) {
		if(!this.treeRoot) {
			return null;
		}

		return deleteNode(this.treeRoot, data);

		function deleteNode(node, data) {
			if(!node) {
				return null;
			}

			if (data < node.data) {
				node.left = deleteNode(node.left, data)
				return node;
			} else if (node.data < data) {
				node.right = deleteNode(node.right, data)
				return node;
			} else {
				if (!node.left && !node.right) {
					return null;
				}
				if (!node.left) {
					node = node.right;
					return node;
				}
				if (!node.right) {
					node = node.left;
					return node;
				}

				let minRightNode = node.right;
				while(minRightNode.left) {
					minRightNode = minRightNode.left;
				}
				node.data = minRightNode.data;
				
				node.right = deleteNode(node.right, minRightNode.data)

				return node;
			}
		}

  	}

	min() {
		if(!this.treeRoot) {
			return null;
		}

		let node = this.treeRoot;

		while (node.left) {
			node = node.left;
		}

		return node.data;
	}

	max() {
		if(!this.treeRoot) {
			return null;
		}

		let node = this.treeRoot;

		while (node.right) {
			node = node.right;
		}

		return node.data;
	}
}

module.exports = {
  BinarySearchTree
};