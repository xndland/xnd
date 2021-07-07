import key from "../symbols/build.ts";
import value from "./functions/build.ts";

declare global {
  interface SetConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(Set, key, { value });

export default key;
