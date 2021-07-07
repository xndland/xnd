import key from "../symbols/mul.ts";
import value from "./functions/mul.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
