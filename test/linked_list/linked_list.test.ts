import {
  LinkedList
} from '../../src/data_structure/linked_list/linked_list'
import {
  LinkedListNode
} from '../../src/data_structure/linked_list/linked_list_node'

describe('Test LinkedList Class', () => {
  test('Test isEmpty() function', () => {
    const list = new LinkedList<string>()
    expect(list.isEmpty()).toBeTruthy()
  })

  test('Test isLast() function', () => {
    const list = new LinkedList<string>()
    const insertNode = new LinkedListNode<string>('test')
    const node1 = list.insert(insertNode, list.head)
    expect(list.isLast(node1)).toBeTruthy()
  })

  test('Test find() function', () => {
    const list = new LinkedList<string>()
    const insertNode = new LinkedListNode<string>('test')
    const node1 = list.insert(insertNode, list.head)
    expect(list.find('test')).toEqual(node1)
  })

  test('Test findPrevious() function', () => {
    const list = new LinkedList<string>()
    const insertNode = new LinkedListNode<string>('test')
    list.insert(insertNode, list.head)
    expect(list.findPrevious('test')).toEqual(list.head)
  })

  test('Test delete() function', () => {
    const list = new LinkedList<string>()
    const insertNode = new LinkedListNode<string>('test')
    list.insert(insertNode, list.head)
    expect(() => {
      list.delete(insertNode)
      return list.head.next === null
    }).toBeTruthy()
  })

  test('Test insert() function', () => {
    const list = new LinkedList<string>()
    const insertNode1 = new LinkedListNode<string>('test')
    const insertNode2 = new LinkedListNode<string>('good')
    const node1 = list.insert(insertNode1, list.head)
    const node2 = list.insert(insertNode2, list.head)
    expect(list.head.next).toBe(node2)
    expect(node2.next).toBe(node1)
  })
})
