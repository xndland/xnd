import key from "../symbols/sub.ts";

declare global {
  interface BigInt {
    [key]: typeof value;
  }
}

Object.defineProperty(BigInt.prototype, key, { value });

function value(this: bigint, other: bigint): bigint {
  return this - other;
}

export default key;
