import key from "../symbols/map.ts";
import value from "./functions/map.ts";

declare global {
  interface Set<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Set.prototype, key, { value });

export default key;
