import MutableCollection from "../../MutableCollection/interface.d.ts";

import add from "../../symbols/add.ts";

export default function mapTo<T, R, C extends MutableCollection<R>>(
  this: Set<T>,
  destination: C,
  mapper: (value: T) => R
): C {
  for (const entry of this) {
    destination[add](mapper(entry));
  }
  return destination;
}
