import MutableCollection from "../../MutableCollection/interface.d.ts";

import add from "../../symbols/add.ts";

export default function mapTo<T, R, C extends MutableCollection<R>>(
  this: Iterator<T>,
  destination: C,
  mapper: (value: T) => R
): C {
  let { done, value } = this.next();
  while (!done) {
    destination[add](mapper(value));
    ({ done, value } = this.next());
  }
  return destination;
}
