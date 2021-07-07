import key from "../symbols/map.ts";
import value from "../symbols/mapObject.ts";
import "./mapObject.ts";

declare global {
  interface ObjectConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(Object, key, { value });

export default key;
