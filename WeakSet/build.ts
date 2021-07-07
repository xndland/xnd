import key from "../symbols/build.ts";
import value from "./functions/build.ts";

declare global {
  interface WeakSetConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakSet, key, { value });

export default key;
