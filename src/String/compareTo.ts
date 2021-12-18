import type Comparable from "../Comparable.d.ts";

import key from "../symbols/compareTo.ts";

declare global {
  // deno-lint-ignore no-empty-interface
  interface String extends Comparable {}
}

Object.defineProperty(String.prototype, key, { value });

function value(this: string, other: unknown): number {
  const that = String(other);
  return this === that ? 0 : this < that ? -1 : +1;
}

export default key;
