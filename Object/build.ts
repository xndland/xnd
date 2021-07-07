import key from "../symbols/build.ts";
import value from "./functions/build.ts";

declare global {
  interface ObjectConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(Object, key, { value });

export default key;
