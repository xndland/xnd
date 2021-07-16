import TypedArray from "../constructors/TypedArray.ts";
import key from "../symbols/get.ts";
import value from "./functions/get.ts";

declare global {
  interface TypedArray<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(TypedArray.prototype, key, { value });

export default key;
