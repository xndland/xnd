import key from "../symbols/takeIf.ts";
import value from "./functions/takeIf.ts";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

export default key;
