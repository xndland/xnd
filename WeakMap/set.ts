import key from "../symbols/set.ts";
import value from "./functions/set.ts";

declare global {
  interface WeakMap<K extends object, V> {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakMap.prototype, key, { value });

export default key;
