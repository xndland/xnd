declare const sub: unique symbol;

declare global {
  interface Number {
    [sub](n: number): number;
  }
  interface BigInt {
    [sub](n: bigint): bigint;
  }
}

export default sub;
