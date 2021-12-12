import type Selectors from "../Selectors.ts";

import sortByDescending from "./sortByDescending.ts";

import key from "../symbols/sortedByDescending.ts";

declare global {
  interface Array<T> {
    [key](...selectors: Selectors<T>): this;
  }
}

Object.defineProperty(Array.prototype, key, {
  value<T>(this: Array<T>, ...selectors: Selectors<T>) {
    return this.slice()[sortByDescending](...selectors);
  },
});

export default key;
