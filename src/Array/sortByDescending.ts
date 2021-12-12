import type Selectors from "../Selectors.ts";

import compareByDescending from "../comparisons/compareByDescending.ts";

import key from "../symbols/sortByDescending.ts";

declare global {
  interface Array<T> {
    [key](...selectors: Selectors<T>): this;
  }
}

Object.defineProperty(Array.prototype, key, {
  value<T>(this: Array<T>, ...selectors: Selectors<T>) {
    return this.sort(compareByDescending(...selectors));
  },
});

export default key;
