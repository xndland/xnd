import key from "../symbols/mapTo.ts";
import value from "./functions/mapTo.ts";

declare global {
  interface Set<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Set.prototype, key, { value });

export default key;
