/**
 * Call some function on a value as its argument and then continue with the return value.
 *
 * Useful for transforming some value—especially in conjunction with [optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
 *
 * @example
 *
 * ```ts
 * import pipe from "../pipe.ts";
 *
 * function getSpecialRandomNumber() {
 *   return Math.random()[pipe]((n) => n < 0.5 ? n : n * 10);
 * }
 * ```
 *
 * instead of
 *
 * ```ts
 * function getSpecialRandomNumber() {
 *   const n = Math.random();
 *   return n < 0.5 ? n : n * 10;
 * }
 * ```
 */
const pipe = Symbol("xnd/pipe");

export default pipe;
