import type Selectors from "../Selectors.d.ts";

import compareBy from "../comparisons/compareBy.ts";

import key from "../symbols/sortBy.ts";

declare global {
  interface Array<T> {
    [key](...selectors: Selectors<T>): this;
  }
}

Object.defineProperty(Array.prototype, key, {
  value<T>(this: Array<T>, ...selectors: Selectors<T>) {
    return this.sort(compareBy(...selectors));
  },
});

export default key;
