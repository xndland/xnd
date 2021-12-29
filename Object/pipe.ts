import key from "../symbols/pipe.ts";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

function value<T, R>(this: T, fn: (value: T) => R): R {
  return fn(this);
}

export default key;
