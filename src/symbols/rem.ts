/**
 * Finds the remainder left over by a Number or BigInt divided by another.
 *
 * Helpful with [optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
 *
 * ```ts
 * optionalValue?.[rem](12);
 * ```
 */
const rem = Symbol("xnd/rem");

export default rem;
