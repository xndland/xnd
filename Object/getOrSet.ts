import key from "../symbols/getOrSet.ts";
import value from "./functions/getOrSet.ts";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

export default key;
