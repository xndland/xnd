import key from "../symbols/mapObject.ts";
import value from "./functions/map.ts";

declare global {
  interface Object {
    [key]: typeof value;
  }
}

Object.defineProperty(Object.prototype, key, { value });

export default key;
