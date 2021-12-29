import key from "../symbols/sortWith.ts";

declare global {
  interface Array<T> {
    [key](compareFn: (a: T, b: T) => number): this;
  }
}

Object.defineProperty(Array.prototype, key, {
  value<T>(this: Array<T>, compareFn: (a: T, b: T) => number) {
    return this.sort(compareFn);
  },
});

export default key;
