import type Comparable from "../Comparable.d.ts";

import sortDescending from "./sortDescending.ts";

import key from "../symbols/sortedDescending.ts";

declare global {
  interface Array<T> {
    [key]<T extends Comparable>(this: Array<T>): this;
  }
}

Object.defineProperty(Array.prototype, key, {
  value<T extends Comparable>(this: Array<T>) {
    return this.slice()[sortDescending]();
  },
});

export default key;
