/**
 * Divides a Number or BigInt by another.
 *
 * Helpful with [optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
 * 
 * ```ts
 * const optionalAverage = numbers?.[sum]()?.[div](numbers?.length);
 * ```
 */
const div = Symbol("xnd/div");

export default div;
