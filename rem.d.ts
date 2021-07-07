declare const rem: unique symbol;

declare global {
  interface Number {
    [rem](n: number): number;
  }
  interface BigInt {
    [rem](n: bigint): bigint;
  }
}

export default rem;
