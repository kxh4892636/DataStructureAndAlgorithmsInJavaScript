import { BinarySearchTreeNode } from './binary_search_tree_node'

export class BinarySearchTree {
  _root:BinarySearchTreeNode
  constructor (value:number|null = null) {
    this._root = new BinarySearchTreeNode(value)
  }

  find (value:number):BinarySearchTreeNode |null {
    return this._root.find(value)
  }

  insert (value:number):boolean {
    return this._root.insert(value)
  }

  delete (value:number):boolean {
    return this._root.delete(value)
  }

  levelOrder (root:BinarySearchTreeNode):BinarySearchTreeNode[] {
    const queue = [root]
    const list:BinarySearchTreeNode[] = []
    while (queue.length) {
      const node = queue.shift() as BinarySearchTreeNode
      list.push(node)
      if (node._left) {
        queue.push(node._left)
      }
      if (node._right) {
        queue.push(node._right)
      }
    }
    return list
  }

  preOrder (root:BinarySearchTreeNode):BinarySearchTreeNode[] {
    const list:BinarySearchTreeNode[] = []
    const loop = (node:BinarySearchTreeNode) => {
      list.push(node)
      if (node._left) {
        loop(node._left)
      }
      if (node._right) {
        loop(node._right)
      }
    }
    loop(root)
    return list
  }

  inOrder (root:BinarySearchTreeNode):BinarySearchTreeNode[] {
    const list:BinarySearchTreeNode[] = []
    const loop = (node:BinarySearchTreeNode) => {
      if (node._left) {
        loop(node._left)
      }
      list.push(node)
      if (node._right) {
        loop(node._right)
      }
    }
    loop(root)
    return list
  }

  postOrder (root:BinarySearchTreeNode):BinarySearchTreeNode[] {
    const list:BinarySearchTreeNode[] = []
    const loop = (node:BinarySearchTreeNode) => {
      if (node._left) {
        loop(node._left)
      }
      if (node._right) {
        loop(node._right)
      }
      list.push(node)
    }
    loop(root)
    return list
  }
}
