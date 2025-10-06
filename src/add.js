/**
 * add(a, b)
 * Adds two numbers and returns the numeric result.
 * Validates input types and throws TypeError for non-number inputs.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('add: both arguments must be numbers')
  }
  // handle NaN or Infinity the same as JS addition -> just return a + b
  return a + b
}

module.exports = { add }
