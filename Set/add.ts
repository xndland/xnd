import key from "../symbols/add.ts";
import value from "./functions/add.ts";

declare global {
  interface Set<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Set.prototype, key, { value });

export default key;
