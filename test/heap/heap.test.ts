import { Heap } from '../../src/data_structure/heap/heap'

describe('Test Heap Class', () => {
  test('Create the instance of Heap', () => {
    const heap0 = new Heap('min')
    const heap1 = new Heap('max')
    expect(heap0).toBeInstanceOf(Heap)
    expect(heap1).toBeInstanceOf(Heap)
  })

  test('Return the index of parent, leftChildren and rightChildren', () => {
    const heap0 = new Heap('min')
    heap0.push(1)
    heap0.push(2)
    heap0.push(3)
    expect(heap0.getParentIndex(2)).toBe(0)
    expect(heap0.getRightChildrenIndex(0)).toBe(2)
    expect(heap0.getLeftChildrenIndex(0)).toBe(1)
  })

  test('Return the size of heap', () => {
    const heap0 = new Heap('min')
    heap0.push(1)
    heap0.push(2)
    heap0.push(3)
    expect(heap0.size()).toBe(3)
  })

  test('Whether the heap is empty', () => {
    const heap0 = new Heap('min')
    expect(heap0.isEmpty()).toBeTruthy()
    heap0.push(1)
    heap0.push(2)
    heap0.push(3)
    expect(heap0.isEmpty()).toBeFalsy()
  })

  test('Return the top element of heap', () => {
    const heap0 = new Heap('min')
    expect(heap0.peek()).toBeNull()
    heap0.push(1)
    heap0.push(2)
    heap0.push(3)
    expect(heap0.peek()).toBe(1)
  })

  test('Push the element of maxHeap', () => {
    const heap0 = new Heap('max')
    heap0.push(1)
    heap0.push(2)
    heap0.push(3)
    expect(heap0._heapContainer[0]).toBe(3)
    expect(heap0._heapContainer[1]).toBe(1)
    expect(heap0._heapContainer[2]).toBe(2)
    heap0.push(1)
  })

  test('Push the element of minHeap', () => {
    const heap0 = new Heap('min')
    heap0.push(3)
    heap0.push(2)
    heap0.push(1)
    expect(heap0._heapContainer[0]).toBe(1)
    expect(heap0._heapContainer[1]).toBe(3)
    expect(heap0._heapContainer[2]).toBe(2)
  })

  test('Pop the element of maxHeap', () => {
    const heap0 = new Heap('max')
    expect(heap0.pop()).toBeNull()
    heap0.push(1)
    heap0.push(2)
    heap0.push(3)
    heap0.push(4)
    heap0.push(5)
    heap0.push(6)
    heap0.push(7)
    const value = heap0.pop()
    expect(value).toBe(7)
    expect(heap0._heapContainer[0]).toBe(6)
    expect(heap0._heapContainer[1]).toBe(4)
    heap0.pop()
    heap0.pop()
    heap0.pop()
    heap0.pop()
    heap0.pop()
  })

  test('Pop the element of minHeap', () => {
    const heap0 = new Heap('min')
    heap0.push(5)
    heap0.push(4)
    heap0.push(3)
    heap0.push(2)
    heap0.push(1)
    heap0.push(7)
    heap0.push(6)
    const value = heap0.pop()
    expect(value).toBe(1)
    expect(heap0._heapContainer[0]).toBe(2)
    expect(heap0._heapContainer[1]).toBe(5)
    heap0.push(8)
    heap0.push(10)
    heap0.pop()
    heap0.pop()
    heap0.pop()
    heap0.pop()
    heap0.pop()
  })
})
