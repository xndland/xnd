import key from "../symbols/getOrSet.ts";
import value from "./functions/getOrSet.ts";

declare global {
  interface Map<K, V> {
    [key]: typeof value;
  }
}

Object.defineProperty(Map.prototype, key, { value });

export default key;
