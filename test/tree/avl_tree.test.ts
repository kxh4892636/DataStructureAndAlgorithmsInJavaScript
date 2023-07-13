import {
  AVLTree
} from '../../src/data_structure/avl_tree/avl_tree'

describe('Test AVLTree class', () => {
  test('Return the new instance', () => {
    const instance = new AVLTree(6)
    expect(instance).toBeInstanceOf(AVLTree)
  })

  test('Return the node by value or return the null', () => {
    const root = new AVLTree(6)
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
    const root = new AVLTree(6)
    root.insert(2)
    root.insert(1)
    root.insert(4)
    root.insert(3)
    root.insert(8)
    root.insert(5)
    expect(root.findMax()._value).toBe(8)
  })

  test('Return the node has minimum', () => {
    const root = new AVLTree(6)
    root.insert(2)
    root.insert(1)
    root.insert(4)
    root.insert(3)
    root.insert(8)
    root.insert(5)
    expect(root.findMin()._value).toBe(1)
  })

  test('Test the insert()', () => {
    const root = new AVLTree()
    root.insert(9)
    root.insert(2)
    // rotateLeftLeft
    root.insert(1)
    expect(root._root._right?._value).toBe(9)
    // rotateRightRight
    root.insert(10)
    root.insert(11)
    expect(root._root._right?._value).toBe(10)
    // rotateRightLeft
    root.insert(8)
    expect(root._root._value).toBe(9)
    expect(root._root._left?._right?._value).toBe(8)
    // rotateLeftRight
    root.insert(-5)
    root.insert(-4)
    console.log(root._root)
    expect(root._root._left?._left?._value).toBe(-4)
  })

  test('Test the delete()', () => {
    const root = new AVLTree()
    root.insert(9)
    root.insert(2)
    root.insert(1)
    root.insert(10)
    root.insert(11)
    root.insert(8)
    root.insert(-5)
    root.insert(-4)
    root.delete(10)
    expect(root._root._right?._value).toBe(9)
    console.log(root)
  })
})
