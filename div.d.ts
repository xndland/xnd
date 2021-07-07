declare const div: unique symbol;

declare global {
  interface Number {
    [div](n: number): number;
  }
  interface BigInt {
    [div](n: bigint): bigint;
  }
}

export default div;
