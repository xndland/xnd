import type Comparable from "../Comparable.ts";

import sort from "./sort.ts";

import key from "../symbols/sorted.ts";

declare global {
  interface Array<T> {
    [key]<T extends Comparable>(this: Array<T>): this;
  }
}

Object.defineProperty(Array.prototype, key, {
  value<T extends Comparable>(this: Array<T>) {
    return this.slice()[sort]();
  },
});

export default key;
