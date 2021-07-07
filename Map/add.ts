import key from "../symbols/add.ts";
import value from "./functions/add.ts";

declare global {
  interface Map<K, V> {
    [key]: typeof value;
  }
}

Object.defineProperty(Map.prototype, key, { value });

export default key;
