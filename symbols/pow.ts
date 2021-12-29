/**
 * Raises a Number or BigInt to the power of another.
 *
 * Helpful with [optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
 *
 * ```ts
 * optionalValue?.[pow](2n);
 * ```
 */
const pow = Symbol("xnd/pow");

export default pow;
