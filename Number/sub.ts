import key from "../symbols/sub.ts";
import value from "./functions/sub.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

export default key;
