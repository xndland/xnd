import key from "../symbols/map.ts";
import value from "./functions/map.ts";

declare global {
  interface Array<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Array.prototype, key, { value });

export default key;
