import AsyncIteratorPrototype from "../prototypes/AsyncIterator.ts";
import key from "../symbols/mapTo.ts";
import value from "./functions/mapTo.ts";

declare global {
  interface AsyncIterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(AsyncIteratorPrototype, key, { value });

export default key;
