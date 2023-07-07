import { QueueArray } from '../../src/data_structure/queue/queue_array'

describe('Test QueueArray Class', () => {
  test('Test isEmpty() function', () => {
    const stack = new QueueArray(3)
    expect(stack.isEmpty()).toBeTruthy()
    stack.enQueue('good')
    expect(stack.isEmpty()).toBeFalsy()
  })

  test('Test isFull() function', () => {
    const stack = new QueueArray(3)
    expect(stack.isFull()).toBeFalsy()
    stack.enQueue('good')
    expect(stack.isFull()).toBeFalsy()
    stack.enQueue('good')
    expect(stack.isFull()).toBeFalsy()
    stack.enQueue('good')
    expect(stack.isFull()).toBeTruthy()
  })

  test('Test enQueue() function', () => {
    const stack = new QueueArray(3)
    expect(stack.enQueue('good')).toBeTruthy()
    expect(stack.enQueue('good')).toBeTruthy()
    expect(stack.enQueue('good')).toBeTruthy()
    expect(stack.enQueue('good')).toBeFalsy()
    stack.deQueue()
    expect(stack.enQueue('good')).toBeTruthy()
    expect(stack.enQueue('good')).toBeFalsy()
  })

  test('Test deQueue() function', () => {
    const stack = new QueueArray(3)
    expect(stack.deQueue()).toBeFalsy()
    stack.enQueue('good')
    stack.enQueue('good')
    stack.enQueue('good')
    expect(stack.deQueue()).toBeTruthy()
    expect(stack.deQueue()).toBeTruthy()
    expect(stack.deQueue()).toBeTruthy()
    expect(stack.deQueue()).toBeFalsy()
    stack.enQueue('good')
    expect(stack.deQueue()).toBeTruthy()
    expect(stack.deQueue()).toBeFalsy()
  })
})
