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
    root.insert(8)
    const node = root.find(8)
    expect(node?._value).toBe(8)
    expect(root.find(100)).toBeNull()
  })

  test('Test the insert()', () => {
    const root = new AVLTree()
    root.insert(10)
    // rightRotate
    root.insert(8)
    root.insert(6)
    expect(root._root._value).toBe(8)
    // leftRotate
    root.insert(14)
    root.insert(18)
    expect(root._root._right?._value).toBe(14)
    // rightLeftRotate
    root.insert(9)
    expect(root._root._value).toBe(10)
    // leftRightRotate
    root.insert(-5)
    root.insert(-3)
  })

  test('Test the delete()', () => {
    const root = new AVLTree()
    root.insert(9)
    root.insert(2)
    root.insert(1)
    root.delete(9)
    expect(root._root._right).toBeNull()
  })
})
