import key from "../symbols/build.ts";
import value from "./functions/build.ts";

declare global {
  interface StringConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(String, key, { value });

export default key;
