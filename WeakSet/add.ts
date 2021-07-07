import key from "../symbols/add.ts";
import value from "./functions/add.ts";

declare global {
  interface WeakSet<T extends object> {
    [key]: typeof value;
  }
}

Object.defineProperty(WeakSet.prototype, key, { value });

export default key;
