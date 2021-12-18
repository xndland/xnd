import key from "../symbols/build.ts";

declare global {
  interface SetConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(Set, key, { value });

function value<T>(generate: () => Iterable<T>): Set<T> {
  return new Set(generate());
}

export default key;
