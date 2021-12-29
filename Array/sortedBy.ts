import type Selectors from "../Selectors.d.ts";

import sortBy from "./sortBy.ts";

import key from "../symbols/sortedBy.ts";

declare global {
  interface Array<T> {
    [key](...selectors: Selectors<T>): this;
  }
}

Object.defineProperty(Array.prototype, key, {
  value<T>(this: Array<T>, ...selectors: Selectors<T>) {
    return this.slice()[sortBy](...selectors);
  },
});

export default key;
