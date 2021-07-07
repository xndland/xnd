/**
 * Check a value against a predicate and then continue with the same value if truthy or with `undefined` if falsy.
 *
 * ```js
 * import takeIf from "./takeIf.js";
 *
 * const string = "Hello";
 *
 * string[takeIf]((value) => value.length)?.toUpperCase();
 * ```
 */
declare const takeIf: unique symbol;

declare global {
  interface Object {
    [takeIf]<T>(this: T, fn: (value: T) => unknown): T | undefined;
  }
}

export default takeIf;
