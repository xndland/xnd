import type Comparable from "../Comparable.d.ts";

import key from "../symbols/compareTo.ts";

declare global {
  // deno-lint-ignore no-empty-interface
  interface Boolean extends Comparable {}
}

Object.defineProperty(Boolean.prototype, key, { value });

function value(this: boolean, other: unknown): number {
  const that = Boolean(other);
  return Number(this) - Number(that);
}

export default key;
