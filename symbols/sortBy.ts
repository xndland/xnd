/**
 * Sorts an array in-place using natural order of the values selected and returns the sorted array.
 *
 * A selector can be a property key `string | number | symbol` or a function `(value: T) => Comparable`.
 *
 * ```ts
 * const persons = [ { name: "Eve" }, { name: "Adam" } ];
 * 
 * persons[sortBy]("name");
 * // => [ { name: "Adam" }, { name: "Eve" } ]
 * 
 * persons[sortBy](({ name }) => name.length);
 * // => [ { name: "Eve" }, { name: "Adam" } ]
 * ```
 *
 */
const sortBy = Symbol("xnd/sortBy");

export default sortBy;
