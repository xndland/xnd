import key from "../symbols/$apply.js";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

function value<T>(this: T, fn: (this: T) => void): T {
  fn.apply(this);
  return this;
}

export default key;
