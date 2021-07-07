import add from "../symbols/add.ts";

export default interface MutableCollection<T> {
  [add](value: T): this;
}
