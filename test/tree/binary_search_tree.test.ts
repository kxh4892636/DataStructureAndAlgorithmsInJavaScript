import {
  BinarySearchTree
} from '../../src/data_structure/binary_search_tree/binary_search_tree'

describe('Test BinarySearchTree class', () => {
  test('Return the new instance', () => {
    const instance1 = new BinarySearchTree(6)
    expect(instance1).toBeInstanceOf(BinarySearchTree)
  })

  test('Return the node by value or return the null', () => {
    const root = new BinarySearchTree(6)
    root.insert(2)
    root.insert(1)
    root.insert(4)
    root.insert(3)
    root.insert(8)
    root.insert(5)
    const node = root.find(4)
    expect(node?._value).toBe(4)
    expect(root.find(100)).toBeNull()
  })

  test('Test the insert() function', () => {
    const root = new BinarySearchTree()
    root.insert(6)
    root.insert(2)
    root.insert(1)
    root.insert(5)
    root.insert(5)
    expect(root._root._left?._left?._value).toBe(1)
    expect(root._root._left?._left?._parent?._value).toBe(2)
  })

  test('Test the delete() function', () => {
    const root = new BinarySearchTree()
    expect(root.delete(16)).toBeFalsy()
    root.insert(2)
    root.insert(8)
    root.insert(1)
    root.insert(6)
    root.insert(4)
    root.insert(5)
    root.delete(2)
    expect(root._root?._value).toBe(4)
    expect(root._root._right?._left?._left?._value).toBe(5)
    root.delete(1)
    expect(root._root._left).toBeNull()
    root.delete(6)
    expect(root._root._right?._left?._value).toBe(5)
    root.insert(9)
    root.delete(5)
    root.delete(8)
    expect(root._root._right?._value).toBe(9)
    root.delete(9)
    expect(root._root._right).toBeNull()
  })

  test('Test the levelOrder()', () => {
    const root = new BinarySearchTree(5)
    root.insert(5)
    root.insert(3)
    root.insert(8)
    root.insert(2)
    root.insert(4)
    root.insert(7)
    root.insert(9)
    const order = root.levelOrder(root._root)

    expect(
      order.map((node) => {
        return node._value
      })
    ).toEqual([5, 3, 8, 2, 4, 7, 9])
  })

  test('Test the preOrder()', () => {
    const root = new BinarySearchTree(5)
    root.insert(5)
    root.insert(3)
    root.insert(8)
    root.insert(2)
    root.insert(4)
    root.insert(7)
    root.insert(9)
    const order = root.preOrder(root._root)

    expect(
      order.map((node) => {
        return node._value
      })
    ).toEqual([5, 3, 2, 4, 8, 7, 9])
  })

  test('Test the inOrder()', () => {
    const root = new BinarySearchTree(5)
    root.insert(5)
    root.insert(3)
    root.insert(8)
    root.insert(2)
    root.insert(4)
    root.insert(7)
    root.insert(9)
    const order = root.inOrder(root._root)

    expect(
      order.map((node) => {
        return node._value
      })
    ).toEqual([2, 3, 4, 5, 7, 8, 9])
  })

  test('Test the postOrder()', () => {
    const root = new BinarySearchTree(5)
    root.insert(5)
    root.insert(3)
    root.insert(8)
    root.insert(2)
    root.insert(4)
    root.insert(7)
    root.insert(9)
    const order = root.postOrder(root._root)

    expect(
      order.map((node) => {
        return node._value
      })
    ).toEqual([2, 4, 3, 7, 9, 8, 5])
  })
})
