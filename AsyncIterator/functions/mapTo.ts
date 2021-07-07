import MutableCollection from "../../MutableCollection/interface.d.ts";

import add from "../../symbols/add.ts";

export default async function mapTo<T, R, C extends MutableCollection<R>>(
  this: AsyncIterator<T>,
  destination: C,
  mapper: (value: T) => R
): Promise<C> {
  let { done, value } = await this.next();
  while (!done) {
    destination[add](mapper(value));
    ({ done, value } = await this.next());
  }
  return destination;
}
