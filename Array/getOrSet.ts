import key from "../symbols/getOrSet.ts";
import value from "./functions/getOrSet.ts";

declare global {
  interface Array<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Array.prototype, key, { value });

export default key;
