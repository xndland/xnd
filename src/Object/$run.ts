import key from "../symbols/$run.js";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

function value<T, R>(this: T, fn: (this: T) => R): R {
  return fn.apply(this);
}

export default key;
