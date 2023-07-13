/* eslint-disable no-use-before-define */
export class AVLTreeNode {
  _value:number|null
  _parent:AVLTreeNode|null
  _left:AVLTreeNode|null
  _right: AVLTreeNode|null
  constructor (
    value:number|null = null,
    parent:AVLTreeNode|null = null,
    left:AVLTreeNode|null = null,
    right:AVLTreeNode|null = null
  ) {
    this._parent = parent
    this._value = value
    this._right = right
    this._left = left
  }

  get leftHeight ():number {
    if (!this._left) return 0
    return this._left.height + 1
  }

  get rightHeight ():number {
    if (!this._right) return 0
    return this._right.height + 1
  }

  get height () {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  find (value:number):AVLTreeNode|null {
    if (this._value === null) return null
    if (this._value === value) return this
    if (this._left && this._value > value) {
      return this._left.find(value)
    }
    if (this._right && this._value < value) {
      return this._right.find(value)
    }
    return null
  }

  findMin ():AVLTreeNode {
    if (this._left === null) return this
    return this._left.findMin()
  }

  findMax ():AVLTreeNode {
    if (this._right === null) return this
    return this._right.findMax()
  }

  insert (value:number):AVLTreeNode|null {
    if (this._value === null) {
      this._value = value
      return this
    }

    if (this._value > value) {
      if (this._left === null) {
        this._left = new AVLTreeNode(value)
        this._left._parent = this
        return this._left
      }

      return this._left.insert(value)
    }

    if (this._value < value) {
      if (this._right === null) {
        this._right = new AVLTreeNode(value)
        this._right._parent = this
        return this._right
      }

      return this._right.insert(value)
    }

    return null
  }

  delete (value:number):AVLTreeNode|null {
    const node = this.find(value)
    if (node === null) return null
    const parent = node._parent
    // root
    if (parent === null) {
      throw new Error('root')
    }
    if (node._left && node._right) {
      const minNode = node._right.findMin()
      node._value = minNode._value
      if (minNode._right) {
        (minNode._parent as AVLTreeNode)._left = minNode._right
        minNode._right._parent = (minNode._parent as AVLTreeNode)
      }
      node._parent = null
      return node
    }
    if (!node._left && !node._right) {
      if (parent._left?._value === value) parent._left = null
      if (parent._right?._value === value) parent._right = null
      node._parent = null
      return node
    }
    const children = (node._left || node._right) as AVLTreeNode
    if (parent._left === node) parent._left = children
    if (parent._right === node) parent._right = children
    node._parent = null
    return node
  }
}
