import key from "../symbols/add.ts";
import value from "./functions/add.ts";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

export default key;
