import { StackWithArray } from '../../src/data_structure/stack/stack_array'

describe('Test StackArray Class', () => {
  test('Test isEmpty() function', () => {
    const stack = new StackWithArray<string>(10)
    expect(stack.isEmpty()).toBeTruthy()
    stack.push('test')
    expect(stack.isEmpty()).toBeFalsy()
  })

  test('Test isFull() function', () => {
    const stack = new StackWithArray<string>(3)
    expect(stack.isFull()).toBeFalsy()
    stack.push('test')
    stack.push('test')
    stack.push('test')
    expect(stack.isFull()).toBeTruthy()
  })

  test('Test push() function', () => {
    const stack = new StackWithArray<string>(3)
    stack.push('test')
    expect(stack.peek()).toBe('test')
    stack.push('test')
    stack.push('test')
    expect(stack.push('test')).toBeFalsy()
  })

  test('Test push() function', () => {
    const stack = new StackWithArray<string>(3)
    expect(stack.pop()).toBeNull()
    stack.push('test')
    expect(stack.pop()).toBe('test')
  })

  test('Test peek() function', () => {
    const stack = new StackWithArray<string>(3)
    expect(stack.peek()).toBeNull()
    stack.push('test')
    expect(stack.peek()).toBe('test')
    stack.push('good')
    expect(stack.peek()).toBe('good')
    stack.pop()
    expect(stack.peek()).toBe('test')
  })
})
