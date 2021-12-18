import key from "../symbols/build.ts";

declare global {
  interface ArrayConstructor {
    [key]<T>(generate: () => Iterable<T> | ArrayLike<T>): T[];
  }
}

Object.defineProperty(Array, key, {
  value<T>(generate: () => Iterable<T> | ArrayLike<T>) {
    return Array.from(generate());
  },
});

export default key;
