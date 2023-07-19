export class GraphAdjMat {
  _adjMat:number[][]
  _size:number
  _isDirection:boolean
  _index:{
    [propName: number]: string
  }

  _vertices:{
    [propName: string]: number
  }

  constructor (vertices:string[], edges:[string, string][]) {
    this._vertices = {}
    this._adjMat = []
    this._size = 0
    this._isDirection = false
    this._index = {}
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

  getVertexIndex (value:string) {
    const index = this._vertices[value]
    if (typeof index === 'number') {
      return index
    } else {
      return null
    }
  }

  addVertex (value:string) {
    const size = this._size
    const newRow = new Array(size).fill(0)
    this._vertices[value] = size
    this._index[size] = value
    this._adjMat.push(newRow)
    for (let index = 0; index < this._adjMat.length; index++) {
      const row = this._adjMat[index]
      row.push(0)
    }
    this._size += 1
  }

  removeVertex (value:string) {
    const vertexIndex = this.getVertexIndex(value)
    if (!(typeof vertexIndex === 'number')) {
      throw new Error('the graph don\'t have this vertex')
    }
    delete this._vertices[value]
    delete this._index[vertexIndex]
    this._adjMat.splice(vertexIndex, 1)
    for (let index = 0; index < this._adjMat.length; index++) {
      const row = this._adjMat[index]
      row.splice(vertexIndex, 1)
    }
    this._size -= 1
  }

  addEdge (startVertex:string, endVertex:string) {
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
    this._adjMat[startVertexIndex][endVertexIndex] = 1
    if (!this._isDirection) {
      this._adjMat[endVertexIndex][startVertexIndex] = 1
    }
  }

  removeEdge (startVertex:string, endVertex:string) {
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
    this._adjMat[startVertexIndex][endVertexIndex] = 0
    if (!this._isDirection) {
      this._adjMat[endVertexIndex][startVertexIndex] = 0
    }
  }

  graphBFS (vertex:string) {
    const headIndex = this.getVertexIndex(vertex)
    if (!(typeof headIndex === 'number')) {
      throw new Error('the graph don\'t have this vertex')
    }
    const resIndex = []
    const queueIndex = [headIndex]
    const visitedIndex = new Set([headIndex])
    while (queueIndex.length !== 0) {
      const headIndex = queueIndex.shift() as number
      resIndex.push(headIndex)
      for (let index = 0; index < this._adjMat[headIndex].length; index++) {
        const tag = this._adjMat[headIndex][index]
        if (tag === 0) continue
        if (visitedIndex.has(index)) continue
        queueIndex.push(index)
        visitedIndex.add(index)
      }
    }
    return resIndex.map((value) => this._index[value])
  }

  graphDFS (vertex:string) {
    const headIndex = this.getVertexIndex(vertex)
    if (!(typeof headIndex === 'number')) {
      throw new Error('the graph don\'t have this vertex')
    }
    const resIndex = [headIndex]
    const visitedIndex = new Set([headIndex])

    const loop = (vertexLoopIndex:number) => {
      for (
        let index = 0;
        index < this._adjMat[vertexLoopIndex].length;
        index++
      ) {
        const tag = this._adjMat[vertexLoopIndex][index]
        if (tag === 0) continue
        if (visitedIndex.has(index)) continue
        resIndex.push(index)
        visitedIndex.add(index)
        loop(index)
      }
    }

    loop(headIndex)

    return resIndex.map((value) => this._index[value])
  }
}
