import key from "../symbols/apply.ts";
import value from "./functions/apply.ts";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

export default key;
