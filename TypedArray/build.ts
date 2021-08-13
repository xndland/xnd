import TypedArray from "../constructors/TypedArray.ts";
import key from "../symbols/build.ts";
import value from "./functions/build.ts";

declare global {
  interface TypedArrayConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(TypedArray, key, { value });

export default key;
