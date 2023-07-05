import { LinkedListNode } from './linked_list_node'

export class LinkedList<T> {
  head:LinkedListNode<T>
  constructor () {
    this.head = new LinkedListNode(null as T, null)
  }

  isEmpty () {
    return this.head.next === null
  }

  isLast (node:LinkedListNode<T>) {
    return node.next === null
  }

  find (value:T) {
    if (!this.head.next) return false
    let node:LinkedListNode<T>|null = this.head
    while (node) {
      if (node.value === value) return node
      node = node.next
    }
    return false
  }

  findPrevious (value:T) {
    if (!this.head.next) return false
    let node:LinkedListNode<T>|null = this.head
    while (node) {
      if (!node.next) return false
      if (node.next.value === value) return node
      node = node.next
    }
    return false
  }

  delete (value:LinkedListNode<T>) {
    const node = this.findPrevious(value.value)
    if (!node) return false
    if (this.isLast(node)) return false
    const next = node.next as LinkedListNode<T>
    node.next = next.next
    return true
  }

  insert (value:LinkedListNode<T>, position:LinkedListNode<T>) {
    position.next = value
    return value
  }
}
