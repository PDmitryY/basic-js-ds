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
		this.root = null;
	}

	root() {
		if(!this.root) {
			return null;
		}
		return this.root;
  	}

  	add(data) {
		this.root = addValue(this.root, data);

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
		if(!this.root) {
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
		
		return hasElement(this.root, data);
	};

  	find(data){
		if(!this.root) {
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

		return findElement(this.root, data)
	}
	
	remove(data) {
		if(!this.root) {
			return null;
		}

		return deleteNode(this.root, data);

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
		if(!this.root) {
			return null;
		}

		let node = this.root;

		while (node.left) {
			node = node.left;
		}

		return node.data;
	}

	max() {
		if(!this.root) {
			return null;
		}

		let node = this.root;

		while (node.right) {
			node = node.right;
		}

		return node.data;
	}
}

module.exports = {
  BinarySearchTree
};