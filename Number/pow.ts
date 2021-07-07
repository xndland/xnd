import key from "../symbols/pow.ts";
import value from "./functions/pow.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
