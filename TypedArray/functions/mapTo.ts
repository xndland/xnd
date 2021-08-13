import MutableCollection from "../../MutableCollection/interface.d.ts";

import add from "../../symbols/add.ts";

export default function mapTo<T, R, C extends MutableCollection<R>>(
  this: Array<T>,
  destination: C,
  mapper: (value: T) => R
): C {
  const { length } = this;
  for (let index = 0; index < length; index++) {
    destination[add](mapper(this[index]));
  }
  return destination;
}
