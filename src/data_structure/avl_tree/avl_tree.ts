import { AVLTreeNode } from './avl_tree_node'

export class AVLTree {
  _root:AVLTreeNode
  constructor (value:number|null = null) {
    this._root = new AVLTreeNode(value)
  }

  find (value:number) {
    return this._root.find(value)
  }

  insert (value:number) {
    this._root.insert(value)
    let currentNode = this._root.find(value)
    while (currentNode) {
      if (this.balance(currentNode)) break
      currentNode = currentNode._parent
    }
  }

  delete (value:number) {
    this._root.delete(value)
    this.balance(this._root)
  }

  balance (node:AVLTreeNode) {
    if (node.leftHeight - node.rightHeight > 1) {
      const children = node._left as AVLTreeNode
      if (children.leftHeight > children.rightHeight) {
        this.rightRotate(node)
      } else {
        this.leftRightRotate(node)
      }
      return true
    } else if (node.leftHeight - node.rightHeight < -1) {
      const children = node._right as AVLTreeNode
      if (children.leftHeight > children.rightHeight) {
        this.rightLeftRotate(node)
      } else {
        this.leftRotate(node)
      }
      return true
    } else {
      return false
    }
  }

  rightRotate (node:AVLTreeNode) {
    const parent = node._parent
    const children = node._left as AVLTreeNode
    node._parent = children
    if (children._right) {
      node._left = children._right
      children._right._parent = node
    } else {
      node._left = null
    }
    children._right = node
    if (parent) {
      children._parent = parent
      parent._left = children
    } else {
      children._parent = null
      this._root = children
    }
  }

  leftRotate (node:AVLTreeNode) {
    const parent = node._parent
    const children = node._right as AVLTreeNode
    node._parent = children
    if (children._left) {
      node._right = children._left
      children._left._parent = node
    } else {
      node._right = null
    }
    children._left = node
    if (parent) {
      children._parent = parent
      parent._right = children
    } else {
      children._parent = null
      this._root = children
    }
  }

  leftRightRotate (node:AVLTreeNode) {
    const children = node._left as AVLTreeNode
    const grandChildren = children._right as AVLTreeNode
    children._parent = grandChildren
    children._right = null
    grandChildren._left = children
    grandChildren._parent = node
    node._left = grandChildren
    this.rightRotate(node)
  }

  rightLeftRotate (node:AVLTreeNode) {
    const children = node._right as AVLTreeNode
    const grandChildren = children._left as AVLTreeNode
    children._parent = grandChildren
    children._left = null
    grandChildren._right = children
    grandChildren._parent = node
    node._right = grandChildren
    this.leftRotate(node)
  }
}
