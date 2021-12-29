import key from "../symbols/build.ts";

declare global {
  interface MapConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(Map, key, { value });

function value<K, V>(generate: () => Iterable<readonly [K, V]>): Map<K, V> {
  return new Map(generate());
}

export default key;
