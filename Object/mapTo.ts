import key from "../symbols/mapTo.ts";
import value from "../symbols/mapObjectTo.ts";
import "./mapObjectTo.ts";

declare global {
  interface ObjectConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(Object, key, { value });

export default key;
