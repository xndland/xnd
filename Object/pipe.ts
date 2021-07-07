import key from "../symbols/pipe.ts";
import value from "./functions/pipe.ts";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

export default key;
