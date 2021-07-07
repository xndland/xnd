declare const pow: unique symbol;

declare global {
  interface Number {
    [pow](n: number): number;
  }
  interface BigInt {
    [pow](n: bigint): bigint;
  }
}

export default pow;
