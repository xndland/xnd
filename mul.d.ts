declare const mul: unique symbol;

declare global {
  interface Number {
    [mul](n: number): number;
  }
  interface BigInt {
    [mul](n: bigint): bigint;
  }
}

export default mul;
