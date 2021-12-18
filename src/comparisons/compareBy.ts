import type Selectors from "../Selectors.d.ts";

import CompareFunction from "../CompareFunction.ts";
import compareValuesBy from "./compareValuesBy.ts";

/**
 * Returns a `CompareFunction` using the specified selectors.
 * 
 * Each selector is called in order until the selected values differ in order in which case the comparison of those values is returned.
 * 
 * A selector can be a property key `string | number | symbol` or a function `(value: T) => Comparable`.
 *
 * ```ts
 * const persons = [
 *   { name: "Frank", age: 22 },
 *   { name: "Elizabeth", age: 42 },
 *   { name: "Bob", age: 34 },
 *   { name: "Elizabeth", age: 21 },
 * ];
 *
 * persons[sortedWith](compareBy("name", "age"));
 * // => [
 * //     { name: "Bob", age: 34 },
 * //     { name: "Elizabeth", age: 21 },
 * //     { name: "Elizabeth", age: 42 },
 * //     { name: "Frank", age: 22 }
 * //   ]
 * ```
 */
export default function compareBy<T>(
  ...selectors: Selectors<T>
): CompareFunction<T> {
  return new CompareFunction((a: T, b: T) =>
    compareValuesBy(a, b, ...selectors)
  );
}
