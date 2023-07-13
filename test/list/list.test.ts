import { List } from '../../src/data_structure/list/list'

describe('Test List', () => {
  test('Test get() function', () => {
    const list = new List(10)
    expect(() => list.get(10)).toThrow()
    list.append(1)
    expect(list.get(0)).toBe(1)
  })

  test('Test insert() function', () => {
    const list = new List(3)
    expect(() => list.insert(-1, 3)).toThrow()
    list.append(1)
    list.append(2)
    list.insert(0, 3)
    list.insert(2, 1)
    expect(list.get(0)).toBe(3)
    expect(list.get(3)).toBe(2)
  })

  test('Test delete() function', () => {
    const list = new List(3)
    expect(() => list.delete(-1)).toThrow()
    expect(() => list.delete(0)).toThrow()
    list.append(1)
    list.append(2)
    expect(() => list.delete(9)).toThrow()
    list.delete(0)
    expect(list.get(0)).toBe(2)
  })

  test('Test append() function', () => {
    const list = new List(3)
    list.append(1)
    list.append(2)
    list.insert(1, 3)
    expect(list.get(1)).toBe(3)
    list.append(4)
    list.append(5)
    expect(list.get(3)).toBe(4)
  })
})
