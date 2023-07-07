export class QueueArray {
  private _capacity:number
  private _size:number
  private _front:number
  private _rear:number
  private _array:unknown[]
  constructor (capacity:number) {
    this._capacity = capacity
    this._size = 0
    this._front = 0
    this._rear = 0
    this._array = new Array(capacity)
  }

  isEmpty () {
    return this._size === 0
  }

  isFull () {
    return this._size === this._capacity
  }

  enQueue (value:unknown) {
    if (this.isFull()) return false
    this._array[this._rear] = value
    this._size += 1
    if (this._rear === this._capacity - 1) this._rear = 0
    else this._rear += 1
    return true
  }

  deQueue () {
    if (this.isEmpty()) return false
    this._array[this._front] = undefined
    this._size -= 1
    if (this._front === this._capacity - 1) this._front = 0
    else this._front += 1
    console.log(this._front)
    return true
  }
}
