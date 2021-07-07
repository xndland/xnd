import AsyncIteratorPrototype from "../prototypes/AsyncIterator.ts";
import key from "../symbols/map.ts";
import value from "./functions/map.ts";

declare global {
  interface AsyncIterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(AsyncIteratorPrototype, key, { value });

export default key;
