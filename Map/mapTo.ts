import key from "../symbols/mapTo.ts";
import value from "./functions/mapTo.ts";

declare global {
  interface Map<K, V> {
    [key]: typeof value;
  }
}

Object.defineProperty(Map.prototype, key, { value });

export default key;
