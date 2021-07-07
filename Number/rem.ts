import key from "../symbols/rem.ts";
import value from "./functions/rem.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
