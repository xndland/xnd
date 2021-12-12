import type Comparable from "../Comparable.ts";

import compareValues from "./compareValues.ts";

/**
 * Returns the greatest of the specified values or `undefined` if no values are provided.
 */
export default function maxOf<T extends Comparable>(): undefined;
/**
 * Returns the greatest of the specified values.
 */
export default function maxOf<T extends Comparable>(
  ...values: [firstValue: T, ...restValues: T[]]
): T;
/**
 * Returns the greatest of the specified values or `undefined` if no values are provided.
 */
export default function maxOf<T extends Comparable>(
  ...values: T[]
): T | undefined;
export default function maxOf<T extends Comparable>(
  ...values: T[]
): T | undefined {
  const iterator = values[Symbol.iterator]();
  let { done, value } = iterator.next();
  if (done) return;
  let max: T = value;
  for (
    { done, value } = iterator.next();
    !done;
    { done, value } = iterator.next()
  ) {
    if (compareValues(value, max) > 0) max = value;
  }
  return max;
}
