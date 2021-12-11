import type Selectors from "../Selectors.ts";

import CompareFunction from "../CompareFunction.ts";
import compareValuesBy from "./compareValuesBy.ts";

export default function compareBy<T>(
  ...selectors: Selectors<T>
): CompareFunction<T> {
  return new CompareFunction((a: T, b: T) => compareValuesBy(a, b, ...selectors));
}
