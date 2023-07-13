import { DoublyLinkedList } from '../linked_list/doubly_linked_list'
import { DoublyLinkedListNode } from '../linked_list/doubly_linked_list_node'

export class StackWithLinkedList<T> {
  private list:DoublyLinkedList<T>
  constructor () {
    this.list = new DoublyLinkedList<T>()
  }

  isEmpty () {
    return this.list.isEmpty()
  }

  push (value:DoublyLinkedListNode<T>) {
    const head = this.list.head
    this.list.insert(value, head)
    return true
  }

  pop () {
    if (this.isEmpty()) return null
    const head = this.list.head
    const deletedNode = head.next as DoublyLinkedListNode<T>
    this.list.delete(deletedNode)
    return deletedNode
  }

  peek () {
    if (this.isEmpty()) return null
    return this.list.head.next as DoublyLinkedListNode<T>
  }
}
