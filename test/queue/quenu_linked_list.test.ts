import {
  DoublyLinkedListNode
} from '../../src/data_structure/linked_list/doubly_linked_list_node'
import {
  QueueWithLinkedList
} from '../../src/data_structure/queue/queue_linked_list'

describe('Test QueueWithLinkedList Class', () => {
  test('Test isEmpty() function', () => {
    const stack = new QueueWithLinkedList()
    expect(stack.isEmpty()).toBeTruthy()
    const insertNode0 = new DoublyLinkedListNode(10)
    stack.enQueue(insertNode0)
    expect(stack.isEmpty()).toBeFalsy()
  })

  test('Test enQueue() function', () => {
    const stack = new QueueWithLinkedList()
    const insertNode0 = new DoublyLinkedListNode(10)
    const insertNode1 = new DoublyLinkedListNode(1)
    stack.enQueue(insertNode0)
    expect(stack.front?.value).toBe(10)
    expect(stack.rear?.value).toBe(10)
    stack.enQueue(insertNode1)
    expect(stack.front?.value).toBe(10)
    expect(stack.rear?.value).toBe(1)
  })

  test('Test deQueue() function', () => {
    const stack = new QueueWithLinkedList()
    const insertNode0 = new DoublyLinkedListNode(10)
    const insertNode1 = new DoublyLinkedListNode(1)
    const insertNode2 = new DoublyLinkedListNode(9)
    stack.enQueue(insertNode0)
    stack.enQueue(insertNode1)
    stack.enQueue(insertNode2)
    expect(stack.front?.value).toBe(10)
    expect(stack.rear?.value).toBe(9)
    stack.deQueue()
    expect(stack.front?.value).toBe(1)
    stack.deQueue()
    stack.deQueue()
    console.log(stack)
    expect(stack.front).toBeNull()
  })
})
