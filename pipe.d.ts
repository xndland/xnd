/**
 * Perform some action with a value and then continue with the return value.
 *
 * ```js
 * import pipe from "./pipe.js";
 *
 * const numbers = [1, 2, 3];
 *
 * const firstNumberDoubledAsExponential = numbers[0]
 *   [pipe]((value) => value * 2)
 *   .toExponential();
 * ```
 */
declare const pipe: unique symbol;

declare global {
  interface Object {
    [pipe]<T, R>(this: T, fn: (value: T) => R): R;
  }
}

export default pipe;
