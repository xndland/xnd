/**
 * Check a value against a predicate and then continue with the same value if falsy or with `undefined` if truthy.
 *
 * ```js
 * import takeUnless from "./takeUnless.js";
 *
 * const string = "Hello";
 *
 * string[takeUnless]((value) => value.includes("X"))?.toUpperCase();
 * ```
 */
declare const takeUnless: unique symbol;

declare global {
  interface Object {
    [takeUnless]<T>(this: T, fn: (value: T) => unknown): T | undefined;
  }
}

export default takeUnless;
