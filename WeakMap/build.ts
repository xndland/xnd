import key from "../symbols/build.ts";
import value from "./functions/build.ts";

declare global {
  interface WeakMapConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakMap, key, { value });

export default key;
