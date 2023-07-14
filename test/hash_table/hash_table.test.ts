import { HashTable } from '../../src/data_structure/hash_table/hash_table'

describe('Test HashTable class', () => {
  test('Return the instance of HashTable', () => {
    const hashTable0 = new HashTable()
    const hashTable1 = new HashTable(1)
    expect(hashTable0).toBeInstanceOf(HashTable)
    expect(hashTable1).toBeInstanceOf(HashTable)
  })

  test('Test set() function', () => {
    const hashTable = new HashTable(1)
    hashTable.set('test', 1)
    expect(hashTable.has('test')).toBeTruthy()
    hashTable.set('test', 2)
    hashTable.set('tes', 1)
    expect(hashTable.get('test')).toBe(2)
  })

  test('Test get() function', () => {
    const hashTable = new HashTable()
    hashTable.set('test', 1)
    expect(hashTable.get('test')).toBe(1)
    expect(hashTable.get('t')).toBeNull()
  })

  test('Test delete() function', () => {
    const hashTable = new HashTable(1)
    hashTable.set('test', 1)
    hashTable.set('tes', 2)
    expect(hashTable.delete('test')).toEqual({ key: 'test', value: 1 })
    expect(hashTable.delete('t')).toBeNull()
  })

  test('Test has() function', () => {
    const hashTable = new HashTable(1)
    hashTable.set('test', 1)
    hashTable.set('tes', 2)
    expect(hashTable.has('test')).toBeTruthy()
    expect(hashTable.has('t')).toBeFalsy()
  })

  test('Test keys() function', () => {
    const hashTable = new HashTable()
    hashTable.set('test', 4)
    hashTable.set('tes', 3)
    hashTable.set('te', 2)
    hashTable.set('t', 1)
    expect(hashTable.keys().sort()).toEqual(['t', 'te', 'tes', 'test'])
  })

  test('Test keys() function', () => {
    const hashTable = new HashTable()
    hashTable.set('test', 4)
    hashTable.set('tes', 3)
    hashTable.set('te', 2)
    hashTable.set('t', 1)
    expect(hashTable.values().sort()).toEqual([1, 2, 3, 4])
  })

  test('Test entries() function', () => {
    const hashTable = new HashTable()
    hashTable.set('test', 4)
    hashTable.set('tes', 3)
    hashTable.set('te', 2)
    hashTable.set('t', 1)
    const result = hashTable.entries().sort()
    expect(result).toContainEqual(['t', 1])
    expect(result).toContainEqual(['te', 2])
    expect(result).toContainEqual(['tes', 3])
    expect(result).toContainEqual(['test', 4])
  })
})
