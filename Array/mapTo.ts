import key from "../symbols/mapTo.ts";
import value from "./functions/mapTo.ts";

declare global {
  interface Array<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Array.prototype, key, { value });

export default key;
