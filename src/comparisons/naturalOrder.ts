import type Comparable from "../Comparable.d.ts";

import CompareFunction from "../CompareFunction.ts";
import compareValues from "./compareValues.ts";

/**
 * Returns a `CompareFunction` that compares values using natural ordering.
 */
export default function naturalOrder<
  T extends Comparable
>(): CompareFunction<T> {
  return new CompareFunction((a: T, b: T) => compareValues(a, b));
}
