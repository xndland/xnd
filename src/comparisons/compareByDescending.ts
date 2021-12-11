import type Selectors from "../Selectors.ts";

import CompareFunction from "../CompareFunction.ts";
import compareValuesBy from "./compareValuesBy.ts";

export default function compareByDescending<T>(
  ...selectors: Selectors<T>
): CompareFunction<T> {
  return new CompareFunction((a: T, b: T) =>
    compareValuesBy(b, a, ...selectors)
  );
}
