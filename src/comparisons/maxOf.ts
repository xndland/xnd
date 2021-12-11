import type Comparable from "../Comparable.ts";

import compareValues from "./compareValues.ts";

export default function maxOf<T extends Comparable>(): undefined;
export default function maxOf<T extends Comparable>(
  ...values: [firstValue: T, ...restValues: T[]]
): T;
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
