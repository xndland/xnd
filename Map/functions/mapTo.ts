import MutableCollection from "../../MutableCollection/interface.d.ts";

import add from "../../symbols/add.ts";

export default function mapTo<K, V, R, C extends MutableCollection<R>>(
  this: Map<K, V>,
  destination: C,
  mapper: (value: [K, V]) => R
): C {
  for (const entry of this) {
    destination[add](mapper(entry));
  }
  return destination;
}
