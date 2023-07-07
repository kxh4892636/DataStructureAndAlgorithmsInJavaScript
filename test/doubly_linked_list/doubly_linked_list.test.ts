import {
  DoublyLinkedList
} from '../../src/data_structure/doubly_linked_list/doubly_linked_list'
import {
  DoublyLinkedListNode
} from '../../src/data_structure/doubly_linked_list/doubly_linked_list_node'

describe('Test DoublyLinkedList Class', () => {
  test('Test isEmpty() function', () => {
    const list = new DoublyLinkedList<string>()
    expect(list.isEmpty()).toBeTruthy()
  })

  test('Test isLast() function', () => {
    const list = new DoublyLinkedList<string>()
    const insertNode = new DoublyLinkedListNode<string>('test')
    const node1 = list.insert(insertNode, list.head)
    expect(list.isLast(node1)).toBeTruthy()
  })

  test('Test find() function', () => {
    const list = new DoublyLinkedList<string>()
    const insertNode = new DoublyLinkedListNode<string>('test')
    list.insert(insertNode, list.head)
    expect(list.find(insertNode.value)).toBeTruthy()
  })

  test('Test findPrevious() function', () => {
    const list = new DoublyLinkedList<string>()
    const insertNode = new DoublyLinkedListNode<string>('test')
    list.insert(insertNode, list.head)
    expect(list.findPrevious(insertNode.value)).toEqual(list.head)
  })

  test('Test delete() function', () => {
    const list = new DoublyLinkedList<string>()
    const insertNode = new DoublyLinkedListNode<string>('test')
    list.insert(insertNode, list.head)
    expect(() => {
      list.delete(insertNode)
      return list.head.next === null
    }).toBeTruthy()
  })

  test('Test insert() function', () => {
    const list = new DoublyLinkedList<string>()
    const insertNode1 = new DoublyLinkedListNode<string>('test')
    const insertNode2 = new DoublyLinkedListNode<string>('good')
    const node1 = list.insert(insertNode1, list.head)
    const node2 = list.insert(insertNode2, list.head)
    expect(list.head.next).toBe(node2)
    expect(node2.next).toBe(node1)
  })
})
