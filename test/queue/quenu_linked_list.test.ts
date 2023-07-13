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
    expect(stack.front).toBe(insertNode0)
    expect(stack.rear).toBe(insertNode0)
    stack.enQueue(insertNode1)
    expect(stack.front).toBe(insertNode0)
    expect(stack.rear).toBe(insertNode1)
  })

  test('Test deQueue() function', () => {
    const stack = new QueueWithLinkedList()
    const insertNode0 = new DoublyLinkedListNode(10)
    const insertNode1 = new DoublyLinkedListNode(1)
    stack.enQueue(insertNode0)
    stack.enQueue(insertNode1)
    expect(stack.front).toBe(insertNode0)
    expect(stack.rear).toBe(insertNode1)
    stack.deQueue()
    expect(stack.front).toBe(insertNode0)
    // expect(stack.rear).toBe(insertNode0)
    console.log(stack.rear)
    console.log(insertNode0)
    // stack.deQueue()
    // expect(stack.front).toBeNull()
    // expect(stack.rear).toBeNull()
    // expect(() => stack.deQueue()).toThrow()
  })
})
