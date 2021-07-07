import key from "../symbols/map.ts";
import value from "./functions/map.ts";

declare global {
  interface Map<K, V> {
    [key]: typeof value;
  }
}

Object.defineProperty(Map.prototype, key, { value });

export default key;
