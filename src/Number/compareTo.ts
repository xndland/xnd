import type Comparable from "../Comparable.ts";

import key from "../symbols/compareTo.ts";

declare global {
  // deno-lint-ignore no-empty-interface
  interface Number extends Comparable {}
}

Object.defineProperty(Number.prototype, key, { value });

function value(this: number, other: unknown): number {
  const that = Number(other);
  return this === that || Number.isNaN(this) || Number.isNaN(that)
    ? 0
    : this - that;
}

export default key;
