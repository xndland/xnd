import MutableCollection from "../../MutableCollection/interface.d.ts";

import add from "../../symbols/add.ts";

export default function mapObjectTo<
  K extends PropertyKey,
  V,
  R,
  C extends MutableCollection<R>
>(this: Record<K, V>, destination: C, mapper: (value: [K, V]) => R): C {
  for (const key in this) {
    destination[add](mapper([key, this[key]]));
  }
  return destination;
}
