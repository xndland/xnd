/**
 * Sorts an array in-place using natural order of its elements and returns the sorted array.
 *
 * Unlike [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort),
 * Xnd's `sort` is not "built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values"
 * but instead any value that implements `Comparable` may be sorted.
 *
 * ```ts
 * const dates = [
 *   new Date("2020-12-14T12:12:07"),
 *   new Date("2020-12-13T12:12:07"),
 * ];
 * 
 * dates.sort(); // coerces dates to strings which sorts by day of week first
 * // => [ 2020-12-14T18:12:07.000Z, 2020-12-13T18:12:07.000Z ]
 *
 * dates[sort](); // compares using natural order of dates
 * // => [ 2020-12-13T18:12:07.000Z, 2020-12-14T18:12:07.000Z ]
 * ```
 */
const sort = Symbol("xnd/sort");

export default sort;
