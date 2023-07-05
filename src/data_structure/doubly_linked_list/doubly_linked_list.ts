import { DoublyLinkedListNode } from './doubly_linked_list_node'

export class DoublyLinkedList<T> {
  head:DoublyLinkedListNode<T>
  constructor () {
    this.head = new DoublyLinkedListNode(null as T, null, null)
  }

  isEmpty () {
    return this.head.next === null
  }

  isLast (node:DoublyLinkedListNode<T>) {
    return node.next === null
  }

  find (value:T) {
    if (!this.head.next) return false
    let node:DoublyLinkedListNode<T>|null = this.head
    while (node) {
      if (node.value === value) return node
      node = node.next
    }
    return false
  }

  findPrevious (value:T) {
    if (!this.head.next) return false
    let node:DoublyLinkedListNode<T>|null = this.head
    while (node) {
      if (!node.next) return false
      if (node.next.value === value) return node
      node = node.next
    }
    return false
  }

  delete (value:DoublyLinkedListNode<T>) {
    const beforeNode = value.before
    if (!beforeNode) return false
    if (this.isLast(beforeNode)) return false
    const next = beforeNode.next as DoublyLinkedListNode<T>
    beforeNode.next = next.next
    return true
  }

  insert (value:DoublyLinkedListNode<T>, position:DoublyLinkedListNode<T>) {
    position.next = value
    return value
  }
}
