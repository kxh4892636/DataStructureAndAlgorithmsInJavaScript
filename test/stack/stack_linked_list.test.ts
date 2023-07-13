import {
  DoublyLinkedListNode
} from '../../src/data_structure/linked_list/doubly_linked_list_node'
import {
  StackWithLinkedList
} from '../../src/data_structure/stack/stack_linked_list'

describe('Test Stack Class', () => {
  test('Test isEmpty() function', () => {
    const stack = new StackWithLinkedList<string>()
    expect(stack.isEmpty()).toBeTruthy()
  })

  test('Test push() function', () => {
    const stack = new StackWithLinkedList<string>()
    const node0 = new DoublyLinkedListNode<string>('node0')
    const node1 = new DoublyLinkedListNode<string>('node1')
    stack.push(node0)
    expect(stack.peek()).toBe(node0)
    stack.push(node1)
    expect(stack.peek()).toBe(node1)
  })

  test('Test pop() function', () => {
    const stack = new StackWithLinkedList<string>()
    const node0 = new DoublyLinkedListNode<string>('node0')
    const node1 = new DoublyLinkedListNode<string>('node1')
    expect(stack.pop()).toBeNull()
    stack.push(node0)
    stack.push(node1)
    expect(stack.pop()).toBe(node1)
    expect(stack.pop()).toBe(node0)
  })

  test('Test peek() function', () => {
    const stack = new StackWithLinkedList<string>()
    const node0 = new DoublyLinkedListNode<string>('node0')
    expect(stack.peek()).toBeNull()
    stack.push(node0)
    expect(stack.peek()).toBe(node0)
  })
})
