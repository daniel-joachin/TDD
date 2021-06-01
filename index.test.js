const { size, clear, add, exists, index, search, remove } = require('./index')

// Size of list
test('Return length of array', () => {
  expect( size( [1,2,3] ) ).toBe(3)
})
test('Return Error, list is null', () => {
  expect( () => size(null) ).toThrow()
})
test('Empty list', () => {
  expect( size([]) ).toBe(0)
})

// Clear List
test('Clearing list', () => {
  expect( clear([1,2,3]) ).toStrictEqual([])
})

test('Clearing empty list', () => {
  expect( clear([]) ).toStrictEqual([])
})

test('Clearing null list', () => {
  expect( () => clear(null) ).toThrow()
})

// Add items
test('Add one item', () => {
  expect( add(4, [1,2,3]) ).toStrictEqual([1,2,3,4])
})

test('Add null item to list', () => {
  expect( () => add(null, [1,2,3]) ).toThrow()
})

test('adding item to null list', () => {
  expect( () => add(1,null)).toThrow()
})

// Check if item exists
test('Item is present', () => {
  expect( exists(2,[1,2,3]) ).toBeTruthy()
})

test('Item is not present', () => {
  expect( exists(4, [1,2,3]) ).toBeFalsy()
})

test('Item is null', () => {
  expect( () => exists(null, [1,2,3]) ).toThrow()
})

// Get by index
test('Get item by index', () => {
  expect( index(0, [1,2,3]) ).toBe(1)
})

test('Index not on list', () => {
  expect( () => index(4,[1,2,3]) ).toThrow()
})

test('no index', () => {
  expect( ()=> index(null, [1,2,3]) ).toThrow()
})

// Search the index of an object
test('Objet is in the list', () => {
  expect( search('apple', ['banana', 'watermelon', 'apple']) ).toBe(2)
})

test('Object is null', () => {
  expect( () => search(null, ['banana', 'watermelon', 'apple']) ).toThrow()
})

test('Object is not on list', () => {
  expect( () => search('pizza', ['banana', 'watermelon', 'apple'])).toThrow()
})

// Remove item by index
test('Item removed', () => {
  expect( remove(1, [1,2,3]) ).toStrictEqual([2,3])
})

test('Item is null', () => {
  expect(() => search(null, [1,2,3]) ).toThrow()
})

test('No item to be removed', () => {
  expect( () => search(4, [1,2,3]) ).toThrow()
})
