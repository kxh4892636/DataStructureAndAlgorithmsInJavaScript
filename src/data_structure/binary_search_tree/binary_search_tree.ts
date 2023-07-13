import { BinarySearchTreeNode } from './binary_search_tree_node'

export class BinarySearchTree {
  _root:BinarySearchTreeNode
  constructor (value:number|null = null) {
    this._root = new BinarySearchTreeNode(value)
  }

  find (value:number):BinarySearchTreeNode |null {
    return this._root.find(value)
  }

  findMin ():BinarySearchTreeNode {
    return this._root.findMin()
  }

  findMax ():BinarySearchTreeNode {
    return this._root.findMax()
  }

  insert (value:number):BinarySearchTreeNode|null {
    return this._root.insert(value)
  }

  delete (value:number):BinarySearchTreeNode|null {
    return this._root.delete(value)
  }
}
