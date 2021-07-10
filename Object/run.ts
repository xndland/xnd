import key from "../symbols/run.ts";
import value from "./functions/run.ts";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

export default key;
