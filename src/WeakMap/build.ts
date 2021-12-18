import key from "../symbols/build.ts";

declare global {
  interface WeakMapConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakMap, key, { value });

// deno-lint-ignore ban-types
function value<K extends object, V>(
  generate: () => Iterable<readonly [K, V]>
): WeakMap<K, V> {
  return new WeakMap(generate());
}

export default key;
