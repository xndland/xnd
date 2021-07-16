import key from "../symbols/get.ts";
import value from "./functions/get.ts";

declare global {
  interface Array<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Array.prototype, key, { value });

export default key;
