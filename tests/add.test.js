// Node's built-in test runner (node --test)
// Uses CommonJS require, and node:assert for assertions

const test = require('node:test')
const assert = require('node:assert/strict')
const { add } = require('../src/add')

test('adds two positive integers', () => {
  assert.equal(add(1, 2), 3)
})

test('adds negative and positive number', () => {
  assert.equal(add(-5, 3), -2)
})

test('adds floats correctly', () => {
  assert.strictEqual(add(1.5, 2.25), 3.75)
})

test('adds zero correctly', () => {
  assert.equal(add(0, 5), 5)
  assert.equal(add(5, 0), 5)
})

test('handles Infinity and -Infinity', () => {
  assert.equal(add(Number.POSITIVE_INFINITY, 1), Number.POSITIVE_INFINITY)
  assert.equal(add(Number.NEGATIVE_INFINITY, -1), Number.NEGATIVE_INFINITY)
})

test('throws on non-numeric inputs', () => {
  assert.throws(() => add('1', 2), TypeError)
  assert.throws(() => add(1, null), TypeError)
  assert.throws(() => add(undefined, 2), TypeError)
  assert.throws(() => add({}, []), TypeError)
})
