import key from "../symbols/rem.ts";

declare global {
  interface Number {
    [key]: typeof value;
  }
}

Object.defineProperty(Number.prototype, key, { value });

function value(this: number, other: number): number {
  return this % other;
}

export default key;
