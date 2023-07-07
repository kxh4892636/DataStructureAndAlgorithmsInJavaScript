import {
  LinkedListNode
} from '../../src/data_structure/linked_list/linked_list_node'
import { Stack } from '../../src/data_structure/stack/stack_linked_list'

describe('Test Stack Class', () => {
  test('Test isEmpty() function', () => {
    const stack = new Stack<string>()
    expect(stack.isEmpty()).toBeTruthy()
  })

  test('Test push() function', () => {
    const stack = new Stack<string>()
    const node0 = new LinkedListNode<string>('node0')
    const node1 = new LinkedListNode<string>('node1')
    stack.push(node0)
    expect(stack.top()).toBe(node0)
    stack.push(node1)
    expect(stack.top()).toBe(node1)
  })

  test('Test pop() function', () => {
    const stack = new Stack<string>()
    const node0 = new LinkedListNode<string>('node0')
    const node1 = new LinkedListNode<string>('node1')
    expect(stack.pop()).toBeNull()
    stack.push(node0)
    stack.push(node1)
    expect(stack.pop()).toBe(node1)
    expect(stack.pop()).toBe(node0)
  })

  test('Test top() function', () => {
    const stack = new Stack<string>()
    const node0 = new LinkedListNode<string>('node0')
    expect(stack.top()).toBeNull()
    stack.push(node0)
    expect(stack.top()).toBe(node0)
  })
})
