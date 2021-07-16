import TypedArray from "../constructors/TypedArray.ts";
import key from "../symbols/set.ts";
import value from "./functions/set.ts";

declare global {
  interface TypedArray<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(TypedArray.prototype, key, { value });

export default key;
