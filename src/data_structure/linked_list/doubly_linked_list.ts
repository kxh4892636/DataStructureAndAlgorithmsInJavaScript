import { DoublyLinkedListNode } from './doubly_linked_list_node'

export class DoublyLinkedList<T> {
  head:DoublyLinkedListNode<T>
  size:number
  constructor () {
    this.head = new DoublyLinkedListNode(null as T, null, null)
    this.size = 0
  }

  isEmpty ():boolean {
    return this.size === 0
  }

  isLast (node:DoublyLinkedListNode<T>):boolean {
    return node.next === null
  }

  find (value:T): DoublyLinkedListNode<T> | null {
    if (this.isEmpty()) return null
    let node:DoublyLinkedListNode<T>|null = this.head as DoublyLinkedListNode<T>
    while (node) {
      if (node.value === value) return node
      node = node.next
    }
    return null
  }

  delete (node:DoublyLinkedListNode<T>):boolean {
    const beforeNode = node.before
    if (!beforeNode) return false
    const next = node.next
    if (next) {
      next.before = beforeNode as DoublyLinkedListNode<T>
    }
    beforeNode.next = node.next
    this.size -= 1
    return true
  }

  insert (node:DoublyLinkedListNode<T>, position:DoublyLinkedListNode<T>) {
    const next = position.next
    node.next = position.next
    position.next = node
    node.before = position
    if (next) next.before = node
    this.size += 1
    return true
  }
}
