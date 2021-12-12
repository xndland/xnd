/**
 * Compares a value to another value for order (returns zero for same, negative for before, and positive for after).
 *
 * Values must implement `Comparable`. Xnd implements this interface for `String`, `Number`, `BigInt`, `Boolean`, and `Date`.
 *
 * ```ts
 * bigints[sort]();
 * ```
 */
const compareTo = Symbol("xnd/compareTo");

export default compareTo;
