import {
  BinarySearchTree
} from '../../src/data_structure/binary_search_tree/binary_search_tree'

describe('Test BinarySearchTree class', () => {
  test('Return the new instance', () => {
    const instance = new BinarySearchTree(6)
    expect(instance).toBeInstanceOf(BinarySearchTree)
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

  test('Return the node has maximum', () => {
    const root = new BinarySearchTree(6)
    root.insert(2)
    root.insert(1)
    root.insert(4)
    root.insert(3)
    root.insert(8)
    root.insert(5)
    expect(root.findMax()._value).toBe(8)
  })

  test('Return the node has minimum', () => {
    const root = new BinarySearchTree(6)
    root.insert(2)
    root.insert(1)
    root.insert(4)
    root.insert(3)
    root.insert(8)
    root.insert(5)
    expect(root.findMin()._value).toBe(1)
  })

  test('Test the insert() function', () => {
    const root = new BinarySearchTree()
    root.insert(6)
    root.insert(2)
    root.insert(1)
    root.insert(4)
    root.insert(3)
    root.insert(8)
    root.insert(5)
    root.insert(5)
    expect(root._root._left?._left?._value).toBe(1)
  })

  test('Test the delete() function', () => {
    const root = new BinarySearchTree(6)
    root.insert(2)
    root.insert(8)
    root.insert(1)
    root.insert(5)
    root.insert(3)
    root.insert(4)
    expect(root._root._left?._right?._left?._right?._value).toBe(4)
    root.delete(2)
    expect(root._root._left?._value).toBe(3)
    root.delete(8)
    expect(root._root._right).toBeNull()
    expect(() => root.delete(6)).toThrow()
  })

  test('Test the delete() function', () => {
    const root = new BinarySearchTree(6)
    root.insert(2)
    root.insert(8)
    root.insert(1)
    root.insert(5)
    root.insert(3)
    root.insert(4)
    root.delete(3)
    expect(root._root._left?._right?._left?._value).toBe(4)
  })
})
