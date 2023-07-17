export class Heap {
  _heapContainer:number[]
  _type:'min'|'max'
  constructor (type:'min'|'max') {
    this._heapContainer = []
    this._type = type
  }

  getParentIndex (index:number) {
    return Math.floor((index - 1) / 2)
  }

  getLeftChildrenIndex (index:number) {
    return 2 * index + 1
  }

  getRightChildrenIndex (index:number) {
    return 2 * index + 2
  }

  size () {
    return this._heapContainer.length
  }

  isEmpty () {
    return this._heapContainer.length === 0
  }

  peek () {
    if (this.isEmpty()) return null
    return this._heapContainer[0]
  }

  push (value:number) {
    this._heapContainer.push(value)
    this.heapifyUp(this.size() - 1)
  }

  pop () {
    if (this.isEmpty()) return null
    const popValue = this._heapContainer[0]
    this._heapContainer[0] = this._heapContainer[this.size() - 1]
    this._heapContainer.pop()
    this.heapifyDown(0)
    return popValue
  }

  heapifyUp (index:number) {
    let currentIndex = index
    let parentIndex = this.getParentIndex(currentIndex)
    while (parentIndex >= 0) {
      const current = this._heapContainer[currentIndex]
      const parent = this._heapContainer[parentIndex]
      if (this._type === 'max') {
        if (current > parent) {
          this._heapContainer[currentIndex] = parent
          this._heapContainer[parentIndex] = current
          currentIndex = parentIndex
          parentIndex = this.getParentIndex(currentIndex)
        } else {
          return
        }
      } else {
        if (current < parent) {
          this._heapContainer[currentIndex] = parent
          this._heapContainer[parentIndex] = current
          currentIndex = parentIndex
          parentIndex = this.getParentIndex(currentIndex)
        } else {
          return
        }
      }
    }
  }

  heapifyDown (index:number) {
    let currentIndex = index
    let leftChildrenIndex = this.getLeftChildrenIndex(currentIndex)
    let rightChildrenIndex = this.getRightChildrenIndex(currentIndex)
    const size = this.size()
    while (leftChildrenIndex <= size - 1) {
      if (this._type === 'max') {
        const current = this._heapContainer[currentIndex]
        const leftChildren = this._heapContainer[leftChildrenIndex]
        const rightChildren = this._heapContainer[rightChildrenIndex]
        if (current < leftChildren) {
          this._heapContainer[currentIndex] = leftChildren
          this._heapContainer[leftChildrenIndex] = current
          currentIndex = leftChildrenIndex
          leftChildrenIndex = this.getLeftChildrenIndex(currentIndex)
          rightChildrenIndex = this.getRightChildrenIndex(currentIndex)
        } else if (rightChildren && current < rightChildren) {
          this._heapContainer[currentIndex] = rightChildren
          this._heapContainer[rightChildrenIndex] = current
          currentIndex = rightChildrenIndex
          leftChildrenIndex = this.getLeftChildrenIndex(currentIndex)
          rightChildrenIndex = this.getRightChildrenIndex(currentIndex)
        } else {
          return
        }
      } else {
        const current = this._heapContainer[currentIndex]
        const leftChildren = this._heapContainer[leftChildrenIndex]
        const rightChildren = this._heapContainer[rightChildrenIndex]
        if (current > leftChildren) {
          this._heapContainer[currentIndex] = leftChildren
          this._heapContainer[leftChildrenIndex] = current
          currentIndex = leftChildrenIndex
          leftChildrenIndex = this.getLeftChildrenIndex(currentIndex)
          rightChildrenIndex = this.getRightChildrenIndex(currentIndex)
        } else if (rightChildren && current > rightChildren) {
          this._heapContainer[currentIndex] = rightChildren
          this._heapContainer[rightChildrenIndex] = current
          currentIndex = rightChildrenIndex
          leftChildrenIndex = this.getLeftChildrenIndex(currentIndex)
          rightChildrenIndex = this.getRightChildrenIndex(currentIndex)
        } else {
          return
        }
      }
    }
  }
}
