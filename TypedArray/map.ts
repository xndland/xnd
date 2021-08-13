import TypedArray from "../constructors/TypedArray.ts";
import key from "../symbols/map.ts";
import value from "./functions/map.ts";

declare global {
  interface TypedArray<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(TypedArray.prototype, key, { value });

export default key;
