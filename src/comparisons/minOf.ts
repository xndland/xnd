import type Comparable from "../Comparable.ts";

import compareValues from "./compareValues.ts";

export default function minOf<T extends Comparable>(): undefined;
export default function minOf<T extends Comparable>(
  ...values: [firstValue: T, ...restValues: T[]]
): T;
export default function minOf<T extends Comparable>(
  ...values: T[]
): T | undefined;
export default function minOf<T extends Comparable>(
  ...values: T[]
): T | undefined {
  const iterator = values[Symbol.iterator]();
  let { done, value } = iterator.next();
  if (done) return;
  let min: T = value;
  for (
    { done, value } = iterator.next();
    !done;
    { done, value } = iterator.next()
  ) {
    if (compareValues(value, min) < 0) min = value;
  }
  return min;
}
