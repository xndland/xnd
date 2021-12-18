/**
 * Builds a String, Array, Map, Set, TypedArray, WeakMap, or WeakSet. Handy when items need to be conditionally added while building.
 * 
 * ```ts
 * const greeting = String[build](function* () {
 *   if (prefix) yield prefix;
 *   yield "Today is going to be a ";
 *   yield dayAdjective;
 *   yield "!";
 *   if (postfix) yield postfix;
 * });
 * // => one of
 * //    `Today is going to be a ${dayAdjective}!`
 * //    `Today is going to be a ${dayAdjective}!${postfix}`
 * //    `${prefix}Today is going to be a ${dayAdjective}!`
 * //    `${prefix}Today is going to be a ${dayAdjective}!${postfix}`
 * ```
 */
const build = Symbol("xnd/build");

export default build;
