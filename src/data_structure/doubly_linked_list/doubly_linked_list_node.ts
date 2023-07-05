/* eslint-disable no-use-before-define */
export class DoublyLinkedListNode<T> {
  value:T
  next:DoublyLinkedListNode<T>|null
  before:DoublyLinkedListNode<T>|null
  constructor (
    value:T,
    next:DoublyLinkedListNode<T>|null = null,
    before:DoublyLinkedListNode<T>|null = null
  ) {
    this.value = value
    this.next = next
    this.before = before
  }
}
