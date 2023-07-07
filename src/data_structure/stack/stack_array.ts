
export class StackArray<T> {
  private _array:T[]
  private _index:number
  private _size:number
  constructor (size:number) {
    this._size = size
    this._array = new Array(size)
    this._index = -1
  }

  isEmpty () {
    return this._index === -1
  }

  isFull () {
    return this._index === this._size - 1
  }

  push (value:T) {
    if (this.isFull()) return false
    this._index += 1
    this._array[this._index] = value
    return true
  }

  pop () {
    if (this.isEmpty()) return null
    const popValue = this._array[this._index]
    this._array[this._index] = undefined as T
    this._index -= 1
    return popValue
  }

  top () {
    if (this.isEmpty()) return null
    return this._array[this._index]
  }
}
