import key from "../symbols/set.ts";
import value from "./functions/set.ts";

declare global {
  interface Map<K, V> {
    [key]: typeof value;
  }
}

Object.defineProperty(Map.prototype, key, { value });

export default key;
