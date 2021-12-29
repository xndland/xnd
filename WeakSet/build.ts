import key from "../symbols/build.ts";

declare global {
  interface WeakSetConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakSet, key, { value });

// deno-lint-ignore ban-types
function value<T extends object>(generate: () => Iterable<T>): WeakSet<T> {
  return new WeakSet(generate());
}

export default key;
