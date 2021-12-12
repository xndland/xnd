import type Comparable from "../Comparable.ts";

import key from "../symbols/compareTo.ts";

declare global {
  // deno-lint-ignore no-empty-interface
  interface BigInt extends Comparable {}
}

Object.defineProperty(BigInt.prototype, key, { value });

function value(this: bigint, other: unknown): number {
  // @ts-expect-error allow SyntaxError
  const that = BigInt(other);
  return Number(this - that);
}

export default key;
