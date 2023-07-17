import { DoublyLinkedList } from '../linked_list/doubly_linked_list'
import { DoublyLinkedListNode } from '../linked_list/doubly_linked_list_node'

export class QueueWithLinkedList<T> {
  list:DoublyLinkedList<T>
  front: DoublyLinkedListNode<T>|null
  rear: DoublyLinkedListNode<T>|null
  constructor () {
    this.list = new DoublyLinkedList<T>()
    this.rear = null
    this.front = null
  }

  isEmpty () {
    return this.list.isEmpty()
  }

  enQueue (node:DoublyLinkedListNode<T>) {
    const head = this.list.head
    if (this.isEmpty()) {
      this.front = node
    }
    this.list.insert(node, head)
    this.rear = node
  }

  deQueue () {
    if (this.isEmpty()) throw new Error('empty')
    const front = this.front as DoublyLinkedListNode<T>
    this.list.delete(front)
    this.front = front.before as DoublyLinkedListNode<T>
    if (this.isEmpty()) {
      this.rear = null
      this.front = null
    }
  }
}
