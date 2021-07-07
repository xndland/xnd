import IteratorPrototype from "../prototypes/Iterator.ts";
import key from "../symbols/map.ts";
import value from "./functions/map.ts";

declare global {
  interface Iterator<T> {
    [key]: typeof value;
  }
}

Object.defineProperty(IteratorPrototype, key, { value });

export default key;
