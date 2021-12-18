/**
 * Multiplies a Number or BigInt by another.
 *
 * Helpful with [optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
 *
 * ```ts
 * const partsCost = parts[sumBy](({ cost, quantity }) => cost?.[mul](quantity) ?? 0);
 * ```
 */
const mul = Symbol("xnd/mul");

export default mul;
