import key from "../symbols/get.ts";
import value from "./functions/get.ts";

declare global {
  interface WeakMap<K extends object, V> {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakMap.prototype, key, { value });

export default key;
