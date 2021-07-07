import key from "../symbols/then.ts";
import value from "./functions/then.ts";

declare global {
  interface Promise<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(Promise.prototype, key, { value });

export default key;
