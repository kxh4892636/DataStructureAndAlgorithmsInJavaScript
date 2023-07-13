import { AVLTreeNode } from './avl_tree_node'

export class AVLTree {
  _root:AVLTreeNode
  constructor (value:number|null = null) {
    this._root = new AVLTreeNode(value)
  }

  find (value:number):AVLTreeNode |null {
    return this._root.find(value)
  }

  findMin ():AVLTreeNode {
    return this._root.findMin()
  }

  findMax ():AVLTreeNode {
    return this._root.findMax()
  }

  insert (value:number):AVLTreeNode|null {
    const node = this._root.insert(value)
    if (!node) return null
    let currentNode:AVLTreeNode|null = node
    while (currentNode) {
      if (this.balance(currentNode)) break
      currentNode = currentNode._parent
    }
    return node
  }

  delete (value:number) {
    this._root.delete(value)
    this.balance(this._root)
  }

  balance (node:AVLTreeNode) {
    if (node.leftHeight - node.rightHeight > 1) {
      const left = node._left as AVLTreeNode
      if (left.leftHeight > left.rightHeight) {
        this.rotateLeftLeft(node)
      } else {
        this.rotateLeftRight(node)
      }
      return true
    }
    if (node.leftHeight - node.rightHeight < -1) {
      const right = node._right as AVLTreeNode
      if (right.leftHeight > right.rightHeight) {
        this.rotateRightLeft(node)
      } else {
        this.rotateRightRight(node)
      }
      return true
    }
    return false
  }

  rotateLeftLeft (node:AVLTreeNode):void {
    const left = node._left as AVLTreeNode
    const leftRight = left._right
    const parent = node._parent
    if (parent) {
      left._parent = parent
      if ((parent._value as number) < (node._value as number)) {
        parent._right = left
      } else {
        parent._left = left
      }
    } else {
      left._parent = null
      this._root = left
    }
    left._right = node
    node._parent = left
    node._left = null
    if (leftRight) {
      node._left = leftRight
      leftRight._parent = node
    }
  }

  rotateRightRight (node:AVLTreeNode):void {
    const right = node._right as AVLTreeNode
    const rightLeft = right._left
    const parent = node._parent
    if (parent) {
      right._parent = parent
      if ((parent._value as number) < (node._value as number)) {
        parent._right = right
      } else {
        parent._left = right
      }
    } else {
      right._parent = null
      this._root = right
    }
    right._left = node
    node._parent = right
    node._right = null
    if (rightLeft) {
      node._right = rightLeft
      rightLeft._parent = node
    }
  }

  rotateRightLeft (node:AVLTreeNode) {
    const right = node._right as AVLTreeNode
    const rightLeft = right._left as AVLTreeNode
    const parent = node._parent
    const rightLeftLeft = rightLeft._left
    const rightLeftRight = rightLeft._right
    if (parent) {
      rightLeft._parent = parent
      if ((parent._value as number) < (node._value as number)) {
        parent._right = rightLeft
      } else {
        parent._left = rightLeft
      }
    } else {
      rightLeft._parent = null
      this._root = rightLeft
    }
    rightLeft._left = node
    rightLeft._right = right
    node._parent = rightLeft
    node._right = null
    right._parent = rightLeft
    right._left = null

    if (rightLeftLeft) {
      node._right = rightLeftLeft
    }
    if (rightLeftRight) {
      right._left = rightLeftRight
    }
  }

  rotateLeftRight (node:AVLTreeNode) {
    const left = node._left as AVLTreeNode
    const leftRight = left._right as AVLTreeNode
    const leftRightLeft = leftRight._left
    const leftRightRight = leftRight._right
    const parent = node._parent
    if (parent) {
      leftRight._parent = parent
      if ((parent._value as number) < (node._value as number)) {
        parent._right = leftRight
      } else {
        parent._left = leftRight
      }
    } else {
      leftRight._parent = null
      this._root = leftRight
    }
    leftRight._right = node
    leftRight._left = left
    node._parent = leftRight
    node._left = null
    left._parent = leftRight
    left._right = null

    if (leftRightLeft) {
      left._right = leftRightLeft
    }
    if (leftRightRight) {
      node._left = leftRightRight
    }
  }
}
