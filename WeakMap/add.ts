import key from "../symbols/add.ts";
import value from "./functions/add.ts";

declare global {
  interface WeakMap<K extends object, V> {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakMap.prototype, key, { value });

export default key;
