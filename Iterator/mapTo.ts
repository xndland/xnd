import IteratorPrototype from "../prototypes/Iterator.ts";
import key from "../symbols/mapTo.ts";
import value from "./functions/mapTo.ts";

declare global {
  interface Iterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(IteratorPrototype, key, { value });

export default key;
