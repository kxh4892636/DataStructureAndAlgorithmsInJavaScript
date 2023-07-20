import {
  GraphLinkedList, GraphVertex
} from '../../src/data_structure/graph/graph_linked_list'

describe('Test GraphLinkedList', () => {
  test('Return the instance of GraphLinkedList', () => {
    const vertex0 = new GraphVertex('1')
    const vertex1 = new GraphVertex('2')
    const vertex2 = new GraphVertex('3')
    const vertex3 = new GraphVertex('4')
    const vertex4 = new GraphVertex('5')
    const instance0 = new GraphLinkedList(
      [vertex0, vertex1, vertex2, vertex3, vertex4], []
    )
    expect(instance0).toBeInstanceOf(GraphLinkedList)
  })

  test('Return the size of instance', () => {
    const vertex0 = new GraphVertex('1')
    const vertex1 = new GraphVertex('2')
    const vertex2 = new GraphVertex('3')
    const vertex3 = new GraphVertex('4')
    const vertex4 = new GraphVertex('5')
    const instance0 = new GraphLinkedList(
      [vertex0, vertex1, vertex2, vertex3, vertex4], []
    )
    expect(instance0.size()).toBe(5)
  })

  test('Return the index of instance', () => {
    const vertex0 = new GraphVertex('1')
    const vertex1 = new GraphVertex('2')
    const vertex2 = new GraphVertex('3')
    const vertex3 = new GraphVertex('4')
    const vertex4 = new GraphVertex('5')
    const instance0 = new GraphLinkedList(
      [vertex0, vertex1, vertex2, vertex3, vertex4], []
    )
    expect(instance0.getVertexIndex(vertex0)).toBe(0)
    expect(instance0.getVertexIndex(vertex1)).toBe(1)
  })

  test('Add the vertex of instance', () => {
    const vertex0 = new GraphVertex('1')
    const vertex1 = new GraphVertex('2')
    const vertex2 = new GraphVertex('3')
    const vertex3 = new GraphVertex('4')
    const vertex4 = new GraphVertex('5')
    const instance0 = new GraphLinkedList(
      [vertex0, vertex1, vertex2, vertex3], []
    )
    instance0.addVertex(vertex4)
    expect(instance0._linkList[4].head.next?.value).toBe(vertex4)
  })

  test('Remove the vertex of instance', () => {
    const vertex0 = new GraphVertex('1')
    const vertex1 = new GraphVertex('2')
    const vertex2 = new GraphVertex('3')
    const vertex3 = new GraphVertex('4')
    const vertex4 = new GraphVertex('5')
    const instance0 = new GraphLinkedList(
      [vertex0, vertex1, vertex2, vertex3, vertex4], [[vertex0, vertex1]]
    )
    expect(instance0._linkList[0].head.next?.next?.value).toBe(vertex1)
    expect(instance0._linkList[1].head.next?.next?.value).toBe(vertex0)
    instance0.removeVertex(vertex1)
    expect(instance0._linkList[0].head.next?.next).toBeNull()
    expect(instance0._linkList[1].head.next?.value).toBe(vertex2)
  })

  test('Add the edge of instance', () => {
    const vertex0 = new GraphVertex('1')
    const vertex1 = new GraphVertex('2')
    const vertex2 = new GraphVertex('3')
    const vertex3 = new GraphVertex('4')
    const vertex4 = new GraphVertex('5')
    const vertex5 = new GraphVertex('6')
    const instance0 = new GraphLinkedList(
      [vertex0, vertex1, vertex2, vertex3, vertex4], []
    )
    instance0.addEdge(vertex0, vertex1)
    expect(instance0._linkList[0].head.next?.next?.value).toBe(vertex1)
    expect(instance0._linkList[1].head.next?.next?.value).toBe(vertex0)
    expect(() => instance0.addEdge(vertex1, vertex5)).toThrow()
  })

  test('Remove the edge of instance', () => {
    const vertex0 = new GraphVertex('1')
    const vertex1 = new GraphVertex('2')
    const vertex2 = new GraphVertex('3')
    const vertex3 = new GraphVertex('4')
    const vertex4 = new GraphVertex('5')
    const instance0 = new GraphLinkedList(
      [vertex0, vertex1, vertex2, vertex3, vertex4], []
    )
    instance0.addEdge(vertex0, vertex1)
    expect(instance0._linkList[0].head.next?.next?.value).toBe(vertex1)
    expect(instance0._linkList[1].head.next?.next?.value).toBe(vertex0)
    instance0.removeEdge(vertex0, vertex1)
    expect(instance0._linkList[0].head.next?.next).toBeNull()
    expect(instance0._linkList[1].head.next?.next).toBeNull()
  })

  test('BFS', () => {
    const vertex0 = new GraphVertex('1')
    const vertex1 = new GraphVertex('2')
    const vertex2 = new GraphVertex('3')
    const vertex3 = new GraphVertex('4')
    const vertex4 = new GraphVertex('5')
    const instance0 = new GraphLinkedList(
      [vertex0, vertex1, vertex2, vertex3, vertex4], []
    )
    instance0.addEdge(vertex0, vertex4)
    instance0.addEdge(vertex0, vertex1)
    instance0.addEdge(vertex1, vertex2)
    instance0.addEdge(vertex3, vertex4)
    expect(instance0.graphBFS(vertex0)).toEqual(
      [vertex0, vertex1, vertex4, vertex2, vertex3]
    )
  })

  test('DFS', () => {
    const vertex0 = new GraphVertex('1')
    const vertex1 = new GraphVertex('2')
    const vertex2 = new GraphVertex('3')
    const vertex3 = new GraphVertex('4')
    const vertex4 = new GraphVertex('5')
    const instance0 = new GraphLinkedList(
      [vertex0, vertex1, vertex2, vertex3, vertex4], []
    )
    instance0.addEdge(vertex0, vertex4)
    instance0.addEdge(vertex0, vertex1)
    instance0.addEdge(vertex1, vertex2)
    instance0.addEdge(vertex3, vertex4)
    expect(instance0.graphDFS(vertex0)).toEqual(
      [vertex0, vertex1, vertex2, vertex4, vertex3]
    )
  })
})
