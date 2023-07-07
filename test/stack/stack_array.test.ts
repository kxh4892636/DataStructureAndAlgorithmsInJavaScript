import { StackArray } from '../../src/data_structure/stack/stack_array'

describe('Test StackArray Class', () => {
  test('Test isEmpty() function', () => {
    const stack = new StackArray<string>(10)
    expect(stack.isEmpty()).toBeTruthy()
    stack.push('test')
    expect(stack.isEmpty()).toBeFalsy()
  })

  test('Test isFull() function', () => {
    const stack = new StackArray<string>(3)
    expect(stack.isFull()).toBeFalsy()
    stack.push('test')
    stack.push('test')
    stack.push('test')
    expect(stack.isFull()).toBeTruthy()
  })

  test('Test push() function', () => {
    const stack = new StackArray<string>(3)
    stack.push('test')
    expect(stack.top()).toBe('test')
    stack.push('test')
    stack.push('test')
    expect(stack.push('test')).toBeFalsy()
  })

  test('Test push() function', () => {
    const stack = new StackArray<string>(3)
    expect(stack.pop()).toBeNull()
    stack.push('test')
    expect(stack.pop()).toBe('test')
  })

  test('Test top() function', () => {
    const stack = new StackArray<string>(3)
    expect(stack.top()).toBeNull()
    stack.push('test')
    expect(stack.top()).toBe('test')
    stack.push('good')
    expect(stack.top()).toBe('good')
    stack.pop()
    expect(stack.top()).toBe('test')
  })
})
