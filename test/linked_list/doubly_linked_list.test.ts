import {
  DoublyLinkedList
} from '../../src/data_structure/linked_list/doubly_linked_list'
import {
  DoublyLinkedListNode
} from '../../src/data_structure/linked_list/doubly_linked_list_node'

describe('Test DoublyLinkedList Class', () => {
  test('Test isEmpty() function', () => {
    const list = new DoublyLinkedList<string>()
    expect(list.isEmpty()).toBeTruthy()
  })

  test('Test isLast() function', () => {
    const list = new DoublyLinkedList<string>()
    const insertNode = new DoublyLinkedListNode<string>('test')
    list.insert(insertNode, list.head)
    expect(list.isLast(insertNode)).toBeTruthy()
  })

  test('Test find() function', () => {
    const list = new DoublyLinkedList<string>()
    expect(list.find('1')).toBeNull()
    const insertNode = new DoublyLinkedListNode<string>('test')
    list.insert(insertNode, list.head)
    expect(list.find('1')).toBeNull()
    expect(list.find(insertNode.value)).toBe(insertNode)
  })

  test('Test delete() function', () => {
    const list = new DoublyLinkedList<string>()
    const insertNode = new DoublyLinkedListNode<string>('test')
    expect(list.delete(insertNode)).toBeFalsy()
    list.insert(insertNode, list.head)
    list.delete(insertNode)
    expect(list.isEmpty()).toBeTruthy()
  })

  test('Test insert() function', () => {
    const list = new DoublyLinkedList<string>()
    const insertNode1 = new DoublyLinkedListNode<string>('test')
    const insertNode2 = new DoublyLinkedListNode<string>('good')
    list.insert(insertNode1, list.head)
    list.insert(insertNode2, list.head)
    expect(list.head.next).toBe(insertNode2)
    expect(insertNode2.next).toBe(insertNode1)
  })
})
