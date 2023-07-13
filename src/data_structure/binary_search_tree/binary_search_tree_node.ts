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

  findMax ():BinarySearchTreeNode {
    if (this._right === null) return this
    return this._right.findMax()
  }

  insert (value:number):BinarySearchTreeNode|null {
    if (this._value === null) {
      this._value = value
      return this
    }

    if (this._value > value) {
      if (this._left === null) {
        this._left = new BinarySearchTreeNode(value)
        this._left._parent = this
        return this._left
      }
      this._left.insert(value)
      return this._left
    }

    if (this._value < value) {
      if (this._right === null) {
        this._right = new BinarySearchTreeNode(value)
        this._right._parent = this
        return this._right
      }
      this._right.insert(value)
      return this._right
    }

    return null
  }

  delete (value:number):BinarySearchTreeNode|null {
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
        (minNode._parent as BinarySearchTreeNode)._left = minNode._right
        minNode._right._parent = (minNode._parent as BinarySearchTreeNode)
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
    const children = (node._left || node._right) as BinarySearchTreeNode
    if (parent._left === node) parent._left = children
    if (parent._right === node) parent._right = children
    node._parent = null
    return node
  }
}
