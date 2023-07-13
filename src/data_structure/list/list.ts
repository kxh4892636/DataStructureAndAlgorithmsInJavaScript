
export class List<T> {
  capacity:number
  size:number
  array:T[]
  constructor (capacity:number) {
    this.capacity = capacity
    this.size = 0
    this.array = new Array(capacity)
  }

  get (index:number):T {
    if (index >= this.size || index < 0) throw new Error('exceed')
    return this.array[index]
  }

  insert (position:number, value:T):boolean {
    if (position >= this.size || position < 0) throw new Error('exceed')
    if (this.size === this.capacity) {
      const array = new Array(2 * this.capacity)
      this.capacity *= 2
      for (let index = 0; index < position; index++) {
        const element = this.array[index]
        array[index] = element
      }
      array[position] = value
      for (let index = position; index < this.array.length; index++) {
        const element = this.array[index]
        array[index + 1] = element
      }
      this.size++
      this.array = array
      return true
    }
    for (let index = this.size - 1; index >= position; index--) {
      const element = this.array[index]
      this.array[index + 1] = element
    }
    this.array[position] = value
    this.size++
    return true
  }

  delete (position:number):T {
    if (position >= this.size || position < 0) throw new Error('exceed')
    const deleteElement = this.array[position]
    for (let index = position + 1; index < this.array.length; index++) {
      const element = this.array[index]
      this.array[index - 1] = element
    }
    this.size--
    return deleteElement
  }

  append (value:T) {
    if (this.size === this.capacity) {
      const array = new Array(2 * this.capacity)
      this.capacity *= 2
      for (let index = 0; index < this.array.length; index++) {
        const element = this.array[index]
        array[index] = element
      }
      array[this.size] = value
      this.size++
      this.array = array
      return true
    }
    this.array[this.size] = value
    this.size++
    return true
  }
}
