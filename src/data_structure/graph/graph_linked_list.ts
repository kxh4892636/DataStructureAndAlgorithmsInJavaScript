import { DoublyLinkedList } from '../linked_list/doubly_linked_list'
import { DoublyLinkedListNode } from '../linked_list/doubly_linked_list_node'

export class GraphVertex {
  _value:string
  constructor (value:string) {
    this._value = value
  }

  get value () {
    return this._value
  }

  set value (value:string) {
    this._value = value
  }
}

export class GraphLinkedList {
  _linkList:DoublyLinkedList<GraphVertex>[]
  _size:number
  _isDirection:boolean

  constructor (
    vertices:GraphVertex[],
    edges:[GraphVertex, GraphVertex][]
  ) {
    this._linkList = []
    this._size = 0
    this._isDirection = false
    for (let index = 0; index < vertices.length; index++) {
      const vertex = vertices[index]
      this.addVertex(vertex)
    }
    for (let index = 0; index < edges.length; index++) {
      const edge = edges[index]
      this.addEdge(edge[0], edge[1])
    }
  }

  size () {
    return this._size
  }

  getVertexIndex (vertex:GraphVertex) {
    for (let index = 0; index < this._size; index++) {
      const linkedList = this._linkList[index]
      if (vertex === linkedList.head.next?.value) return index
    }
    return null
  }

  addVertex (vertex:GraphVertex) {
    const newLinkedList = new DoublyLinkedList<GraphVertex>()
    const node = new DoublyLinkedListNode(vertex)
    newLinkedList.insert(node, newLinkedList.head)
    this._linkList.push(newLinkedList)
    this._size += 1
  }

  removeVertex (vertex:GraphVertex) {
    const vertexIndex = this.getVertexIndex(vertex)
    if (!(typeof vertexIndex === 'number')) {
      throw new Error('the graph don\'t have this vertex')
    }
    this._linkList.splice(vertexIndex, 1)
    for (let index = 0; index < this._size - 1; index++) {
      const linkedList = this._linkList[index]
      const node = linkedList.find(vertex)
      if (node) {
        linkedList.delete(node)
      }
    }
    this._size -= 1
  }

  addEdge (
    startVertex:GraphVertex,
    endVertex:GraphVertex
  ) {
    const startVertexIndex = this.getVertexIndex(startVertex)
    const endVertexIndex = this.getVertexIndex(endVertex)
    if (
      !(
        typeof startVertexIndex === 'number' &&
        typeof endVertexIndex === 'number'
      )
    ) {
      throw new Error('the graph don\'t have this vertex')
    }

    const linkedList = this._linkList[startVertexIndex]
    const node = new DoublyLinkedListNode(endVertex)
    linkedList.insert(
      node, linkedList.head.next as DoublyLinkedListNode<GraphVertex>
    )
    if (!this._isDirection) {
      const linkedList = this._linkList[endVertexIndex]
      const node = new DoublyLinkedListNode(startVertex)
      linkedList.insert(
        node, linkedList.head.next as DoublyLinkedListNode<GraphVertex>
      )
    }
  }

  removeEdge (
    startVertex:GraphVertex,
    endVertex:GraphVertex
  ) {
    const startVertexIndex = this.getVertexIndex(startVertex)
    const endVertexIndex = this.getVertexIndex(endVertex)
    if (
      !(
        typeof startVertexIndex === 'number' &&
        typeof endVertexIndex === 'number'
      )
    ) {
      throw new Error('the graph don\'t have this vertex')
    }
    const linkedList = this._linkList[startVertexIndex]
    const node = linkedList.find(endVertex)
    if (node) linkedList.delete(node)
    if (!this._isDirection) {
      const linkedList = this._linkList[endVertexIndex]
      const node = linkedList.find(startVertex)
      if (node) linkedList.delete(node)
    }
  }

  graphBFS (vertex:GraphVertex) {
    const vertexIndex = this.getVertexIndex(vertex)
    if (!(typeof vertexIndex === 'number')) {
      throw new Error('the graph don\'t have this vertex')
    }
    const res = []
    const queue = [vertex]
    const visited = new Set([vertex])

    while (queue.length !== 0) {
      const currentVertex = queue.shift() as GraphVertex
      res.push(currentVertex)
      const currentNode = this._linkList[
        this.getVertexIndex(currentVertex) as number
      ].head.next

      let loopNode = currentNode
      while (loopNode !== null) {
        const loopVertex = loopNode.value
        if (!visited.has(loopVertex)) {
          queue.push(loopVertex)
          visited.add(loopVertex)
        }
        loopNode = loopNode.next
      }
    }

    return res
  }

  graphDFS (vertex:GraphVertex) {
    const vertexIndex = this.getVertexIndex(vertex)
    if (!(typeof vertexIndex === 'number')) {
      throw new Error('the graph don\'t have this vertex')
    }
    const res = [vertex]
    const visited = new Set([vertex])

    const loop = (loopVertex:GraphVertex) => {
      const loopNode = this._linkList[
        this.getVertexIndex(loopVertex) as number
      ].head.next as DoublyLinkedListNode<GraphVertex>
      let nextNode = loopNode.next

      while (nextNode !== null) {
        const nextVertex = nextNode.value
        if (!visited.has(nextVertex)) {
          res.push(nextVertex)
          visited.add(nextVertex)
          loop(nextVertex)
        }
        nextNode = nextNode.next
      }
    }

    loop(vertex)

    return res
  }
}
