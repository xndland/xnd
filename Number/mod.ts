import key from "../symbols/mod.ts";
import value from "./functions/mod.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
