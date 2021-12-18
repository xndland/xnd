import type Comparable from "../Comparable.d.ts";

import key from "../symbols/compareTo.ts";

declare global {
  // deno-lint-ignore no-empty-interface
  interface Date extends Comparable {}
}

Object.defineProperty(Date.prototype, key, { value });

function value(this: Date, other: unknown): number {
  // @ts-expect-error allow invalid date coercion
  const that = new Date(other);
  return this.valueOf() - that.valueOf();
}

export default key;
