import key from "../symbols/add.ts";
import value from "./functions/add.ts";

declare global {
  interface Array<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Array.prototype, key, { value });

export default key;
