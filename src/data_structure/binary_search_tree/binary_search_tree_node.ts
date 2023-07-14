/* eslint-disable no-use-before-define */
export class BinarySearchTreeNode {
  _value:number|null
  _parent:BinarySearchTreeNode|null
  _left:BinarySearchTreeNode|null
  _right: BinarySearchTreeNode|null
  constructor (
    value:number|null = null,
    parent:BinarySearchTreeNode|null = null,
    left:BinarySearchTreeNode|null = null,
    right:BinarySearchTreeNode|null = null
  ) {
    this._parent = parent
    this._value = value
    this._right = right
    this._left = left
  }

  find (value:number):BinarySearchTreeNode|null {
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

  findMin ():BinarySearchTreeNode {
    if (this._left === null) return this
    return this._left.findMin()
  }

  insert (value:number):boolean {
    if (this._value === null) {
      this._value = value
      return true
    }

    if (this._value > value) {
      if (this._left === null) {
        this._left = new BinarySearchTreeNode(value)
        this._left._parent = this
        return true
      }
      this._left.insert(value)
      return true
    }

    if (this._value < value) {
      if (this._right === null) {
        this._right = new BinarySearchTreeNode(value)
        this._right._parent = this
        return true
      }
      this._right.insert(value)
      return true
    }

    return false
  }

  delete (value:number):boolean {
    const node = this.find(value)
    if (node === null) return false
    // 2
    if (node._left && node._right) {
      const minNode = node._right.findMin()
      node._value = minNode._value
      if (minNode._right) {
        (minNode._parent as BinarySearchTreeNode)._left = minNode._right
        minNode._right._parent = (minNode._parent as BinarySearchTreeNode)
        minNode._right = null
      }
      minNode._parent = null
      return true
    }
    // 0
    if (!node._left && !node._right) {
      if (node._parent) {
        if (node._parent._left?._value === value) node._parent._left = null
        if (node._parent._right?._value === value) node._parent._right = null
      }
      node._parent = null
      return true
    }
    // 1
    if (node._left) {
      node._value = node._left._value
      node._left._parent = null
      node._left = null
    }
    if (node._right) {
      node._value = node._right._value
      node._right._parent = null
      node._right = null
    }
    return true
  }
}
