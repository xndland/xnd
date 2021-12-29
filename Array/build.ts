import key from "../symbols/build.ts";

declare global {
  interface ArrayConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(Array, key, { value });

function value<T>(generate: () => Iterable<T> | ArrayLike<T>) {
  return Array.from(generate());
}

export default key;
