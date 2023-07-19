import {
  GraphAdjMat
} from '../../src/data_structure/graph/graph_adjacency_matrix'

describe('Test GraphAdjMat', () => {
  test('Return the instance of GraphAdjMat', () => {
    const vertices = ['value1', 'value2', 'value3', 'value4', 'value5']
    const edges:[string, string][] = [
      ['value1', 'value5'],
      ['value1', 'value2'],
      ['value1', 'value3'],
      ['value2', 'value3'],
      ['value2', 'value5'],
      ['value2', 'value4'],
      ['value5', 'value4']
    ]
    const instance0 = new GraphAdjMat(vertices, edges)
    expect(instance0).toBeInstanceOf(GraphAdjMat)
  })

  test('Return the size of instance', () => {
    const vertices = ['value1', 'value2', 'value3', 'value4', 'value5']
    const edges:[string, string][] = [
      ['value1', 'value5'],
      ['value1', 'value2'],
      ['value1', 'value3'],
      ['value2', 'value3'],
      ['value2', 'value5'],
      ['value2', 'value4'],
      ['value5', 'value4']
    ]
    const instance0 = new GraphAdjMat(vertices, edges)
    expect(instance0.size()).toBe(5)
  })

  test('Return the size of instance', () => {
    const vertices = ['value1', 'value2', 'value3', 'value4', 'value5']
    const edges:[string, string][] = [
      ['value1', 'value5'],
      ['value1', 'value2'],
      ['value1', 'value3'],
      ['value2', 'value3'],
      ['value2', 'value5'],
      ['value2', 'value4'],
      ['value5', 'value4']
    ]
    const instance0 = new GraphAdjMat(vertices, edges)
    expect(instance0.getVertexIndex('value1')).toBe(0)
    expect(instance0.getVertexIndex('value11')).toBeNull()
  })

  test('Add the vertex of instance', () => {
    const vertices = ['value1', 'value2', 'value3', 'value4', 'value5']
    const edges:[string, string][] = [
      ['value1', 'value5'],
      ['value1', 'value2'],
      ['value1', 'value3'],
      ['value2', 'value3'],
      ['value2', 'value5'],
      ['value2', 'value4'],
      ['value5', 'value4']
    ]
    const instance0 = new GraphAdjMat(vertices, edges)
    instance0.addVertex('value6')
    expect(instance0.getVertexIndex('value6')).toBe(5)
    expect(instance0.size()).toBe(6)
  })

  test('Remove the vertex of instance', () => {
    const vertices = ['value1', 'value2', 'value3', 'value4', 'value5']
    const edges:[string, string][] = [
      ['value1', 'value5'],
      ['value1', 'value2'],
      ['value1', 'value3'],
      ['value2', 'value3'],
      ['value2', 'value5'],
      ['value2', 'value4'],
      ['value5', 'value4']
    ]
    const instance0 = new GraphAdjMat(vertices, edges)
    expect(() => instance0.removeVertex('value66')).toThrow()
    instance0.removeVertex('value5')
    expect(instance0.size()).toBe(4)
  })

  test('Add the edge of instance', () => {
    const vertices = ['value1', 'value2', 'value3', 'value4', 'value5']
    const edges:[string, string][] = [
      ['value1', 'value5'],
      ['value1', 'value2'],
      ['value1', 'value3'],
      ['value2', 'value3'],
      ['value2', 'value5'],
      ['value2', 'value4'],
      ['value5', 'value4']
    ]
    const instance0 = new GraphAdjMat(vertices, edges)
    instance0.addEdge('value4', 'value1')
    expect(instance0._adjMat[3][0]).toBe(1)
    expect(instance0._adjMat[0][3]).toBe(1)
    expect(() => instance0.addEdge('value41', 'value1')).toThrow()
  })

  test('Remove the edge of instance', () => {
    const vertices = ['value1', 'value2', 'value3', 'value4', 'value5']
    const edges:[string, string][] = [
      ['value1', 'value5'],
      ['value1', 'value2'],
      ['value1', 'value3'],
      ['value2', 'value3'],
      ['value2', 'value5'],
      ['value2', 'value4'],
      ['value5', 'value4']
    ]
    const instance0 = new GraphAdjMat(vertices, edges)
    instance0.removeEdge('value4', 'value5')
    expect(instance0._adjMat[3][4]).toBe(0)
    expect(instance0._adjMat[4][3]).toBe(0)
    expect(() => instance0.removeEdge('value41', 'value1')).toThrow()
  })

  test('BFS', () => {
    const vertices = ['value1', 'value2', 'value3', 'value4', 'value5']
    const edges:[string, string][] = [
      ['value1', 'value5'],
      ['value1', 'value2'],
      ['value1', 'value3'],
      ['value2', 'value3'],
      ['value2', 'value5'],
      ['value2', 'value4'],
      ['value5', 'value4']
    ]
    const instance0 = new GraphAdjMat(vertices, edges)
    expect(() => instance0.graphBFS('123')).toThrow()
    expect(instance0.graphBFS('value1')).toEqual(
      ['value1', 'value2', 'value3', 'value5', 'value4']
    )
  })

  test('DFS', () => {
    const vertices = ['value1', 'value2', 'value3', 'value4', 'value5']
    const edges:[string, string][] = [
      ['value1', 'value5'],
      ['value1', 'value2'],
      ['value2', 'value3'],
      ['value2', 'value5'],
      ['value5', 'value4']
    ]
    const instance0 = new GraphAdjMat(vertices, edges)
    expect(() => instance0.graphDFS('123')).toThrow()
    expect(instance0.graphDFS('value1')).toEqual(
      ['value1', 'value2', 'value3', 'value5', 'value4']
    )
  })
})
