import key from "../symbols/set.ts";
import value from "./functions/set.ts";

declare global {
  interface Array<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Array.prototype, key, { value });

export default key;
