import type Comparable from "../Comparable.ts";

import compareValues from "../comparisons/compareValues.ts";

import key from "../symbols/sortDescending.ts";

declare global {
  interface Array<T> {
    [key]<T extends Comparable>(this: Array<T>): this;
  }
}

Object.defineProperty(Array.prototype, key, {
  value<T extends Comparable>(this: Array<T>) {
    return this.sort((a, b) => compareValues(b, a));
  },
});

export default key;
