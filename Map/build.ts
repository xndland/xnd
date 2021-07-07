import key from "../symbols/build.ts";
import value from "./functions/build.ts";

declare global {
  interface MapConstructor {
    [key]: typeof value;
  }
}

Object.defineProperty(Map, key, { value });

export default key;
