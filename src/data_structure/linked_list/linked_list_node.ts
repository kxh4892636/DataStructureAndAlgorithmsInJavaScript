/* eslint-disable no-use-before-define */
export class LinkedListNode<T> {
  value:T
  next:LinkedListNode<T>|null
  constructor (value:T, next:LinkedListNode<T>|null = null) {
    this.value = value
    this.next = next
  }
}
