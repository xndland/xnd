import type Comparable from "../Comparable.ts";
import type Selectors from "../Selectors.ts";

import compareValues from "./compareValues.ts";

/**
 * Compares two values by the values selected.
 */
export default function compareValuesBy<T>(
  a: T,
  b: T,
  ...selectors: Selectors<T>
): number {
  let result = 0;
  for (const selector of selectors) {
    switch (typeof selector) {
      case "number":
      case "string":
      case "symbol":
        result = compareValues(
          a?.[selector] as unknown as Comparable,
          b?.[selector] as unknown as Comparable
        );
        break;
      case "function":
        result = compareValues(selector(a), selector(b));
        break;
    }
    if (result) break;
  }
  return result;
}
