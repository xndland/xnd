/**
 * Adds a Number or BigInt with another.
 *
 * Helpful with [optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
 *
 * ```ts
 * const total = [laborFee?.[add](laborMarkupPrice) ?? diagnosticsFee) + (partsCost?.[add](deliveryFee) ?? 0);
 * ```
 */
const add = Symbol("xnd/add");

export default add;
