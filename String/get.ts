import key from "../symbols/get.ts";
import value from "./functions/get.ts";

declare global {
  interface String {
    [key]: typeof value;
  }
}

Object.defineProperty(String.prototype, key, { value });

export default key;
