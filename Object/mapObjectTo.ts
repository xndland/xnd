import key from "../symbols/mapObjectTo.ts";
import value from "./functions/mapTo.ts";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

export default key;
