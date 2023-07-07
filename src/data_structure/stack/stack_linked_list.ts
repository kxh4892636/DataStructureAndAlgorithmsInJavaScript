import { LinkedList } from '../linked_list/linked_list'
import { LinkedListNode } from '../linked_list/linked_list_node'

export class Stack<T> {
  private list:LinkedList<T>
  constructor () {
    this.list = new LinkedList<T>()
  }

  isEmpty () {
    return this.list.isEmpty()
  }

  push (value:LinkedListNode<T>) {
    const head = this.list.head
    this.list.insert(value, head)
    return true
  }

  pop () {
    if (this.isEmpty()) return null
    const head = this.list.head
    const deletedNode = head.next as LinkedListNode<T>
    this.list.delete(deletedNode)
    return deletedNode
  }

  top () {
    if (this.isEmpty()) return null
    return this.list.head.next as LinkedListNode<T>
  }
}
