declare const mod: unique symbol;

declare global {
  interface Number {
    [mod](n: number): number;
  }
  interface BigInt {
    [mod](n: bigint): bigint;
  }
}

export default mod;
