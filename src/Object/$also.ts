import key from "../symbols/$also.js";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

function value<T>(this: T, fn: (value: T) => void): T {
  fn(this);
  return this;
}

export default key;
