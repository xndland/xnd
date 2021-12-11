import type Comparable from "../Comparable.ts";

import CompareFunction from "../CompareFunction.ts";
import compareValues from "./compareValues.ts";

export default function naturalOrder<
  T extends Comparable
>(): CompareFunction<T> {
  return new CompareFunction((a: T, b: T) => compareValues(a, b));
}
