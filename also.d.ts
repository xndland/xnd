/**
 * Perform some action with a value and then continue with the same value.
 *
 * ```js
 * import also from "./also.js";
 *
 * const numbers = [1, 2, 3];
 *
 * numbers[also]((value) => console.log(`before push: ${value}`)).push(4);
 * ```
 */
declare const also: unique symbol;

declare global {
  interface Object {
    [also]<T>(this: T, fn: (value: T) => void): T;
  }
}

export default also;
