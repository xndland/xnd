import key from "../symbols/getOrSet.ts";
import value from "./functions/getOrSet.ts";

declare global {
  interface WeakMap<K extends object, V> {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakMap.prototype, key, { value });

export default key;
