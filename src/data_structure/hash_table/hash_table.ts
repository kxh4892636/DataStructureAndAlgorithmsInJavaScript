import { DoublyLinkedList } from '../linked_list/doubly_linked_list'
import { DoublyLinkedListNode } from '../linked_list/doubly_linked_list_node'

interface HashTableInterface{
    key:string,
    value:unknown
}

export class HashTable {
  bucket:DoublyLinkedList<HashTableInterface>[]
  capacity:number
  constructor (capacity = 32) {
    this.bucket = new Array(capacity).fill(1).map(() => new DoublyLinkedList())
    this.capacity = capacity
  }

  hash (key:string) {
    let hash = 0
    const length = key.length
    for (let index = 0; index < length; index++) {
      hash = hash * 31 + key.charCodeAt(index)
    }
    return hash % this.capacity
  }

  set (key:string, value:unknown) {
    const index = this.hash(key)
    const linkedList = this.bucket[index]
    const result = linkedList.find({ key, value }, (object:object) => {
      const o = object as HashTableInterface
      if (o.key === key) return true
      else return false
    })
    if (result) {
      result.value = { key, value }
    } else {
      const node = new DoublyLinkedListNode({ key, value })
      linkedList.insert(node, linkedList.head)
    }
  }

  get (key:string) {
    const index = this.hash(key)
    const linkedList = this.bucket[index]
    const result = linkedList.find(
        { key } as HashTableInterface,
        (object:object) => {
          const o = object as HashTableInterface
          if (o.key === key) return true
          else return false
        }
    )
    if (result) {
      return result.value.value
    } else {
      return null
    }
  }

  delete (key:string) {
    const index = this.hash(key)
    const linkedList = this.bucket[index]
    const result = linkedList.find(
        { key } as HashTableInterface,
        (object:object) => {
          const o = object as HashTableInterface
          if (o.key === key) return true
          else return false
        }
    )
    if (result) {
      linkedList.delete(result)
      return result.value
    } else {
      return null
    }
  }

  has (key:string) {
    const index = this.hash(key)
    const linkedList = this.bucket[index]
    const result = linkedList.find(
        { key } as HashTableInterface,
        (object:object) => {
          const o = object as HashTableInterface
          if (o.key === key) return true
          else return false
        }
    )
    if (result) {
      return true
    } else {
      return false
    }
  }

  keys () {
    const keys = []
    for (let index = 0; index < this.capacity; index++) {
      const linkedList = this.bucket[index]
      let currentNode:DoublyLinkedListNode<HashTableInterface>|null =
      linkedList.head.next
      while (currentNode) {
        keys.push(currentNode.value.key)
        currentNode = currentNode.next
      }
    }
    return keys
  }

  values () {
    const values = []
    for (let index = 0; index < this.capacity; index++) {
      const linkedList = this.bucket[index]
      let currentNode:DoublyLinkedListNode<HashTableInterface>|null =
      linkedList.head.next
      while (currentNode) {
        values.push(currentNode.value.value)
        currentNode = currentNode.next
      }
    }
    return values
  }

  entries () {
    const entries = []
    for (let index = 0; index < this.capacity; index++) {
      const linkedList = this.bucket[index]
      let currentNode:DoublyLinkedListNode<HashTableInterface>|null =
      linkedList.head.next
      while (currentNode) {
        entries.push([currentNode.value.key, currentNode.value.value])
        currentNode = currentNode.next
      }
    }
    return entries
  }
}
